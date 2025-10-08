"use client"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"

export default function HeroScrollDemo() {
  return (
    <div className="relative flex flex-col overflow-hidden bg-[#0f0f0f]">
      {/* subtle ambient red glows */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-[520px] w-[520px] rounded-full opacity-20 blur-3xl bg-[radial-gradient(circle_at_30%_30%,rgba(229,9,20,0.6),transparent_60%)]" />
        <div className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full opacity-15 blur-3xl bg-[radial-gradient(circle_at_60%_60%,rgba(178,7,16,0.6),transparent_60%)]" />
      </div>

      {/* top/bottom hairline accents */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-40 [mask-image:linear-gradient(to_top,transparent,black_20%,black_80%,transparent)]"
      >
        <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[#E50914]/70 to-transparent" />
        <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-[#B20710]/70 to-transparent" />
      </div>

      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-neutral-200">
              Be the part of <br />
              <span className="text-4xl md:text-[6rem] font-extrabold mt-1 leading-none bg-[conic-gradient(from_210deg,#E50914,#B20710,#E50914)] bg-clip-text text-transparent drop-shadow-[0_10px_30px_rgba(229,9,20,0.35)]">
                History
              </span>
            </h1>
            <p className="mt-3 text-sm md:text-base text-neutral-300/80">
              Cinematic vibes. Bold moments. Join the main cast.
            </p>
          </>
        }
      >
        <div className="relative">
          {/* subtle frame with red rim */}
          <div className="pointer-events-none absolute -inset-[1.5px] rounded-2xl opacity-70">
            <div className="h-full w-full rounded-2xl [background:conic-gradient(from_0deg,rgba(229,9,20,.55),rgba(255,255,255,.06),rgba(178,7,16,.55),rgba(229,9,20,.55))] [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] p-[1.5px]" />
          </div>

          <img
            src="/modern-event-management-dashboard-with-colorful-gr.jpg"
            alt="HORIZON event platform preview"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8),0_12px_40px_-16px_rgba(229,9,20,0.35)]"
            draggable={false}
          />

          {/* subtle bottom gradient fade for readability */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 rounded-b-2xl bg-gradient-to-t from-[#0f0f0f] to-transparent" />
        </div>
      </ContainerScroll>
    </div>
  )
}
