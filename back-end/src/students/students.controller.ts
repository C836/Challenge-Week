import { Controller, Body, Param, Get, Post, Delete, HttpException } from '@nestjs/common';
import { Student } from 'src/types/Student';
import { StudentsService } from './students.service';

@Controller('students')
export class StudentsController {
  constructor(private studentsService: StudentsService) {}

  @Post('new')
  async create(
    @Body() student: Student) {

    try {
      const result = await this.studentsService.create(student);
      return result;
    } 
    
    catch (error) {
      throw new Error(error);
    }
  }

  @Get()
  async getAll() {

    try {
      const result = await this.studentsService.getAll();
      return result;
    }

    catch (error) {
      throw new Error(error);;
    }
  }

  @Get('/:id')
  async get(
    @Param('id') id: number) {

    try {
      const result = await this.studentsService.get(id);
      return result;
    } 

    catch (error) {
      throw new Error(error);;
    }
  }

  @Delete('delete/:id')
  async delete(
    @Param('id') id: number){

    try {
      const result = await this.studentsService.delete(id);
      return result;
    }

    catch (error) {
      throw new Error(error);;
    }
  }
}
