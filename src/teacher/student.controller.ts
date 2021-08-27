/* eslint-disable prettier/prettier */
import { Body, Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { StudentService } from '../student/student.service';
import {
  FindStudentResponseDto,
  StudentResponseDto,
} from '../student/dto/student.dto';

@Controller('/teachers/:teacherById/students')
export class StudentTeacherController {
  constructor(private readonly studentsService: StudentService) {}

  @Get()
  getStudents(@Param('teacherId') teacherId: string): FindStudentResponseDto[] {
    return this.studentsService.getStudentsByTeacherId(teacherId);
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Param('teacherById') teacherId: string,
    @Param('studentId') studentId: string,
  ): StudentResponseDto {
    return this.studentsService.updateStudentTeacher(teacherId, studentId);
  }
}
