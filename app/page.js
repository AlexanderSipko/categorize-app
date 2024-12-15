// app/page.tsx

import Link from "next/link";
import './globals.css'

export default function HomePage() {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Войти</h1>
      <p className="text-lg text-gray-600 mb-6">Let's Get Started</p>

      <Link 
        href="/recognize_app" 
        className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transform transition-transform duration-300 active:scale-95"
      >
        Тестовая страница
      </Link>
    </>
  );
}
