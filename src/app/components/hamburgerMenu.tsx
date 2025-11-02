'use client'

import { signOut } from 'next-auth/react'
import { useState, useRef, useEffect } from 'react'



//En helt enkel hamburgermeny (Dummy), inneholder konto, innstilling og log ut
//Men det går ikke å trykke på de enda
export default function HamburgerMenu() {
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClick(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClick)
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }

    })

    return (
        <div className="relative" ref={menuRef}>
            {/* Hamburger-knapp */}
            <svg
                onClick={() => setMenuOpen(!menuOpen)}
                className="w-8 h-8 text-white transition-transform duration-200 hover:scale-120 cursor-pointer"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
            >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            {/* Dropdown-meny */}
            {menuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Konto
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Innstillinger
                    </a>
                    <a
                        href="#"
                        onClick={() => signOut({ callbackUrl: '/' })}
                        className="block font-bold px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                        Logg ut
                    </a>
                </div>
            )}
        </div>
    );
}