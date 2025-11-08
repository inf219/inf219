import { auth } from "@/auth";
import { redirect } from "next/navigation";
import LinkButton from "./components/buttons/linkButton";

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
      <h1 className="mb-2">Velkommen</h1>
      <h2 className="mb-4">Tale - Din digitale læringsassistent</h2>
      <img
        src="/maskot1.png"
        alt="Tale Maskot"
          className="w-48 h-68 relative z-10
             drop-shadow-[0_0_16px_rgba(14,165,233,0.55)]
             drop-shadow-[0_0_36px_rgba(14,165,233,0.25)] "/>

      <LinkButton 
        href="/api/auth/signin?callbackUrl=/"
        className="!px-8 !py-4"
      >
        Logg inn
      </LinkButton>
    </div>
  );
}