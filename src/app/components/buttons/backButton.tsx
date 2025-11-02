'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
    const router = useRouter();

    return (
        <button
            onClick={() => router.back()}
            className="px-3 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded text-sm transition-colors"
        >
            ← Tilbake
        </button>
    );
}