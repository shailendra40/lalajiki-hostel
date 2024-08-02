import { ApiProperty } from '@nestjs/swagger';

export class CreateRoomDto {
  @ApiProperty({ example: 'Room A', description: 'The name of the room' })
  name: string;

  @ApiProperty({ example: 101, description: 'The room number' })
  roomNumber: number;

  @ApiProperty({ example: 30, description: 'The capacity of the room' })
  capacity: number;

  @ApiProperty({ example: 25, description: 'The current occupancy of the room' })
  occupancy: number;

  @ApiProperty({ example: 'Lecture Hall', description: 'The type of the room' })
  type: string;

  @ApiProperty({
    example: ['student1_id', 'student2_id'],
    description: 'List of student IDs in the room',
    isArray: true,
  })
  students: string[];
}
