import Links from "@/components/Links";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Links />
      <Link href={'/about'} className="w-40 flex items-center space-x-2 transition transform hover:scale-110 origin-center cursor-pointer">
        <span className="text-zinc-100 font-semibold">Quem sou eu?</span>
        <ArrowLongRightIcon className="size-6" />
      </Link>
    </main>
  );
}
