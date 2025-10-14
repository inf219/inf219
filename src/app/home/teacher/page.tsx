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
          href="/agent/create"
          className="!text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l 
          focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 
          font-medium rounded-lg text-sm px-8 py-4 text-center me-2 mb-2 hover:scale-105 transition duration-200"
        >
          Opprett ny agent
        </LinkButton>
        <LinkButton
          href="/agents"
          className="!text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l 
          focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 
          font-medium rounded-lg text-sm px-8 py-4 text-center me-2 mb-2 hover:scale-105 transition duration-200"
        >
          Se dine agenter
        </LinkButton>
      </div>
    </>
  );
}
