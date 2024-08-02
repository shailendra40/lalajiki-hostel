"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let StudentService = class StudentService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createStudentDto, file) {
        return this.prisma.student.create({
            data: {
                ...createStudentDto,
                roomId: createStudentDto.roomId,
                profileimage: file?.path,
            },
        });
    }
    async findOne(id) {
        const student = await this.prisma.student.findUnique({
            where: { id },
            include: {
                room: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });
        if (!student) {
            return null;
        }
        return {
            id: student.id,
            name: student.name,
            room: student.room
                ? {
                    id: student.room.id,
                    name: student.room.name,
                }
                : null,
        };
    }
    async update(id, data) {
        return this.prisma.student.update({ where: { id }, data });
    }
    async remove(id) {
        return this.prisma.student.delete({ where: { id } });
    }
    async addStudentToRoom(studentId, roomId) {
        return this.prisma.student.update({
            where: { id: studentId },
            data: { room: { connect: { id: roomId } } },
        });
    }
    async removeStudentFromRoom(studentId, roomId) {
        return this.prisma.student.update({
            where: { id: studentId },
            data: { room: { disconnect: { id: roomId } } },
        });
    }
};
exports.StudentService = StudentService;
exports.StudentService = StudentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], StudentService);
//# sourceMappingURL=student.service.js.map