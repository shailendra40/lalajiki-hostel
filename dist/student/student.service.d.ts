/// <reference types="multer" />
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Student } from '@prisma/client';
import { CreateStudentDto } from './dto/create-student.dto';
export declare class StudentService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createStudentDto: CreateStudentDto, file: Express.Multer.File): Promise<Student>;
    findOne(id: number): Promise<any>;
    update(id: number, data: Prisma.StudentUpdateInput): Promise<Student>;
    remove(id: number): Promise<Student>;
    addStudentToRoom(studentId: number, roomId: number): Promise<Student>;
    removeStudentFromRoom(studentId: number, roomId: number): Promise<Student>;
}
