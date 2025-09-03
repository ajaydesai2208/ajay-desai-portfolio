import { lazy, Suspense, useEffect, useRef, useState } from "react";
import Card from "../components/Card";
const Globe = lazy(() => import("../components/globe").then(m => ({ default: m.Globe })));
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/Frameworks";

const About = () => {
  const grid2Container = useRef();
  const [showGlobe, setShowGlobe] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowGlobe(true);
          }
        });
      },
      { rootMargin: "200px" }
    );
    const section = document.getElementById("about");
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="c-space section-spacing" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/ajay.jpg"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover rounded-2xl"
          />
          <div className="z-10 p-4 rounded-lg bg-black/30 backdrop-blur-sm">
            <p className="headtext">Hi, I&apos;m Ajay Desai</p>
            <p className="subtext">
              Full-Stack Developer with 4+ years of experience building scalable applications across Java, Spring Boot, Hibernate, Python, FastAPI, and Node.js—paired with React.js and Next.js on the frontend. Skilled in microservices, GraphQL/REST APIs, and cloud-native deployments on AWS and Kubernetes. Experienced in integrating AI (LLMs, LangChain) and data platforms to deliver secure, performant solutions.
            </p>
          </div>
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              CODE IS CRAFT
            </p>

            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/python.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              image="assets/logos/java.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/cplusplus.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "15%", left: "60%" }} // New position for the 4th icon
              image="assets/logos/go.svg"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="Algorithms"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              text="Agile"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "70%", left: "25%" }}
              text="CI/CD"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              text="Scalability"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">I&apos;m based in New York, and open to remote or relocation.</p>
          </div>
          {showGlobe && (
            <figure className="absolute left-[30%] top-[10%]">
              <Suspense fallback={null}>
                <Globe />
              </Suspense>
            </figure>
          )}
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <CopyEmailButton />
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Teck Stack</p>
            <p className="subtext">
              I specialize in a variety of languages, frameworks, and tools that
              allow me to build robust and scalable applications
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
