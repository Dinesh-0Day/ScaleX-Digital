import React from "react";
import { motion } from "motion/react";

const technologies = [
  { name: "UNREAL ENGINE", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original.svg" },
  { name: "UNITY", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unity/unity-original.svg" },
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "C#", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" },
  { name: "BLENDER", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original.svg" },
  { name: "PYTHON", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "GODOT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/godot/godot-original.svg" },
  { name: "THREE.JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg" },
  { name: "REACT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "NODE.JS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "TYPESCRIPT", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "PHOTOSHOP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
  { name: "FIGMA", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { name: "DOCKER", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "POSTGRESQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" }
];

export function TechStackSection() {
  const firstRow = technologies.slice(0, 8);
  const secondRow = technologies.slice(8);

  return (
    <section className="py-12 bg-[#0a0a0a] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              Technology
            </span>{" "}
            <span className="text-white">Stack</span>
          </h2>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Gradient fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

          {/* Single Box with Two Rows */}
          <div className="overflow-hidden bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-cyan-500/10 rounded-[40px] border border-white/10 p-8 space-y-8">

            {/* First Row - Left to Right */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-16"
                animate={{
                  x: ["0%", "-50%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                {[...firstRow, ...firstRow].map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center gap-4 min-w-[140px] flex-shrink-0"
                  >
                    <div className="w-20 h-20 flex items-center justify-center">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                    <span className="text-white font-bold text-sm tracking-wider whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Second Row - Right to Left (Anti-clockwise) */}
            <div className="overflow-hidden">
              <motion.div
                className="flex gap-16"
                animate={{
                  x: ["-50%", "0%"],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 25,
                    ease: "linear",
                  },
                }}
              >
                {[...secondRow, ...secondRow].map((tech, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center gap-4 min-w-[140px] flex-shrink-0"
                  >
                    <div className="w-20 h-20 flex items-center justify-center">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="w-full h-full object-contain drop-shadow-2xl"
                      />
                    </div>
                    <span className="text-white font-bold text-sm tracking-wider whitespace-nowrap">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}