/* eslint-disable prettier/prettier */
import { Put } from '@nestjs/common';
import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';

@Controller('/teachers/:teacherById/students')
export class StudentTeacherController {
  @Get()
  getStudents() {
    return 'Get All Students that under this teacher';
  }

  @Put('/:studentId')
  updateStudentTeacher() {
    return 'Update Student Teacher';
  }
}
