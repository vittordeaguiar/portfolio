"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/" || pathname === "/home";

  return (
    <header className="w-full flex items-center justify-between">
      <div className="flex flex-col">
        <span className="font-semibold text-lg text-zinc-200">Vittor de Aguiar</span>
        <span className="font-medium text-base text-zinc-400">Desenvolvedor Full Stack</span>
      </div>

      <div className="flex space-x-4">
        {!isHome && (
          <Link href="/">
            <span className="text-base text-zinc-400 cursor-pointer hover:text-zinc-200">
              /início
            </span>
          </Link>
        )}
        <Link href="/about">
          <span className="text-base text-zinc-400 cursor-pointer hover:text-zinc-200">/sobre</span>
        </Link>
      </div>
    </header>
  );
}
