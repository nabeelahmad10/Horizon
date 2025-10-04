"use client"
import { ContainerScroll } from "@/components/ui/container-scroll-animation"

export default function HeroScrollDemo() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Be the part of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 bg-clip-text text-transparent">
                History
              </span>
            </h1>
          </>
        }
      >
        <img
          src="/modern-event-management-dashboard-with-colorful-gr.jpg"
          alt="HORIZON event platform preview"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  )
}
