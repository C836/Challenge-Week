import { createContext, ReactNode, useState } from "react";
import { Student } from "../types/Student";

type StudentContextProps = {
  children: ReactNode;
};

type StudentContextType = {
  students: Student[];
  createStudent: (data: Student) => void;
  setStudents: (newState: Student[]) => void;
};

export const StudentContext = createContext<StudentContextType>(
  {} as StudentContextType
);

export const StudentContextProvider = ({ children }: StudentContextProps) => {
  const [students, setStudents] = useState<Student[]>([]);

  const createStudent = async (data: Student) => {
    const student = {
      id: data.id,
      name: data.name,
      class: data.class,
      age: data.age,
    };

    setStudents([...students, student]);
  };

  return (
    <StudentContext.Provider
      value={{
        students,
        setStudents,
        createStudent,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
