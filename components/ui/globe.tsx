// "use client";

// import { useEffect, useRef, useState } from "react";
// import { Color, Scene, Fog, PerspectiveCamera, Vector3, Group } from "three";
// import ThreeGlobe from "three-globe";
// import { useThree, Canvas, extend } from "@react-three/fiber";
// import { OrbitControls } from "@react-three/drei";
// import type { Topology } from "topojson-specification";
// import worldDataRaw from "world-atlas/countries-110m.json";
// import globeData from "@/data/globe.json"; // ✅ Load your arcs data from file

// extend({ ThreeGlobe });

// const RING_PROPAGATION_SPEED = 3;
// const aspect = 1.2;
// const cameraZ = 300;

// const worldData = worldDataRaw as unknown as Topology;
// const countries = feature(worldData, worldData.objects.countries) as any;

// type Position = {
//   order: number;
//   startLat: number;
//   startLng: number;
//   endLat: number;
//   endLng: number;
//   arcAlt: number;
//   color: string;
// };

// export type GlobeConfig = {
//   pointSize?: number;
//   globeColor?: string;
//   showAtmosphere?: boolean;
//   atmosphereColor?: string;
//   atmosphereAltitude?: number;
//   emissive?: string;
//   emissiveIntensity?: number;
//   shininess?: number;
//   polygonColor?: string;
//   ambientLight?: string;
//   directionalLeftLight?: string;
//   directionalTopLight?: string;
//   pointLight?: string;
//   arcTime?: number;
//   arcLength?: number;
//   rings?: number;
//   maxRings?: number;
//   autoRotate?: boolean;
//   autoRotateSpeed?: number;
// };

// interface WorldProps {
//   globeConfig: GlobeConfig;
// }

// export function Globe({ globeConfig }: WorldProps) {
//   const globeRef = useRef<ThreeGlobe | null>(null);
//   const groupRef = useRef<Group | null>(null); // ✅ fixed typing
//   const [isInitialized, setIsInitialized] = useState(false);
//   const [data, setData] = useState<Position[]>([]);

//   const defaultProps = {
//     pointSize: 1,
//     atmosphereColor: "#ffffff",
//     showAtmosphere: true,
//     atmosphereAltitude: 0.1,
//     polygonColor: "rgba(255,255,255,0.7)",
//     globeColor: "#062056",
//     emissive: "#000000",
//     emissiveIntensity: 0.1,
//     shininess: 0.9,
//     arcTime: 2000,
//     arcLength: 0.9,
//     rings: 1,
//     maxRings: 3,
//     ...globeConfig,
//   };

//   // ✅ Load data from globe.json on mount
//   useEffect(() => {
//     if (Array.isArray(globeData)) {
//       setData(globeData as Position[]);
//     }
//   }, []);

//   // Initialize globe
//   useEffect(() => {
//     if (!globeRef.current && groupRef.current) {
//       globeRef.current = new ThreeGlobe();
//       groupRef.current.add(globeRef.current);
//       setIsInitialized(true);
//     }
//   }, []);

//   // Base globe
//   useEffect(() => {
//     if (!globeRef.current || !isInitialized) return;

//     const globeMaterial = globeRef.current.globeMaterial() as any;
//     globeMaterial.color = new Color(defaultProps.globeColor);
//     globeMaterial.emissive = new Color(defaultProps.emissive);
//     globeMaterial.emissiveIntensity = defaultProps.emissiveIntensity;
//     globeMaterial.shininess = defaultProps.shininess;

//     globeRef.current
//       .hexPolygonsData(countries.features)
//       .hexPolygonResolution(3)
//       .hexPolygonMargin(0.7)
//       .showAtmosphere(defaultProps.showAtmosphere)
//       .atmosphereColor(defaultProps.atmosphereColor)
//       .atmosphereAltitude(defaultProps.atmosphereAltitude)
//       .hexPolygonColor(() => defaultProps.polygonColor);
//   }, [isInitialized, defaultProps]);

//   // Arcs + points
//   useEffect(() => {
//     if (!globeRef.current || !isInitialized || data.length === 0) return;

