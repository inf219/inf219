'use client'

import { useRouter } from 'next/navigation';

type LinkButtonProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

export default function linkButton({href, children, className }: LinkButtonProps) {
    const router = useRouter();
    return (
        <button
        onClick={() => router.push(href)}
        className={`py-2 px-4 rounded font-semibold shadow ${className}`}
        >
            {children}
        </button>
    );
}