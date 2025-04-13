import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between">
      <div className="flex flex-col">
        <span className="font-semibold text-lg text-zinc-200">
          Vittor de Aguiar
        </span>
        <span className="font-medium text-base text-zinc-400">
          Full Stack Developer
        </span>
      </div>

      <div>
        <Link href={"/about"}>
          <span className="text-base text-zinc-400 cursor-pointer hover:text-zinc-600">
            /about
          </span>
        </Link>
      </div>
    </header>
  );
}
