/* eslint-disable prettier/prettier */
import { Body, Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import {
  FindStudentResponseDto,
  StudentResponseDto,
} from '../student/dto/student.dto';

@Controller('/teachers/:teacherById/students')
export class StudentTeacherController {
  @Get()
  getStudents(
    @Param('teacherById') teacherById: string,
  ): FindStudentResponseDto[] {
    return `Get All The Students that under the teacher with the specified ID: ${teacherById}`;
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Body() body,
    @Param('teacherById') teacherById: string,
    @Param('studentId') studentId: string,
  ): StudentResponseDto {
    return `Update Student with the specified ID: ${studentId} and Teacher with ID of ${teacherById}`;
  }
}