//     const points: any[] = [];
//     for (const arc of data) {
//       points.push({
//         size: defaultProps.pointSize,
//         order: arc.order,
//         color: arc.color,
//         lat: arc.startLat,
//         lng: arc.startLng,
//       });
//       points.push({
//         size: defaultProps.pointSize,
//         order: arc.order,
//         color: arc.color,
//         lat: arc.endLat,
//         lng: arc.endLng,
//       });
//     }

//     const filteredPoints = points.filter(
//       (v, i, a) =>
//         a.findIndex(
//           (v2) => v2.lat === v.lat && v2.lng === v.lng
//         ) === i
//     );

//     globeRef.current
//       .arcsData(data)
//       .arcStartLat((d: any) => d.startLat)
//       .arcStartLng((d: any) => d.startLng)
//       .arcEndLat((d: any) => d.endLat)
//       .arcEndLng((d: any) => d.endLng)
//       .arcColor((e: any) => e.color)
//       .arcAltitude((e: any) => e.arcAlt)
//       .arcStroke(() => [0.32, 0.28, 0.3][Math.floor(Math.random() * 3)])
//       .arcDashLength(defaultProps.arcLength)
//       .arcDashInitialGap((e: any) => e.order)
//       .arcDashGap(15)
//       .arcDashAnimateTime(defaultProps.arcTime);

//     globeRef.current
//       .pointsData(filteredPoints)
//       .pointColor((e: any) => e.color)
//       .pointsMerge(true)
//       .pointAltitude(0.0)
//       .pointRadius(2);
//   }, [isInitialized, data, defaultProps]);

//   // Animated rings
//   useEffect(() => {
//     if (!globeRef.current || !isInitialized || data.length === 0) return;

//     const interval = setInterval(() => {
//       if (!globeRef.current) return;

//       const ringIndexes = genRandomNumbers(
//         0,
//         data.length,
//         Math.floor((data.length * 4) / 5)
//       );

//       const ringsData = data
//         .filter((_, i) => ringIndexes.includes(i))
//         .map((d) => ({
//           lat: d.startLat,
//           lng: d.startLng,
//           color: d.color,
//         }));

//       globeRef.current.ringsData(ringsData);
//     }, 2000);

//     return () => clearInterval(interval);
//   }, [isInitialized, data]);

//   return <group ref={groupRef} />;
// }

// export function WebGLRendererConfig() {
//   const { gl, size } = useThree();
//   useEffect(() => {
//     gl.setPixelRatio(window.devicePixelRatio);
//     gl.setSize(size.width, size.height);
//     gl.setClearColor(0x000000, 0);
//   }, [gl, size]);
//   return null;
// }

// export function World({ globeConfig }: WorldProps) {
//   const scene = new Scene();
//   scene.fog = new Fog(0xffffff, 400, 2000);

//   return (
//     <Canvas scene={scene} camera={new PerspectiveCamera(50, aspect, 180, 1800)}>
//       <WebGLRendererConfig />
//       <ambientLight color={globeConfig.ambientLight} intensity={0.6} />
//       <directionalLight
//         color={globeConfig.directionalLeftLight}
//         position={new Vector3(-400, 100, 400)}
//       />
//       <directionalLight
//         color={globeConfig.directionalTopLight}
//         position={new Vector3(-200, 500, 200)}
//       />
//       <pointLight
//         color={globeConfig.pointLight}
//         position={new Vector3(-200, 500, 200)}
//         intensity={0.8}
//       />
//       <Globe globeConfig={globeConfig} />
//       <OrbitControls
//         enablePan={false}
//         enableZoom={false}
//         minDistance={cameraZ}
//         maxDistance={cameraZ}
//         autoRotate
//         autoRotateSpeed={1}
//         minPolarAngle={Math.PI / 3.5}
//         maxPolarAngle={Math.PI - Math.PI / 3}
//       />
//     </Canvas>
//   );
// }

// // Helper: random numbers for rings
// function genRandomNumbers(min: number, max: number, count: number) {
//   const arr: number[] = [];
//   while (arr.length < count) {
//     const r = Math.floor(Math.random() * (max - min)) + min;
//     if (!arr.includes(r)) arr.push(r);
//   }
//   return arr;
// }
