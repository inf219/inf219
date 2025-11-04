// layout.tsx
import { auth } from "@/auth";
import HamburgerMenu from "../components/hamburgerMenu";
import BackButton from "../components/buttons/backButton";

const backgroundColor = "#C9EDF7";
const topColor = "#9ADBE8";

export default async function Layout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    return (
        <div className="min-h-screen w-full" style={{ backgroundColor }}>
            {/* TopBar */}
            <div
                className="sticky top-0 z-50 w-full shadow-2xl px-6 py-4 flex items-center justify-between"
                style={{ backgroundColor: topColor, borderColor: "#6ECAD9" }}
            >
                <img
                    src="/sidestilt-logo-vlfk.png"
                    alt="Vestland fylkeskommune logo"
                    className="h-16 w-auto"
                />
                
                <div className="flex items-center gap-4">
                    <BackButton />
                    <HamburgerMenu />
                </div>
            </div>

            {/* Her får du innhold fra page.tsx */}
            <main className="flex flex-col items-center justify-between p-8 h-full">
                {children}
            </main>
        </div>
    );
}
