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
exports.UpdateStudentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UpdateStudentDto {
}
exports.UpdateStudentDto = UpdateStudentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe', required: false }),
    __metadata("design:type", String)
], UpdateStudentDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 20, required: false }),
    __metadata("design:type", Number)
], UpdateStudentDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Male', required: false }),
    __metadata("design:type", String)
], UpdateStudentDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Computer Science', required: false }),
    __metadata("design:type", String)
], UpdateStudentDto.prototype, "course", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, required: false }),
    __metadata("design:type", Number)
], UpdateStudentDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2, required: false }),
    __metadata("design:type", Number)
], UpdateStudentDto.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john.doe@example.com', required: false }),
    __metadata("design:type", String)
], UpdateStudentDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+1234567890', required: false }),
    __metadata("design:type", String)
], UpdateStudentDto.prototype, "phone", void 0);
//# sourceMappingURL=update-student.dto.js.map