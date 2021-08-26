/* eslint-disable prettier/prettier */
import { Get, Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'Our Teachers are Righteous';
  }

  @Get('/:teacherById')
  getTeacherById(@Param('teacherById') teacherById: string) {
    return `Get Teacher By Id of: ${teacherById}`;
  }
}
