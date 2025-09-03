import { Canvas, useFrame } from "@react-three/fiber";
import HeroText from "../components/HeroText";
import ParallaxBackground from "../components/ParallaxBackground";
import { lazy, Suspense, useEffect, useState } from "react";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import Loader from "../components/Loader";
const Astronaut = lazy(() => import("../components/Astronaut").then(m => ({ default: m.Astronaut })));

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShow3D(true);
          }
        });
      },
      { rootMargin: "200px" }
    );
    const section = document.getElementById("home");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);
  return (
    <section className="flex items-start justify-center min-h-screen overflow-hidden md:items-start md:justify-start c-space" id="home">
      <HeroText />
      <ParallaxBackground />
      {show3D && (
        <figure
          className="absolute inset-0"
          style={{ width: "100vw", height: "100vh" }}
        >
          <Canvas camera={{ position: [0, 1, 3] }} frameloop="always">
            <Suspense fallback={<Loader />}>
              <Float>
                <Astronaut
                  scale={isMobile && 0.23}
                  position={isMobile && [0, -1.5, 0]}
                />
              </Float>
              <Rig />
            </Suspense>
          </Canvas>
        </figure>
      )}
    </section>
  );
};

function Rig() {
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    const handler = (e) => setPaused(!!e.detail);
    window.addEventListener("modal-open-change", handler);
    return () => window.removeEventListener("modal-open-change", handler);
  }, []);

  return useFrame((state, delta) => {
    if (paused) return;
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
