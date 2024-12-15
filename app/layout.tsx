// import { SessionProvider } from "next-auth/react";
'use client'

import { ReactNode } from "react";
import './globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          {children}
        </div>
      </body>
    </html>
  );
}