import { cn } from "@/lib/utils"

export default function Container({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-4 sm:px-6 lg:px-8",
        // Wider than default: ~1440px on 2xl screens, scales down gracefully
        "max-w-[1160px] md:max-w-[1280px] xl:max-w-[1360px] 2xl:max-w-[1440px]",
        className
      )}
    >
      {children}
    </div>
  )
}
