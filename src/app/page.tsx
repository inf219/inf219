import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await auth();

  // Hvis innlogget, redirect basert på rolle
  if (session) {
    if (session.user.role === "TEACHER" || session.user.role === "ADMIN") {
      redirect("/home/teacher");
    } else if (session.user.role === "STUDENT" || session.user.role === "ADMIN") {
      redirect("/home/student");
    }
  }

  // Hvis ikke innlogget, vis login
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Velkommen</h1>
      <a 
        href="/api/auth/signin?callbackUrl=/"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Logg inn
      </a>
    </div>
  );
}