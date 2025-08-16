import { useEffect, useRef, useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const rafScheduled = useRef(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia) {
      const media = window.matchMedia("(prefers-reduced-motion: reduce)");
      prefersReducedMotion.current = !!media.matches;
      const listener = () => (prefersReducedMotion.current = !!media.matches);
      media.addEventListener?.("change", listener);
      return () => media.removeEventListener?.("change", listener);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion.current) return;
    if (rafScheduled.current) return;
    rafScheduled.current = true;
    requestAnimationFrame(() => {
      x.set(e.clientX + 20);
      y.set(e.clientY + 20);
      rafScheduled.current = false;
    });
  };
  const [preview, setPreview] = useState(null);
  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
      id="projects"
    >
      <h2 className="text-heading">My Selected Projects</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {!prefersReducedMotion.current && preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          loading="lazy"
          decoding="async"
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;