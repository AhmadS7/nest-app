/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, ParseUUIDPipe, Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { StudentService } from '../student/student.service';
import {
  FindStudentsResponseDto,
  StudentResponseDto,
} from '../student/dto/student.dto';

@Controller('/teachers/:teacherId/students')
export class StudentTeacherController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudents(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): FindStudentsResponseDto[] {
    return this.studentService.getStudentsByTeacherId(teacherId);
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): StudentResponseDto {
    return this.studentService.updateStudentTeacher(teacherId, studentId);
  }
}
