"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export function SwitchTheme() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <>
      {resolvedTheme === "dark" && (
        <Sun className="w-6 h-6" onClick={() => setTheme("light")} />
      )}

      {resolvedTheme === "light" && (
        <Moon className="w-6 h-6" onClick={() => setTheme("dark")} />
      )}
    </>
  )
}
