/* eslint-disable prettier/prettier */
import { Body, Put } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';

@Controller('/teachers/:teacherById/students')
export class StudentTeacherController {
  @Get()
  getStudents(@Param('teacherById') teacherById: string) {
    return `Get All The Students that under the teacher with the specified ID: ${teacherById}`;
  }

  @Put('/:studentId')
  updateStudentTeacher(
    @Body() body,
    @Param('teacherById') teacherById: string,
    @Param('studentId') studentId: string,
  ) {
    return `Update Student with the specified ID: ${studentId} and Teacher with ID of ${teacherById}`;
  }
}
