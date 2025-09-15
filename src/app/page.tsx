'use client';

import { Roboto } from 'next/font/google';
import Image from 'next/image';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: 'url("/dekorelement-vlfk.png")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Logo */}
      <div style={{ padding: '32px 16px 16px 16px' }}>
        <Image
          src="/sidestilt-logo-vlfk.png"
          alt="Logo"
          width={120}
          height={40}
          style={{ objectFit: 'contain' }}
        />
      </div>

      {/* Knapp */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <button
          onClick={() =>
            (window.location.href = '/api/auth/signin?callbackUrl=/home')
          }
          className={roboto.className}
          style={{
            backgroundColor: '#FF5C39',
            color: '#fff',
            padding: '12px 24px',
            borderRadius: '12px',
            fontWeight: 700,
            boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
            cursor: 'pointer',
          }}
        >
          Logg inn
        </button>
      </div>
    </div>
  );
}
