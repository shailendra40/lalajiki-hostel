import { ApiProperty } from '@nestjs/swagger';

export class UpdateRoomDto {
  @ApiProperty({ example: 'Room A', description: 'The name of the room', required: false })
  name?: string;

  @ApiProperty({ example: 101, description: 'The room number', required: false })
  roomNumber?: number;

  @ApiProperty({ example: 30, description: 'The capacity of the room', required: false })
  capacity?: number;

  @ApiProperty({ example: 25, description: 'The current occupancy of the room', required: false })
  occupancy?: number;

  @ApiProperty({ example: 'Lecture Hall', description: 'The type of the room', required: false })
  type?: string;

  @ApiProperty({
    example: ['student1_id', 'student2_id'],
    description: 'List of student IDs in the room',
    isArray: true,
    required: false,
  })
  students?: string[];
}
