"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-custom-dark-gray group-[.toaster]:text-custom-light-apricot group-[.toaster]:border-none group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-custom-light-apricot/70",
          actionButton:
            "group-[.toast]:bg-custom-light-apricot group-[.toast]:text-custom-dark-gray",
          cancelButton:
            "group-[.toast]:bg-custom-light-apricot group-[.toast]:text-custom-dark-gray",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
