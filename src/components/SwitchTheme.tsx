"use client"

import { cn } from "@/utils/cn"
import { Sun } from "lucide-react"
import { useState } from "react"

export function SwitchTheme() {
  const [isChecked, setIsChecked] = useState(false)

  function handleToggleCheckbox() {
    setIsChecked((prevState) => !prevState)
  }

  return (
    <label
      htmlFor="check"
      className={cn(
        "flex bg-secondary_100 cursor-pointer relative w-12 h-7 rounded-[100px] transition-all duration-500",
        isChecked && "bg-blue"
      )}
    >
      <input
        type="checkbox"
        id="check"
        className="sr-only peer"
        checked={isChecked}
        onChange={handleToggleCheckbox}
      />

      <Sun
        className={cn(
          "w-2/5 h-4/5 bg-white absolute rounded-full left-1 top-[2.8px] transition-all duration-500 p-[3px]",
          isChecked && "bg-white left-6"
        )}
        color="#3B3C4A"
      />
    </label>
  )
}
