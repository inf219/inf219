import { auth } from "@/auth";
import LinkButton from "@/app/components/linkButton";
import HamburgerMenu from "../components/hamburgerMenu";


const backgroundColor = "#C9EDF7";
const topColor = "#9ADBE8"


export default async function HomePage() {
    const session = await auth();
    return (
        <div
            className='min-h-screen w-full'
            style={{ backgroundColor: backgroundColor }}
        >
            {/* TopBar */}
            <div className="sticky top-0 z-50 w-full shadow-2xl px-6 py-4 flex items-center justify-between"
                style={{ backgroundColor: topColor, borderColor: '#6ECAD9' }}>
                <img
                    src="/sidestilt-logo-vlfk.png"
                    alt="Fylkeskommunen logo"
                    className="h-16 w-auto"
                />
                <HamburgerMenu/>
            </div>

            <main className="flex flex-col items-center justify-between p-8 h-full">
                <div className="mt-10 border-2 shadow-xl rounded-full p-20 h-64"
                    style={{ backgroundColor: topColor, borderColor: '#6ECAD9' }}>
                    <h1 className="text-6xl font-medium text-center text-black text-center">
                        Velkommen, {session?.user?.name}
                    </h1>
                </div>
                <div className='mt-20'>
                    <LinkButton
                        href="/agent"
                        className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l 
                            focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 
                            font-medium rounded-lg text-sm px-8 py-4 text-center me-2 mb-2'>
                        Gå til agenten
                    </LinkButton>
                </div>
            </main>
        </div>
    )
}




