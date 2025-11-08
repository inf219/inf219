// layout.tsx
import HamburgerMenu from "../components/hamburgerMenu";

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
        className="sticky z-50 shadow-2xl px-6 py-4 flex items-center justify-between bg-[var(--header)]"
      >
        <img
          src="/sidestilt-logo-vlfk.png"
          alt="Fylkeskommunen logo"
          className="h-16 w-auto"
        />
        <HamburgerMenu />
      </div>

      {/* Her får du innhold fra page.tsx */}
      <main className="flex flex-col items-center">
        {children}
      </main>
    </div>
  );
}

