import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Student } from '@prisma/client';
import { CreateStudentDto } from './dto/create-student.dto';
import { Express } from 'express';
import { parse } from 'path';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  // async create(data: Prisma.StudentCreateInput): Promise<Student> {
  //   return this.prisma.student.create({ data });
  // }

  // async findAll(): Promise<Student[]> {
  //   return this.prisma.student.findMany();
  // }

  async create(
    createStudentDto: CreateStudentDto,
    file: Express.Multer.File,
  ): Promise<Student> {
    return this.prisma.student.create({
      data: {
        ...createStudentDto,
        roomId: createStudentDto.roomId,
        profileimage: file?.path,
      },
    });
  }

  // async findOne(id: number): Promise<Student | null> {
  //   // return this.prisma.student.findUnique({ where: { id },include:{room:true} });
  //   return this.prisma.student.findUnique({ where: { id },include:{room:{select:{id:true, name:true}}} });
  // }

  // Retrieve a single student by ID, including only the 'id' and 'name' fields of the associated room
  async findOne(id: number): Promise<any> {
    // Updated to return a specific structure
    const student = await this.prisma.student.findUnique({
      where: { id },
      include: {
        room: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    });

    if (!student) {
      return null;
    }

    return {
      id: student.id,
      name: student.name,
      room: student.room
        ? {
            id: student.room.id,
            name: student.room.name,
          }
        : null,
    };
  }

  async update(id: number, data: Prisma.StudentUpdateInput): Promise<Student> {
    return this.prisma.student.update({ where: { id }, data });
  }

  async remove(id: number): Promise<Student> {
    return this.prisma.student.delete({ where: { id } });
  }

  async addStudentToRoom(studentId: number, roomId: number): Promise<Student> {
    return this.prisma.student.update({
      where: { id: studentId },
      data: { room: { connect: { id: roomId } } },
    });
  }

  async removeStudentFromRoom(
    studentId: number,
    roomId: number,
  ): Promise<Student> {
    return this.prisma.student.update({
      where: { id: studentId },
      data: { room: { disconnect: { id: roomId } } },
    });
  }
}
