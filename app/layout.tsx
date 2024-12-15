// import { SessionProvider } from "next-auth/react";
// app/layout.txt
import { ReactNode } from "react";


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