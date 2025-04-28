import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import GitHubIcon from "./icons/GitHubIcon";
import LinkedInIcon from "./icons/LinkedInIcon";

export default function Links() {
  return (
    <div className="flex flex-col gap-4 my-4">
      <Link
        className="border-2 border-white rounded-sm flex items-center p-4"
        href={"https://github.com/vittordeaguiar"}
        target="_blank"
      >
        <div className="w-10">
          <GitHubIcon size={32} />
        </div>
        <span className="text-base font-medium text-zinc-100 w-full pl-4">GitHub</span>
        <div className="w-10">
          <ArrowUpRightIcon className="size-5" />
        </div>
      </Link>

      <Link
        className="border-2 border-white rounded-sm flex items-center p-4"
        href={"https://www.linkedin.com/in/vittordeaguiar/"}
        target="_blank"
      >
        <div className="w-10">
          <LinkedInIcon size={32} />
        </div>
        <span className="text-base font-medium text-zinc-100 w-full pl-4">LinkedIn</span>
        <div className="w-10">
          <ArrowUpRightIcon className="size-5" />
        </div>
      </Link>
    </div>
  );
}
