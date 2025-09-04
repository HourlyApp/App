-- CreateTable
CREATE TABLE "public"."Flag" (
    "id" TEXT NOT NULL,
    "createdAt" DATE DEFAULT CURRENT_TIMESTAMP,
    "isFlagged" BOOLEAN NOT NULL DEFAULT false,
    "logId" TEXT NOT NULL,

    CONSTRAINT "Flag_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Flag" ADD CONSTRAINT "Flag_logId_fkey" FOREIGN KEY ("logId") REFERENCES "public"."Log"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
