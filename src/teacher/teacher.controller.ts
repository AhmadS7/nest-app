/* eslint-disable prettier/prettier */
import { Get, Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { FindStudentResponseDto } from 'src/student/dto/student.dto';
import { FindTeacherResponseDto } from './dt/teacher.dto';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers(): FindTeacherResponseDto[] {
    return 'Our Teachers are Righteous';
  }

  @Get('/:teacherById')
  getTeacherById(
    @Param('teacherById') teacherById: string,
  ): FindStudentResponseDto {
    return `Get Teacher By Id of: ${teacherById}`;
  }
}
