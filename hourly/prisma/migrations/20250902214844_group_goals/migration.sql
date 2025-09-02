-- CreateTable
CREATE TABLE "public"."GroupGoal" (
    "id" TEXT NOT NULL,
    "createdAt" DATE DEFAULT CURRENT_TIMESTAMP,
    "endDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Hours" INTEGER NOT NULL,
    "completed" BOOLEAN NOT NULL DEFAULT false,
    "Name" TEXT,
    "groupId" TEXT,

    CONSTRAINT "GroupGoal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."GroupGoal" ADD CONSTRAINT "GroupGoal_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "public"."Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;
