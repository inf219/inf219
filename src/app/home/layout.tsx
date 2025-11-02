// layout.tsx
import HamburgerMenu from "../components/hamburgerMenu";
import BackButton from "../components/buttons/backButton";

const topColor = "#42C4A3";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="min-h-screen w-full">
      {/* TopBar */}
      <div
        className="sticky top-0 z-50 w-full shadow-2xl px-6 py-4 flex items-center justify-between bg-[#0B132B]"
      >
        <img
          src="/sidestilt-logo-kvit-skrift-vlfk.png"
          alt="Fylkeskommunen logo"
          className="h-16 w-auto"
        />
        
        <div className="flex items-center gap-4">
          <BackButton />
          <HamburgerMenu />
        </div>
      </div>

      {/* Her får du innhold fra page.tsx */}
      <main className="flex flex-col items-center p-4">
        {children}
      </main>
    </div>
  );
}
