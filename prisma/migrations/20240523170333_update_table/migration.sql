-- AlterTable
ALTER TABLE "Room" ADD COLUMN     "capacity" INTEGER,
ADD COLUMN     "occupancy" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "roomNumber" TEXT,
ADD COLUMN     "type" TEXT;

-- AlterTable
ALTER TABLE "Student" ADD COLUMN     "age" INTEGER,
ADD COLUMN     "course" TEXT,
ADD COLUMN     "gender" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "profileimage" TEXT,
ADD COLUMN     "year" INTEGER;
