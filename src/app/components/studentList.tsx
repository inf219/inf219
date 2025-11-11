import { auth } from "@/auth";
import { PrismaClient } from "generated/prisma";
import Link from "next/link";

const prisma = new PrismaClient();

export async function StudentList() {
  const session = await auth();
  const userRole = session?.user?.role;

  // Only teachers and admins can see the list
  if (userRole !== "TEACHER" && userRole !== "ADMIN") {
    return (
      <div className="text-center p-8 bg-red-50 rounded-lg">
        <p className="text-red-600 font-medium">
          Tilgang nektet. Kun lærere og admin kan se elevlisten.
        </p>
      </div>
    );
  }

  const students = await prisma.user.findMany({
    where: { role: "STUDENT" },
    select: { id: true, name: true, email: true },
    orderBy: { name: "asc" },
  });

  if (students.length === 0) {
    return (
      <div className="text-center p-8 bg-gray-50 rounded-lg">
        <p className="text-gray-500">Ingen elever funnet.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-center">Dine elever</h2>

      <ul className="space-y-4">
        {students.map((student) => (
          <li
            key={student.id}
            className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg text-gray-900">
                  {student.name || "Uten navn"}
                </h3>
                <p className="text-sm text-gray-600">{student.email}</p>
              </div>

              <Link
                href={`/home/teacher/assign/${student.id}`}
                className="p-5 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                Tildel agent
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
