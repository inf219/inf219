import { Conversation } from '../../../components/conversation';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full items-center justify-between">
            <h1 className="text-center">
                KI-assistent
            </h1>
            <h2 className="!text-base mb-4 text-center">
                Øv på å forbedre norskkunnskapene dine med denne assistenten
            </h2>
            <Conversation></Conversation> {/* Renderer  samtale-komponenten*/}
        </div>
        </main>
    );
}