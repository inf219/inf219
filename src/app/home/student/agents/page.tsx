// src/app/home/student/agents/page.tsx
export default async function StudentAgentsPage() {
  let assignments: any[] = [];
  let error = null;

  try {
    const res = await fetch("http://localhost:3000/api/student-agents", {
      cache: "no-store"
    });
    const data = await res.json();
    assignments = data.assignments;
  } catch {
    error = "Kunne ikke hente fra DB";
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