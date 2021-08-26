/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

import { Controller, Get, Put, Post, Param, Body } from '@nestjs/common';

@Controller('students')
export class StudentController {
  @Get()
  getStudents() {
    return 'We Are The Victorious Students';
  }

  @Get('/:studentId')
  getStudentById(@Param('studentId') studentId: string) {
    return `Get Student With ID of ${studentId}`;
  }

  @Post()
  createStudent(@Body() body) {
    return `Creating Student with ID Following Data: ${JSON.stringify(body)}`;
  }

  @Put('/:studentId')
  updateStudent(@Param('studentId') studentId: string, @Body() body) {
    return `Updating Student with ID: ${studentId} and with Following Data: ${JSON.stringify(
      body,
    )}`;
  }
}
