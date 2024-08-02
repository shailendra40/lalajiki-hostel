import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class CreateStudentDto {
  @ApiProperty({ example: 'John Doe' })
  name: string;

  @ApiProperty({ example: 20 })
  @Type(() => Number)
  age: number;

  @ApiProperty({ example: 'Male' })
  gender: string;

  @ApiProperty({ example: 'Computer Science' })
  course: string;

  @ApiProperty({ example: 2 })
  @Type(() => Number)
  year: number;

  @ApiProperty({ example: 2 })
  @Type(() => Number)
  roomId: number;

  @ApiProperty({ example: 'john.doe@example.com' })
  email: string;

  @ApiProperty({ example: '+1234567890' })
  phone: string;

  @ApiProperty({ type: 'file', format: 'binary' })
  file: any;
}
