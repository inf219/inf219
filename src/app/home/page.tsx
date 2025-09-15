import Link from 'next/link';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
            <h1 className="text-4xl font-bold mb-8 text-center">Welcome</h1>
            <p className="mb-2 text-center">
            Click the button below to go to the agent page.
            </p>
            <Link href="/agent">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Go to Agent
            </button>
            </Link>
        </div>
        </main>
    );
}