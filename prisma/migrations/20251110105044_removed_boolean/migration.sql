/*
  Warnings:

  - You are about to drop the column `is_public` on the `Agents` table. All the data in the column will be lost.
  - Added the required column `name` to the `Agents` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Agents" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "agent_id" TEXT NOT NULL,
    "created_by" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    CONSTRAINT "Agents_created_by_fkey" FOREIGN KEY ("created_by") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Agents" ("agent_id", "created_by", "id") SELECT "agent_id", "created_by", "id" FROM "Agents";
DROP TABLE "Agents";
ALTER TABLE "new_Agents" RENAME TO "Agents";
CREATE UNIQUE INDEX "Agents_agent_id_key" ON "Agents"("agent_id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
