// page.tsx (i samme mappe som layout.tsx)
import LinkButton from "@/app/components/buttons/linkButton";
import UserWelcome from "@/app/components/userWelcome";
import { auth } from "@/auth";


export default async function HomePage() {
  const session = await auth();

  return (
    <>

      <UserWelcome name={session?.user?.name} role="Lærer"></UserWelcome>
      <div className="mt-20">
        <LinkButton
          href="/home/teacher/create"
          className="mb-2 me-2 py-4 px-8"
        >
          Opprett ny agent
        </LinkButton>
        <LinkButton
          href="/agents"
          className="mb-2 ms-2 py-4 px-8"
        >
          Se dine agenter
        </LinkButton>

        <LinkButton
          href="/home/teacher/students"
          className="!text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l 
          focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 
          font-medium rounded-lg text-sm px-8 py-4 text-center me-2 mb-2 hover:scale-105 transition duration-200"
        >
          Se alle elever
        </LinkButton>
      </div>
      <img
        src="/wavingmaskot.png"
        alt="Tale Maskot"
        className="w-48 relative self-end mt-20 z-10
             drop-shadow-[0_0_16px_rgba(14,165,233,0.55)]
             drop-shadow-[0_0_36px_rgba(14,165,233,0.25)] "
      />
    </>
  );
}
