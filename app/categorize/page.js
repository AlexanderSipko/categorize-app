// app/recognize_app/page.js

import Link from "next/link";

export default function RecognizeApp() {
    return (
        <>
            <p>страница для логики работы приложения</p>
            <Link 
                href="/" 
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 transform transition-transform duration-300 active:scale-95"
                >
                На главную
            </Link>
        </>
    );
  }