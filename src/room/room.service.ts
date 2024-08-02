import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma, Room } from '@prisma/client';
import { UpdateRoomDto } from './dto/update-room.dto';
import { CreateRoomDto } from './dto/create-room.dto';

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateRoomDto): Promise<Room> {
    return this.prisma.room.create({
      data: {
        name: data.name,
        roomNumber: data.roomNumber,
        capacity: data.capacity,
        occupancy: data.occupancy,
        type: data.type,
      },
    });
  }

  async findAll(): Promise<Room[]> {
    return this.prisma.room.findMany();
  }

  async findOne(id: number): Promise<Room | null> {
    return this.prisma.room.findUnique({ where: { id } });
  }

  async update(id: number, data: UpdateRoomDto) {
    return this.prisma.room.update({ where: { id }, data:{
      name: data.name,
      roomNumber: data.roomNumber,
      capacity: data.capacity,
      occupancy: data.occupancy,
      type: data.type,
    } });
  }

  async remove(id: number): Promise<Room> {
    return this.prisma.room.delete({ where: { id } });
  }
}

// @Injectable()
// export class RoomService {
//   constructor(private prisma: PrismaService) {}

//   async findAll(): Promise<Room[]> {
//     return this.prisma.room.findMany({
//       include: { students: true },
//     });
//   }

//   async findOne(id: number): Promise<Room | null> {
//     return this.prisma.room.findUnique({
//       where: { id },
//       include: { students: true },
//     });
//   }

//   async create(data: Prisma.RoomCreateInput): Promise<Room> {
//     return this.prisma.room.create({
//       data,
//     });
//   }

//   async update(id: number, data: Prisma.RoomUpdateInput): Promise<Room> {
//     return this.prisma.room.update({
//       where: { id },
//       data,
//     });
//   }

//   async delete(id: number): Promise<Room> {
//     return this.prisma.room.delete({
//       where: { id },
//     });
//   }
// }
