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

const mock = [
  {
    id: 1,
    name: "Pedro Silva",
    class: "T10",
    age: 19,
  },
  {
    id: 2,
    name: "Debora Lopes",
    class: "T10",
    age: 25,
  },
  {
    id: 3,
    name: "Barbara Ruiz",
    class: "T10",
    age: 22,
  },
  {
    id: 4,
    name: "Vitor Vasconcelos",
    class: "T10",
    age: 30,
  },
];

export const StudentContextProvider = ({ children }: StudentContextProps) => {
  const [students, setStudents] = useState<Student[]>(mock);

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
