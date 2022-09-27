import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Student } from 'src/types/Student';

@Injectable()
export class StudentsService {
  constructor(
    @InjectModel('Students')
    private readonly StudentsModel: Model<Student>,
  ) {}
  
  async create(student: Student) {
    const result = await new this.StudentsModel(student)
      .save();

    return result;
  }

  async getAll() {
    const result = await this.StudentsModel
      .find()
      .sort({ _id: "asc" });

    return result;
  }

  async get(id: number) {
    const result = await this.StudentsModel
      .findOne({ _id: id })
      .orFail();

    return result;
  }

  async delete(id: number) {
    await this.StudentsModel
      .deleteOne({ _id: id })
      .orFail();

    return `Id ${id} removed from database`;
  }
}
