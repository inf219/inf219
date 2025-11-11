
import { auth } from "@/auth";
import { PrismaClient } from "generated/prisma";

const prisma = new PrismaClient();
export default async function StudentAgentsPage() {
  const session = await auth();
  let assignments: any[] = [];
  let error: string | null = null;

  if (!session?.user?.id) {
    error = "Ikke logget inn";
  } else {
    const studentId = Number(session.user.id);
    if (isNaN(studentId)) {
      error = "Ugyldig student-ID";
    } else {
      try {
        assignments = await prisma.studentAgentAssignment.findMany({
          where: { studentId },
          select: {
            id: true,
            studentId: true,
            agentId: true,
            student: {
              select: { id: true, name: true, email: true },
            },
          },
        });
      } catch (err) {
        error = "Databasefeil";
        console.error(err);
      }
    }
  }

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-6">Alle agent-tilknytninger (test)</h1>

      {error && <p className="text-red-600">{error}</p>}

      {assignments.length === 0 ? (
        <p>Ingen data i databasen ennå.</p>
      ) : (
        <div className="space-y-3">
          {assignments.map((a) => (
            <div key={a.id} className="p-4 bg-blue-50 rounded">
              <p><strong>Student:</strong> {a.student.name} (ID: {a.studentId})</p>
              <p><strong>Agent ID:</strong> {a.agentId}</p>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}