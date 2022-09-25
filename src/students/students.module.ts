import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { StudentsSchema } from '../schemas/student.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Students', schema: StudentsSchema }]),
  ],
  controllers: [StudentsController],
  providers: [StudentsService],
  exports: [StudentsService],
})
export class StudentsModule {}
