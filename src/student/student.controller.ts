/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier

import {
  Controller,
  Get,
  Put,
  Post,
  Param,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import {
  CreateStudentDto,
  FindStudentsResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudent(): FindStudentsResponseDto[] {
    return this.studentService.getStudents();
  }

  @Get('/:studentId')
  getStudentById(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
  ): FindStudentsResponseDto {
    return this.studentService.getStudentById(studentId);
  }

  @Post()
  createStudent(@Body() body: CreateStudentDto): StudentResponseDto {
    return this.studentService.createStudent(body);
  }

  @Put('/:studentId')
  updateStudent(
    @Param('studentId', new ParseUUIDPipe()) studentId: string,
    @Body() body: UpdateStudentDto,
  ): StudentResponseDto {
    return this.studentService.updateStudent(body, studentId);
  }
}
