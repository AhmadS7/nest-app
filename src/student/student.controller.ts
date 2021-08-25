/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

import { Controller, Get, Put, Post } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'We Are The Victorious Students';
  }

  @Get('/:studentId')
  getStudentById() {
    return 'Gte Student By Id';
  }

  @Post()
  createStudent() {
    return 'Building a new Nation';
  }

  @Put('/:studentId')
  updateStudent() {
    return 'Update Student By Id';
  }
}
