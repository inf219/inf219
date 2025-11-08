// page.tsx (i samme mappe som layout.tsx)
import LinkButton from "@/app/components/buttons/linkButton";
import UserWelcome from "@/app/components/userWelcome";
import { auth } from "@/auth";

const topColor = "#9ADBE8";

export default async function HomePage() {
  const session = await auth();

  return (
    <>
      <UserWelcome name={session?.user?.name} role="Elev"></UserWelcome>
      <div className="mt-18">
        <LinkButton
          href="/home/global/agents">
            Gå til mine agenter
        </LinkButton>
      </div>
      <img
        src="/wavingmaskot.png"
        alt="Tale Maskot"
        className="w-54 relative z-10 
            md:translate-x-1 md:translate-y-6
            drop-shadow-[0_0_16px_rgba(14,165,233,0.55)]
            drop-shadow-[0_0_36px_rgba(14,165,233,0.25)] "
      />
    </>
  );
}
