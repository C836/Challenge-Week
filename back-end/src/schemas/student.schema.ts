import { Schema } from 'mongoose';
import { Class, Student } from 'src/types/Student';

export const StudentsSchema = new Schema<Student>(
  {
    _id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    group: {
      type: String,
      enum: Class,
      required: true
    },
    age: {
      type: Number,
      required: true
    },
  },
  { collection: 'students', versionKey: false },
);
