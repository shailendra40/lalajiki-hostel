import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import {
  ApiTags,
  ApiOperation,
  ApiParam,
  ApiBody,
  ApiConsumes,
} from '@nestjs/swagger';
import { FileInterceptor } from '@nestjs/platform-express';
import { plainToClass } from 'class-transformer';
import { diskStorage } from 'multer';
// import { FileInterceptor } from '@nestjs/platform-express';
// import { diskStorage } from 'multer';

@ApiTags('students')
@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // Endpoint to create a new student with file upload
  @Post()
  @ApiOperation({ summary: 'Create a new student' })
  @ApiConsumes('multipart/form-data')
  @UseInterceptors(
    FileInterceptor('file', {
      dest: './uploads',
      storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
          const name = file.originalname.split('.')[0];
          const fileExtName = file.originalname.split('.')[1];
          const randomName = Array(4)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          callback(null, `${name}-${randomName}.${fileExtName}`);
        },
      }),
    }),
  )
  create(@Body() createStudentDto: CreateStudentDto, @UploadedFile() file:Express.Multer.File) {
    console.log(
      'Uploaded file===============================================:\n',
      file,
    );
    console.log(
      '=============================================================\n',
    );
    const data = plainToClass(CreateStudentDto, createStudentDto);
    return this.studentService.create(data, file);
  }

  //   @ApiTags('students')
  // @Controller('students')
  // export class StudentController {
  //   constructor(private readonly studentService: StudentService) {}

  //   @Post()
  //   @ApiOperation({ summary: 'Create a new student' })
  //   @ApiBody({
  //     description: 'Student data and file',
  //     type: 'object',
  //     properties: {
  //       name: { type: 'string', example: 'John Doe' },
  //       age: { type: 'number', example: 20 },
  //       gender: { type: 'string', example: 'Male' },
  //       course: { type: 'string', example: 'Computer Science' },
  //       year: { type: 'number', example: 2 },
  //       roomId: { type: 'number', example: 2 },
  //       email: { type: 'string', example: 'john.doe@example.com' },
  //       phone: { type: 'string', example: '+1234567890' },
  //       file: { type: 'string', format: 'binary' },
  //     },
  //   })
  //   async create(@Body() createStudentDto: CreateStudentDto) {
  //     const file = createStudentDto.file;
  //     const filePath = `./files/images/${Date.now()}-${file.originalname}`;

  //     try {
  //       fs.writeFileSync(filePath, file.buffer); // Save the file
  //       createStudentDto.filePath = filePath; // Add file path to DTO
  //       return this.studentService.create(createStudentDto);
  //     } catch (error) {
  //       throw new Error('Failed to upload file');
  //     }
  //   }

  @Get()
  @ApiOperation({ summary: 'Get all students' })
  findAll() {
    // return this.studentService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a student by ID' })
  @ApiParam({ name: 'id', type: 'number' })
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a student by ID' })
  @ApiParam({ name: 'id', type: 'number' })
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(+id, updateStudentDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a student by ID' })
  @ApiParam({ name: 'id', type: 'number' })
  remove(@Param('id') id: string) {
    return this.studentService.remove(+id);
  }

  @Post(':id/rooms/:roomId')
  @ApiOperation({ summary: 'Add a student to a room' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiParam({ name: 'roomId', type: 'number' })
  addStudentToRoom(
    @Param('id') studentId: string,
    @Param('roomId') roomId: string,
  ) {
    return this.studentService.addStudentToRoom(+studentId, +roomId);
  }

  @Delete(':id/rooms/:roomId')
  @ApiOperation({ summary: 'Remove a student from a room' })
  @ApiParam({ name: 'id', type: 'number' })
  @ApiParam({ name: 'roomId', type: 'number' })
  removeStudentFromRoom(
    @Param('id') studentId: string,
    @Param('roomId') roomId: string,
  ) {
    return this.studentService.removeStudentFromRoom(+studentId, +roomId);
  }
}
