"use client";

import { motion } from "framer-motion";
import PlantCard from "@/components/PlantCard";

// Plant collection data
const plants = [
  ["Bonsai", "Bonsai", "/Ficus Bonsai.webp"],
  ["Buddha Belly Bamboo", "Buddha Belly Bamboo", "/buddha belly bamboo.avif"],
  ["Ceiba Speciosa", "Ceiba Speciosa", "/ceiba speciosa.webp"],
  ["Clusia Rosea", "Clusia Rosea", "/clusia rosea.webp"],
  ["Golden Zebra Fern", "Golden Zebra Fern", "/golden zebra fern.jpg"],
  ["Malpighia Shapes", "Malpighia Shapes", "/malpighia shapes.webp"],
  ["Tecoma Dwarf", "Tecoma Dwarf", "/tecoma dwarf.webp"],
  ["Thai Cypress", "Thai Cypress", "/thai cypress.webp"],
  [
    "Washingtonia Filifera",
    "Washingtonia Filifera",
    "/Washingtonia Filifera.webp",
  ],
  ["Wedelia-Trilobata", "Wedelia-Trilobata", "/Wedelia-Trilobata.webp"],
  ["Dracaena Reflexa", "Dracaena Reflexa", "/Dracaena Reflexa.jpg"],
  ["For Garden", "For Garden", "/For Garden.jpeg"],
  [
    "Hubricht's bluestar (Amsonia hubrichtii)",
    "Hubricht's bluestar (Amsonia hubrichtii)",
    "/Hubricht's bluestar (Amsonia hubrichtii).webp",
  ],
  [
    "Pennsylvania sedge (Carex pensylvanica)",
    "Pennsylvania sedge (Carex pensylvanica)",
    "/Pennsylvania sedge (Carex pensylvanica).webp",
  ],
  ["Pimpri Chinchwad", "Pimpri Chinchwad", "/Pimpri Chinchwad.webp"],
  [
    "Poinsettia Indoor & Outdoor",
    "Poinsettia Indoor & Outdoor",
    "/Poinsettia Indoor & Outdoor.jpg",
  ],
  ["Shrubs", "Shrubs", "/Shrubs.avif"],
  ["Yamileth Parafita", "Yamileth Parafita", "/Yamileth Parafita.jpg"],
];

// Heading animation
const headingContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Text animation
const textReveal = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// Grid animation
const gridContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};

// Individual card wrapper animation
const cardReveal = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.88,
    rotateX: 18,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Plants() {
  return (
    <section className="relative mx-auto min-h-screen max-w-7xl overflow-hidden px-6 pb-24 pt-36">
      
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      {/* Large rotating glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [0.08, 0.16, 0.08],
          scale: [0.8, 1.15, 0.8],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#c7a35a]/10 blur-[120px]"
      />

      {/* Green floating glow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.03, 0.1, 0.03],
          x: [0, 60, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-40 top-[500px] h-[400px] w-[400px] rounded-full bg-green-500/10 blur-[110px]"
      />

      {/* =========================================================
          HEADER
      ========================================================= */}

      <motion.div
        variants={headingContainer}
        initial="hidden"
        animate="show"
        className="relative max-w-3xl"
      >
        {/* Small label */}
        <motion.div
          variants={textReveal}
          className="flex items-center gap-4"
        >
          <motion.span
            animate={{
              width: ["0px", "55px", "35px"],
              opacity: [0, 1, 0.7],
            }}
            transition={{
              duration: 1.4,
              ease: "easeOut",
            }}
            className="h-px bg-[#c7a35a]"
          />

          <motion.p
            animate={{
              opacity: [0.45, 1, 0.65],
              letterSpacing: ["0.2em", "0.35em", "0.3em"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="text-xs uppercase text-[#c7a35a]"
          >
            Plant Collections
          </motion.p>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={textReveal}
          className="mt-5 text-5xl font-semibold leading-tight md:text-7xl"
        >
          Greenery with{" "}
          <motion.span
            animate={{
              opacity: [0.65, 1, 0.7],
              textShadow: [
                "0 0 0px rgba(199,163,90,0)",
                "0 0 25px rgba(199,163,90,0.25)",
                "0 0 0px rgba(199,163,90,0)",
              ],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-[#c7a35a]"
          >
            presence.
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={textReveal}
          className="mt-6 max-w-xl text-sm leading-7 text-white/50"
        >
          Explore a sample catalogue of distinctive plants selected for
          character, texture and presence.
        </motion.p>

        {/* Animated decorative line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: ["0%", "100%", "75%"],
            opacity: [0, 1, 0.4],
          }}
          transition={{
            duration: 2,
            delay: 0.8,
            ease: "easeOut",
          }}
          className="mt-8 h-px max-w-md bg-gradient-to-r from-[#c7a35a]/70 via-[#c7a35a]/20 to-transparent"
        />
      </motion.div>

      {/* =========================================================
          PLANT GRID
      ========================================================= */}

      <motion.div
        variants={gridContainer}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.08,
        }}
        className="relative mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        style={{
          perspective: "1200px",
        }}
      >
        {plants.map(([name, category, image], index) => (
          <motion.div
            key={name}
            variants={cardReveal}
            custom={index}
            whileHover={{
              y: -12,
              rotateX: 2,
              rotateY: index % 2 === 0 ? 2 : -2,
              transition: {
                duration: 0.35,
              },
            }}
            className="relative"
          >
            {/* Card number */}
            <motion.div
              initial={{
                opacity: 0,
                x: -15,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.35,
                duration: 0.5,
              }}
              className="pointer-events-none absolute -left-2 -top-3 z-20"
            >
              <motion.span
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                }}
                className="text-[10px] tracking-[0.2em] text-[#c7a35a]"
              >
                {String(index + 1).padStart(2, "0")}
              </motion.span>
            </motion.div>

            {/* Animated outer glow */}
            <motion.div
              animate={{
                opacity: [0, 0.18, 0],
                scale: [0.95, 1.02, 0.95],
              }}
              transition={{
                duration: 4,
                delay: index * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -inset-1 rounded-sm bg-[#c7a35a]/20 blur-xl"
            />

            {/* Actual PlantCard */}
            <div className="relative">
              <PlantCard
                name={name}
                category={category}
                image={image}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* =========================================================
          BOTTOM DECORATION
      ========================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.5,
        }}
        transition={{
          duration: 1,
        }}
        className="mt-20 flex items-center justify-center gap-5"
      >
        <motion.div
          animate={{
            width: ["20px", "80px", "20px"],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="h-px bg-[#c7a35a]"
        />

        <motion.span
          animate={{
            rotate: [0, 360],
            scale: [1, 1.15, 1],
          }}
          transition={{
            rotate: {
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          className="text-sm text-[#c7a35a]"
        >
          ✦
        </motion.span>

        <motion.div
          animate={{
            width: ["20px", "80px", "20px"],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: 0.5,
          }}
          className="h-px bg-[#c7a35a]"
        />
      </motion.div>
    </section>
  );
}
