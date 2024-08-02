"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer_1 = require("multer");
const multerOptions = {
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
};
exports.default = multerOptions;
//# sourceMappingURL=multer.config.js.map