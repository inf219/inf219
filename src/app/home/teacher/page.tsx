// page.tsx (i samme mappe som layout.tsx)
import LinkButton from "@/app/components/buttons/linkButton";
import UserWelcome from "@/app/components/userWelcome";
import { auth } from "@/auth";


export default async function HomePage() {
  const session = await auth();

  return (
    <>
      <UserWelcome name={session?.user?.name} role="Lærer"></UserWelcome>
      
      <div className="mt-18">
        <LinkButton
          href="/home/teacher/create"
          className="mb-2 me-2 py-4 px-8"
        >
          Opprett ny agent
        </LinkButton>
        <LinkButton
          href="/home/global/agents"
          className="mb-2 ms-2 py-4 px-8"
        >
          Se dine agenter
        </LinkButton>
        <LinkButton
          href="/home/teacher/students"
          className="mb-2 ms-2 py-4 px-8"
        >
          Se alle elever
        </LinkButton>
        <img
        src="/wavingmaskot.png"
        alt="Tale Maskot"
        className="w-54 relative z-10
            md:translate-x-18 md:translate-y-6
            drop-shadow-[0_0_16px_rgba(14,165,233,0.55)]
            drop-shadow-[0_0_36px_rgba(14,165,233,0.25)] "
      />
      </div>
    </>
  );
}