// layout.tsx
import HamburgerMenu from "../components/hamburgerMenu";

const topColor = "#9ADBE8";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <div className="min-h-screen w-full">
      {/* TopBar */}
      <div
        className="sticky top-0 z-50 w-full shadow-2xl px-6 py-4 flex items-center justify-between"
        style={{ backgroundColor: topColor, borderColor: "#6ECAD9" }}
      >
        <img
          src="/sidestilt-logo-vlfk.png"
          alt="Fylkeskommunen logo"
          className="h-16 w-auto"
        />
        <HamburgerMenu />
      </div>

      {/* Her får du innhold fra page.tsx */}
      <main className="flex flex-col items-center justify-between p-8 h-full">
        {children}
      </main>
    </div>
  );
}

