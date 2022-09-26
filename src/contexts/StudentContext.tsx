import { createContext, ReactNode, useState } from "react";
import { studentsService } from "../services/studentsServices";

import { Student } from "../types/Student";

type StudentContextProps = {
  children: ReactNode;
};

type StudentContextType = {
  students: Student[];
  createStudent: (data: Student) => void;
  deleteStudent: (id: number) => Promise<void>;
  setStudents: (newState: Student[]) => void;
  syncApi: () => Promise<void>;
};

export const StudentContext = createContext<StudentContextType>(
  {} as StudentContextType
);

export const StudentContextProvider = ({ children }: StudentContextProps) => {
  const [students, setStudents] = useState<Student[]>([]);

  const createStudent = async (data: Student) => {

    studentsService.postStudent(data);
    setStudents([...students, data]);
  };

  const deleteStudent = async (id: number) => {
    studentsService.deleteStudent(id)
    setStudents(students.filter(student => student._id !== id));
  };

  const syncApi = async () => {
    const dataApi = await studentsService.getAll();

    const result = dataApi.map((student: Student) => {
      return student;
    });

    setStudents(result);
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        setStudents,
        createStudent,
        deleteStudent,
        syncApi,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
