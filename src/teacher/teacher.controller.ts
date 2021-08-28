/* eslint-disable prettier/prettier */
import { Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { FindTeacherResponseDto } from './dt/teacher.dto';
import { TeacherService } from './teacher.service';

@Controller('teachers')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}

  @Get()
  getTeachers(): FindTeacherResponseDto[] {
    return this.teacherService.getTeachers();
  }

  @Get('/:teacherId')
  getTeacherById(
    @Param('teacherId', new ParseUUIDPipe()) teacherId: string,
  ): FindTeacherResponseDto {
    return this.teacherService.getTeacherById(teacherId);
  }
}
