import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { StudentModule } from './student/student.module';
import { RoomModule } from './room/room.module';
import { AppController } from './app.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import multerOptions from './multer.config';

@Module({
  imports: [
    PrismaModule,
    StudentModule,
    RoomModule,
    MulterModule.register(multerOptions),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
