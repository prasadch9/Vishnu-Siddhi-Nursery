"use client";

import { motion } from "framer-motion";

export default function PlantCard({ name, category, image }) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 80,
        scale: 0.88,
        rotateX: 12,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        rotateX: 0,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -14,
        scale: 1.025,
        rotateX: 2,
        rotateY: 2,
      }}
      className="group overflow-hidden border border-white/10 bg-[#0b120e]"
    >

      {/* IMAGE AREA */}

      <div className="relative h-72 overflow-hidden">

        {/* Main Image */}
        <motion.img
          src={image}
          alt={name}
          initial={{
            scale: 1.12,
            rotate: -2,
            opacity: 0.65,
          }}
          animate={{
            scale: [1.12, 1.05, 1.12],
            rotate: [-2, 2, -2],
            opacity: [0.7, 1, 0.82],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.18,
            rotate: 0,
            transition: {
              duration: 0.8,
            },
          }}
          className="h-full w-full object-cover"
        />

        {/* Dark gradient */}
        <motion.div
          initial={{
            opacity: 0.75,
          }}
          whileHover={{
            opacity: 0.35,
          }}
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition duration-700"
        />

        {/* Green animated glow */}
        <motion.div
          animate={{
            opacity: [0, 0.25, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,163,90,.35),transparent_60%)]"
        />

        {/* Category */}
        <motion.span
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.25,
            duration: 0.6,
          }}
          className="absolute bottom-4 left-4 border border-[#c7a35a]/50 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[.2em] text-[#d8bc7e] backdrop-blur-sm"
        >
          {category}
        </motion.span>

        {/* Rotating corner element */}
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute right-5 top-5 h-8 w-8 rounded-full border border-[#c7a35a]/40"
        />

      </div>


      {/* CONTENT */}

      <motion.div
        initial={{
          opacity: 0.45,
        }}
        whileHover={{
          opacity: 1,
        }}
        className="p-5 transition duration-500"
      >

        <motion.h3
          initial={{
            x: -15,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="text-lg tracking-wide transition duration-500 group-hover:text-[#c7a35a]"
        >
          {name}
        </motion.h3>

        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
            delay: 0.25,
          }}
          className="mt-2 text-xs leading-5 text-white/45 transition duration-500 group-hover:text-white/70"
        >
          Selected for character, form and lasting visual appeal.
        </motion.p>

        {/* Animated bottom line */}
        <motion.div
          initial={{
            width: "20%",
            opacity: 0.3,
          }}
          whileHover={{
            width: "100%",
            opacity: 1,
          }}
          className="mt-5 h-px bg-[#c7a35a]"
        />

      </motion.div>

    </motion.article>
  );
}