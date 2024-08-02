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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const common_1 = require("@nestjs/common");
const student_service_1 = require("./student.service");
const create_student_dto_1 = require("./dto/create-student.dto");
const update_student_dto_1 = require("./dto/update-student.dto");
const swagger_1 = require("@nestjs/swagger");
const platform_express_1 = require("@nestjs/platform-express");
const class_transformer_1 = require("class-transformer");
const multer_1 = require("multer");
let StudentController = class StudentController {
    constructor(studentService) {
        this.studentService = studentService;
    }
    create(createStudentDto, file) {
        console.log('Uploaded file===============================================:\n', file);
        console.log('=============================================================\n');
        const data = (0, class_transformer_1.plainToClass)(create_student_dto_1.CreateStudentDto, createStudentDto);
        return this.studentService.create(data, file);
    }
    findAll() {
    }
    findOne(id) {
        return this.studentService.findOne(+id);
    }
    update(id, updateStudentDto) {
        return this.studentService.update(+id, updateStudentDto);
    }
    remove(id) {
        return this.studentService.remove(+id);
    }
    addStudentToRoom(studentId, roomId) {
        return this.studentService.addStudentToRoom(+studentId, +roomId);
    }
    removeStudentFromRoom(studentId, roomId) {
        return this.studentService.removeStudentFromRoom(+studentId, +roomId);
    }
};
exports.StudentController = StudentController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Create a new student' }),
    (0, swagger_1.ApiConsumes)('multipart/form-data'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        dest: './uploads',
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, callback) => {
                const name = file.originalname.split('.')[0];
                const fileExtName = file.originalname.split('.')[1];
                const randomName = Array(4)
                    .fill(null)
                    .map(() => Math.round(Math.random() * 16).toString(16))
                    .join('');
                callback(null, `${name}-${randomName}.${fileExtName}`);
            },
        }),
    })),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_student_dto_1.CreateStudentDto, Object]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Get all students' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Get a student by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Update a student by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_student_dto_1.UpdateStudentDto]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Delete a student by ID' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "remove", null);
__decorate([
    (0, common_1.Post)(':id/rooms/:roomId'),
    (0, swagger_1.ApiOperation)({ summary: 'Add a student to a room' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number' }),
    (0, swagger_1.ApiParam)({ name: 'roomId', type: 'number' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('roomId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "addStudentToRoom", null);
__decorate([
    (0, common_1.Delete)(':id/rooms/:roomId'),
    (0, swagger_1.ApiOperation)({ summary: 'Remove a student from a room' }),
    (0, swagger_1.ApiParam)({ name: 'id', type: 'number' }),
    (0, swagger_1.ApiParam)({ name: 'roomId', type: 'number' }),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Param)('roomId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], StudentController.prototype, "removeStudentFromRoom", null);
exports.StudentController = StudentController = __decorate([
    (0, swagger_1.ApiTags)('students'),
    (0, common_1.Controller)('students'),
    __metadata("design:paramtypes", [student_service_1.StudentService])
], StudentController);
//# sourceMappingURL=student.controller.js.map