import { PrismaService } from 'src/prisma/prisma.service';
import { Room } from '@prisma/client';
import { UpdateRoomDto } from './dto/update-room.dto';
import { CreateRoomDto } from './dto/create-room.dto';
export declare class RoomService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: CreateRoomDto): Promise<Room>;
    findAll(): Promise<Room[]>;
    findOne(id: number): Promise<Room | null>;
    update(id: number, data: UpdateRoomDto): Promise<{
        id: number;
        name: string;
        roomNumber: number;
        capacity: number;
        occupancy: number;
        type: string;
    }>;
    remove(id: number): Promise<Room>;
}
