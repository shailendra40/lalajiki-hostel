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
exports.UpdateRoomDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UpdateRoomDto {
}
exports.UpdateRoomDto = UpdateRoomDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Room A', description: 'The name of the room', required: false }),
    __metadata("design:type", String)
], UpdateRoomDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 101, description: 'The room number', required: false }),
    __metadata("design:type", Number)
], UpdateRoomDto.prototype, "roomNumber", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 30, description: 'The capacity of the room', required: false }),
    __metadata("design:type", Number)
], UpdateRoomDto.prototype, "capacity", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 25, description: 'The current occupancy of the room', required: false }),
    __metadata("design:type", Number)
], UpdateRoomDto.prototype, "occupancy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Lecture Hall', description: 'The type of the room', required: false }),
    __metadata("design:type", String)
], UpdateRoomDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: ['student1_id', 'student2_id'],
        description: 'List of student IDs in the room',
        isArray: true,
        required: false,
    }),
    __metadata("design:type", Array)
], UpdateRoomDto.prototype, "students", void 0);
//# sourceMappingURL=update-room.dto.js.map