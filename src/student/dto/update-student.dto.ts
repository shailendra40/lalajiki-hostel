import { ApiProperty } from '@nestjs/swagger';

export class UpdateStudentDto {
  @ApiProperty({ example: 'John Doe', required: false })
  name?: string;

  @ApiProperty({ example: 20, required: false })
  age?: number;

  @ApiProperty({ example: 'Male', required: false })
  gender?: string;

  @ApiProperty({ example: 'Computer Science', required: false })
  course?: string;

  @ApiProperty({ example: 2, required: false })
  year?: number;

  @ApiProperty({ example: 2, required: false })
  roomId?: number;

  @ApiProperty({ example: 'john.doe@example.com', required: false })
  email?: string;

  @ApiProperty({ example: '+1234567890', required: false })
  phone?: string;
}
