'use client'

import { useRouter } from 'next/navigation';
import { clsx } from 'clsx'

type LinkButtonProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

//Knapp som fungerer som en link. Sender brukeren videre til href (ruten du definerer).
//Leverer en blå knapp som standard, men kan overskrives ved bruk av className
export default function LinkButton({href, children, className }: LinkButtonProps) {
    const router = useRouter();
    return (
        <button
        onClick={() => router.push(href)}
        className={clsx(className)}
        >
            {children}
        </button>
    );
}