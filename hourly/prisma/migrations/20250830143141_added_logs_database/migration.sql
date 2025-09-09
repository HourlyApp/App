/*
  Warnings:

  - The primary key for the `User1` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "public"."User1" DROP CONSTRAINT "User1_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User1_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User1_id_seq";

-- CreateTable
CREATE TABLE "public"."log" (
    "logId" TEXT NOT NULL,
    "createdAt" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "Hours" INTEGER NOT NULL,
    "Description" TEXT,
    "userId" TEXT NOT NULL,

    CONSTRAINT "log_pkey" PRIMARY KEY ("logId")
);

-- AddForeignKey
ALTER TABLE "public"."log" ADD CONSTRAINT "log_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User1"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
