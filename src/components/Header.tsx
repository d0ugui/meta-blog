import brandLogo from "@/assets/brandLogo.svg"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SwitchTheme } from "./SwitchTheme"

export function Header() {
  return (
    <header className="max-w-[1200px] w-full py-8 flex items-center justify-between">
      <Image src={brandLogo} alt="Meta Blog" />

      <div className="flex gap-10 text-secondary_600 mx-28">
        <Link href="/">Home</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/pages">Pages </Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="flex items-center gap-10">
        <label className="flex gap-1 items-center p-3 bg-secondary_100 rounded-md h-9">
          <input
            className="outline-none bg-secondary_100 placeholder:text-secondary_400 flex-1 text-sm w-[114px]"
            type="text"
            placeholder="Search"
          />

          <Search size={16} color="#3B3C4A" className="h-4 w-4" />
        </label>

        <SwitchTheme />
      </div>
    </header>
  )
}
