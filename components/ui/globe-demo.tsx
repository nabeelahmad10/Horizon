// "use client"
// import { motion } from "motion/react"
// import dynamic from "next/dynamic"

// const World = dynamic(() => import("@/components/ui/globe").then((m) => m.World), {
//   ssr: false,
// })

// export default function GlobeDemo() {
//   const globeConfig = {
//     pointSize: 4,
//     globeColor: "#062056",
//     showAtmosphere: true,
//     atmosphereColor: "#FFFFFF",
//     atmosphereAltitude: 0.1,
//     emissive: "#062056",
//     emissiveIntensity: 0.1,
//     shininess: 0.9,
//     polygonColor: "rgba(255,255,255,0.7)",
//     ambientLight: "#38bdf8",
//     directionalLeftLight: "#ffffff",
//     directionalTopLight: "#ffffff",
//     pointLight: "#ffffff",
//     arcTime: 1000,
//     arcLength: 0.9,
//     rings: 1,
//     maxRings: 3,
//     autoRotate: true,
//     autoRotateSpeed: 0.5,
//   }

//   const colors = ["#06b6d4", "#3b82f6", "#6366f1"]

//   const sampleArcs = [
//     { order: 1, startLat: 28.6139, startLng: 77.209, endLat: 40.7128, endLng: -74.006, arcAlt: 0.5, color: colors[0] },
//     {
//       order: 2,
//       startLat: 51.5072,
//       startLng: -0.1276,
//       endLat: 35.6762,
//       endLng: 139.6503,
//       arcAlt: 0.3,
//       color: colors[1],
//     },
//     {
//       order: 3,
//       startLat: -33.8688,
//       startLng: 151.2093,
//       endLat: 22.3193,
//       endLng: 114.1694,
//       arcAlt: 0.3,
//       color: colors[2],
//     },
//     { order: 4, startLat: 37.5665, startLng: 126.978, endLat: 1.3521, endLng: 103.8198, arcAlt: 0.2, color: colors[0] },
//     {
//       order: 5,
//       startLat: -22.9068,
//       startLng: -43.1729,
//       endLat: 28.6139,
//       endLng: 77.209,
//       arcAlt: 0.7,
//       color: colors[1],
//     },
//   ]

//   return (
//     <div className="flex flex-row items-center justify-center py-20 h-screen md:h-auto dark:bg-black bg-white relative w-full">
//       <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-full md:h-[40rem] px-4">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//         ></motion.div>
//         <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
//           <World data={sampleArcs} globeConfig={globeConfig} />
//         </div>
//       </div>
//     </div>
//   )
// }
