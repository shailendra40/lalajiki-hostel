/// <reference types="multer" />
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    create(createStudentDto: CreateStudentDto, file: Express.Multer.File): Promise<{
        id: number;
        name: string;
        age: number;
        gender: string;
        course: string;
        year: number;
        roomId: number;
        email: string;
        phone: string;
        profileimage: string;
    }>;
    findAll(): void;
    findOne(id: string): Promise<any>;
    update(id: string, updateStudentDto: UpdateStudentDto): Promise<{
        id: number;
        name: string;
        age: number;
        gender: string;
        course: string;
        year: number;
        roomId: number;
        email: string;
        phone: string;
        profileimage: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        age: number;
        gender: string;
        course: string;
        year: number;
        roomId: number;
        email: string;
        phone: string;
        profileimage: string;
    }>;
    addStudentToRoom(studentId: string, roomId: string): Promise<{
        id: number;
        name: string;
        age: number;
        gender: string;
        course: string;
        year: number;
        roomId: number;
        email: string;
        phone: string;
        profileimage: string;
    }>;
    removeStudentFromRoom(studentId: string, roomId: string): Promise<{
        id: number;
        name: string;
        age: number;
        gender: string;
        course: string;
        year: number;
        roomId: number;
        email: string;
        phone: string;
        profileimage: string;
    }>;
}
