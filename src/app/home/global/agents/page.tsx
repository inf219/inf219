import { AgentList } from "@/app/components/agentList";

export default function AgentsPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="relative inline-blockz-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
            <h1 className="text-4xl font-bold mb-8 text-center text-[#00C6FB]">
            Agenter:
            </h1>
            <AgentList />
            <img src="/agentmaskot.png" alt="Pointing Tale" className="hidden md:block fixed right-48 top-1/2 -translate-y-1/2 h-80
             h-80 z-20
             drop-shadow-[0_0_16px_rgba(14,165,233,0.55)]
             drop-shadow-[0_0_36px_rgba(14,165,233,0.25)]" />
        </div>
        </main>
    );
}