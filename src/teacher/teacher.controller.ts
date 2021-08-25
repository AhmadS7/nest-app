/* eslint-disable prettier/prettier */
import { Get } from '@nestjs/common';
import { Controller } from '@nestjs/common';

@Controller('teachers')
export class TeacherController {
  @Get()
  getTeachers() {
    return 'Our Teachers are Righteous';
  }

  @Get('/:teacherById')
  getTeacherById() {
    return 'Get Teacher By Id';
  }
}
