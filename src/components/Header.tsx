import brandLogo from "@/assets/brandLogo.svg"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SwitchTheme } from "./SwitchTheme"

export function Header() {
  return (
    <header className="max-w-[1216px] w-full py-8 flex items-center justify-between">
      <Image src={brandLogo} alt="Meta Blog" />

      <div className="flex items-center gap-5">
        <div className="flex gap-10 text-secondary_600 mx-[116px] dark:text-white">
          <Link href="/" className="hover:opacity-50">
            Home
          </Link>
          <Link href="/blog" className="hover:opacity-50">
            Blog
          </Link>
          <Link href="/blog" className="hover:opacity-50">
            Single Post
          </Link>
          <Link href="/pages" className="hover:opacity-50">
            Pages{" "}
          </Link>
          <Link href="/contact" className="hover:opacity-50">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-10">
          <label className="flex items-center px-3 py-2 pl-4 bg-secondary_100 rounded-md gap-3 max-w-[166px] dark:bg-secondary_700 dark:text-secondary_400">
            <input
              className="outline-none flex-1 text-sm bg-secondary_100 placeholder:text-secondary_400 max-w-[114px] dark:bg-secondary_700 dark:text-secondary_400"
              type="text"
              placeholder="Search"
            />

            <div className="text-secondary_600 dark:text-secondary_400">
              <Search size={16} className="h-4 w-4" />
            </div>
          </label>

          <SwitchTheme />
        </div>
      </div>
    </header>
  )
}
