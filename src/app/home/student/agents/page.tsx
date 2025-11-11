
import Card from "@/app/components/card";
import { auth } from "@/auth";
import { PrismaClient } from "generated/prisma";
import Link from "next/link";

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
        <p className="text-center text-gray-600">Ingen data i databasen ennå.</p>
      ) : (
        <div className="space-y-6">
          {assignments.map((a) => {
            // Hent agent-navn fra databasen eller fallback
            const agentName = a.agentId.split("_").pop()?.replace(/-/g, " ") || "Ukjent agent";
            const displayName = agentName.charAt(0).toUpperCase() + agentName.slice(1);

            return (
              <Card key={a.id} className="!flex !justify-between items-center p-4">
                <div>
                  <h3 className="font-semibold text-lg">{displayName}</h3>
                  <p className="text-sm text-gray-600">testnorsk</p>
                </div>

                <Link
                  href={`/home/global/talk?agent_id=${a.agentId}`}
                  className="px-6 py-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition"
                >
                  Snakk med {displayName}
                </Link>
              </Card>
            );
          })}
        </div>
      )}
    </main>
  );
}