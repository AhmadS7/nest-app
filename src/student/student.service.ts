/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */
import { Injectable } from '@nestjs/common';
import { students } from '../db';
import {
  CreateStudentDto,
  FindStudentResponseDto,
  StudentResponseDto,
  UpdateStudentDto,
} from './dto/student.dto';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  private students = students;
  getStudents(): FindStudentResponseDto[] {
    return this.students;
  }

  getStudentById(studentId: string): FindStudentResponseDto {
    return this.students.find((student) => student.id === studentId);
  }

  createStudent(payload: CreateStudentDto): StudentResponseDto {
    let newStudent = {
      id: uuid(),
      ...payload,
    };

    this.students.push(newStudent);
    return newStudent;
  }

  updateStudent(payload: UpdateStudentDto, studentId: string) {
    let updatedStudent: StudentResponseDto;

    let updatedStudentList = this.students.map((student) => {
      if (student.id === studentId) {
        updatedStudent = {
          id: studentId,
          ...payload,
        };
      } else return student;
    });

    this.students = updatedStudentList;
    return updatedStudent;
  }
}
