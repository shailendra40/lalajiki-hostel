import { RoomService } from './room.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
export declare class RoomController {
    private readonly roomService;
    constructor(roomService: RoomService);
    create(createRoomDto: CreateRoomDto): Promise<{
        id: number;
        name: string;
        roomNumber: number;
        capacity: number;
        occupancy: number;
        type: string;
    }>;
    findAll(): Promise<{
        id: number;
        name: string;
        roomNumber: number;
        capacity: number;
        occupancy: number;
        type: string;
    }[]>;
    findOne(id: string): Promise<{
        id: number;
        name: string;
        roomNumber: number;
        capacity: number;
        occupancy: number;
        type: string;
    }>;
    update(id: string, updateRoomDto: UpdateRoomDto): Promise<{
        id: number;
        name: string;
        roomNumber: number;
        capacity: number;
        occupancy: number;
        type: string;
    }>;
    remove(id: string): Promise<{
        id: number;
        name: string;
        roomNumber: number;
        capacity: number;
        occupancy: number;
        type: string;
    }>;
}
