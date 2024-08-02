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
exports.CreateStudentDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_transformer_1 = require("class-transformer");
class CreateStudentDto {
}
exports.CreateStudentDto = CreateStudentDto;
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'John Doe' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 20 }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateStudentDto.prototype, "age", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Male' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "gender", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'Computer Science' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "course", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2 }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateStudentDto.prototype, "year", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2 }),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], CreateStudentDto.prototype, "roomId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 'john.doe@example.com' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "email", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: '+1234567890' }),
    __metadata("design:type", String)
], CreateStudentDto.prototype, "phone", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ type: 'file', format: 'binary' }),
    __metadata("design:type", Object)
], CreateStudentDto.prototype, "file", void 0);
//# sourceMappingURL=create-student.dto.js.map