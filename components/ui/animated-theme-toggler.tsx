"use client"

import { useCallback, useRef } from "react"
import { Moon, Sun } from "lucide-react"
import { flushSync } from "react-dom"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Button } from "./button"
import { useMounted } from "@/hooks/use-mounted"

interface AnimatedThemeTogglerProps
  extends React.ComponentPropsWithoutRef<"button"> {
  duration?: number
}

export const AnimatedThemeToggler = ({
  className,
  duration = 400,
  ...props
}: AnimatedThemeTogglerProps) => {
  /* ✅ SEMUA HOOKS DI ATAS */
  const mounted = useMounted()
  const { resolvedTheme, setTheme } = useTheme()
  const buttonRef = useRef<HTMLButtonElement>(null)

  const isDark = resolvedTheme === "dark"

  const toggleTheme = useCallback(async () => {
    if (!mounted || !buttonRef.current) return

    if (!document.startViewTransition) {
      setTheme(isDark ? "light" : "dark")
      return
    }

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(isDark ? "light" : "dark")
      })
    }).ready

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect()

    const x = left + width / 2
    const y = top + height / 2

    const maxRadius = Math.hypot(
      Math.max(left, window.innerWidth - left),
      Math.max(top, window.innerHeight - top)
    )

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRadius}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    )
  }, [mounted, isDark, setTheme, duration])

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="icon"
        className={cn("opacity-0", className)}
        aria-hidden
      />
    )
  }

  return (
    <Button
      ref={buttonRef}
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className={cn(className)}
      {...props}
    >
      {isDark ? <Sun /> : <Moon />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
