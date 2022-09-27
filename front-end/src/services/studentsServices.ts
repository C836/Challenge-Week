import { Student } from "../types/Student";
import Api from "./api";

export const getAll = async () => {
  try {
    const students = await Api.get(`/students`);
    return students.data;
  } catch (err) {
    throw err;
  }
};

export const getStudent = async (id: number) => {
  try {
    const student = await Api.get(`/students/` + id);
    return student.data;
  } catch (err) {
    throw err;
  }
};

export const postStudent = async (body: Student) => {
  try {
    const result = await Api.post(`/students/new`, body);
    return result;
  } catch (err) {
    throw err;
  }
};

export const deleteStudent = async (id: number) => {
  try {
    const result = await Api.delete(`/students/delete/` + id);
    return result;
  } catch (err) {
    throw err;
  }
};

export const studentsService = {
  getAll,
  getStudent,
  postStudent,
  deleteStudent,
};
