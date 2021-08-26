/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

import { Controller, Get, Put, Post, Param, Body } from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';

@Controller('students')
export class StudentController {
  @Get()
  getStudents(): FindStudentResponseDto[] {
    return 'We Are The Victorious Students';
  }

  @Get('/:studentId')
  getStudentById(
    @Param('studentId') studentId: string,
  ): FindStudentResponseDto {
    return `Get Student With ID of ${studentId}`;
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): FindStudentResponseDto {
    return `Creating Student with ID Following Data: ${JSON.stringify(body)}`;
  }

  @Put('/:studentId')
  updateStudent(
    @Param('studentId') studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return `Updating Student with ID: ${studentId} and with Following Data: ${JSON.stringify(
      body,
    )}`;
  }
}
