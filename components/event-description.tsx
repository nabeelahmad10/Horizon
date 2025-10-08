"use client"
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation"

export function EventDescription() {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(0, 0, 0)"
      gradientBackgroundEnd="rgb(10, 25, 47)"
      firstColor="30, 58, 138"
      secondColor="59, 130, 246"
      thirdColor="14, 165, 233"
      fourthColor="6, 78, 159"
      fifthColor="30, 64, 175"
      pointerColor="56, 189, 248"
      size="80%"
      blendingValue="hard-light"
      containerClassName="min-h-screen mt-20 md:mt-24"
    >
      <div className="absolute z-40 inset-0 flex items-center justify-center px-4 pointer-events-none">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white drop-shadow-2xl">
            Experience Horizon 2025
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl text-white/90 drop-shadow-lg leading-relaxed">
            Join us for four unforgettable days of music, art, and culture. Featuring world-class artists, immersive
            installations, and experiences that will leave you breathless.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 pointer-events-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-[#ffffff] mb-2">50+ Alumni</h3>
              <p className="text-white/80">International and local talent</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-[#ffffff] mb-2">Historic</h3>
              <p className="text-white/80">Non-stop entertainment</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20">
              <h3 className="text-2xl font-bold text-[#ffffff] mb-2">9 events</h3>
              <p className="text-white/80">4 days</p>
            </div>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  )
}
