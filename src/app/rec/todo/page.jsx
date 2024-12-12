import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline'

function ToDo () {

    return (
        <>  
            <Link
                href="/rec"
                className="flex items-center gap-5 self-start rounded-lg bg-green-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-green-400 md:text-base"
                >
                <span>Login</span>
                <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
            <p>List todo or backend name entities</p>
        </>
    )
}

export default ToDo