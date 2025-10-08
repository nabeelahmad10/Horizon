"use client"
import { WobbleCard } from "@/components/ui/wobble-card"

export default function WobbleCardDemo() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-primary/20 min-h-[220px] md:min-h-[260px] lg:min-h-[240px]"
        className=""
      >
        <div className="max-w-xs">
          <h2 className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-foreground">
            Gippity AI powers the entire universe
          </h2>
          <p className="mt-4 text-left text-base/6 text-muted-foreground">
            With over 100,000 monthly active bot users, Gippity AI is the most popular AI platform for developers.
          </p>
        </div>
        <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[30%] grayscale filter -bottom-10 object-contain rounded-2xl pointer-events-none select-none"
        />
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 min-h-[200px] md:min-h-[240px]">
        <h2 className="max-w-80 text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-foreground">
          No shirt, no shoes, no weapons.
        </h2>
        <p className="mt-4 max-w-[26rem] text-left text-base/6 text-muted-foreground">
          If someone yells “stop!”, goes limp, or taps out, the fight is over.
        </p>
      </WobbleCard>

      <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-secondary/20 min-h-[260px] md:min-h-[300px] xl:min-h-[260px]">
        <div className="max-w-sm">
          <h2 className="max-w-sm md:max-w-lg text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-foreground">
            Signup for blazing-fast cutting-edge state of the art Gippity AI wrapper today!
          </h2>
          <p className="mt-4 max-w-[26rem] text-left text-base/6 text-muted-foreground">
            With over 100,000 monthly active bot users, Gippity AI is the most popular AI platform for developers.
          </p>
        </div>
        <img
          src="/linear.webp"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[35%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl pointer-events-none select-none"
        />
      </WobbleCard>
    </div>
  )
}
