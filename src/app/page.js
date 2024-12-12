import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import { BeakerIcon, ArrowLongRightIcon } from '@heroicons/react/24/outline'


export default function Home() {
  return (
    <div>
      <main>
        <Link
          href="/rec"
          className="flex items-center gap-5 self-start rounded-lg bg-green-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-400 md:text-base"
        >
          <ArrowRightIcon />
          <span>Go to start Page</span>
        </Link>
      </main>
    </div>

  );
}
