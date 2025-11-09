-- CreateTable
CREATE TABLE "Agents" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "agent_id" TEXT NOT NULL,
    "created_by" INTEGER NOT NULL,
    "is_public" BOOLEAN NOT NULL DEFAULT false,
    CONSTRAINT "Agents_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "StudentAgentAssignment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "agent_id" INTEGER NOT NULL,
    "student_id" INTEGER NOT NULL,
    "assigned_by" INTEGER NOT NULL,
    CONSTRAINT "StudentAgentAssignment_agent_id_fkey" FOREIGN KEY ("agent_id") REFERENCES "Agents" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "StudentAgentAssignment_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "StudentAgentAssignment_assigned_by_fkey" FOREIGN KEY ("assigned_by") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Agents_agent_id_key" ON "Agents"("agent_id");

-- CreateIndex
CREATE UNIQUE INDEX "StudentAgentAssignment_agent_id_student_id_key" ON "StudentAgentAssignment"("agent_id", "student_id");
