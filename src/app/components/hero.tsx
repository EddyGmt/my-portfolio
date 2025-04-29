"use client";
import { motion } from "framer-motion";
import Tile from "./tile";

const Hero = () => {
  return (
    <div className="w-full relative" id="home">
      <section className="w-full grid grid-cols-20 h-screen overflow-y-clip">
        {/* Grid background */}
        {Array.from({ length: 20 * 12 }).map((_, index) => (
          <Tile key={index} />
        ))}
      </section>
      <div className="pointer-events-none absolute inset-0 flex flex-col gap-5 items-center justify-center z-10 mb-10 font-poppins">
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-neutral-100 uppercase tracking-tight"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQEqpibASvO9bA/profile-displayphoto-shrink_800_800/B4EZSO2HqoGwAg-/0/1737563340179?e=1751500800&v=beta&t=wbTfw3z5OgZ0SjS5SiN2KCREyKJLPn74PKw_kxNoAys"
            alt="Image Eddy"
            className="rounded-full"
            width={400}
            height={400}
          />
        </motion.h1>
        <motion.p
          className="w-1/2 text-xl text-center tracking-wide"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          Eddy G, développeur web fullstack
        </motion.p>
        <motion.a
          href={"/cv.pdf"}
          download
          className="text-neutral-100 rounded-full text-2xl bg-indigo-700 px-100 py-5 border border-indigo-900 pointer-events-auto"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          Télécharger mon CV
        </motion.a>
      </div>
    </div>
  );
};

export default Hero;
