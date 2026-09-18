"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import PlantCard from "@/components/PlantCard";

const collections = [
  {
    name: "Bonsai",
    category: "Signature Collection",
    image: "/images.webp",
  },
  {
    name: "Rare Indoor Plants",
    category: "Curated Collection",
    image: "/images (1).jpg",
  },
  {
    name: "Architectural Greens",
    category: "Statement Plants",
    image: "/image (3).jpg",
  },
  {
    name: "Tropical Foliage",
    category: "Lush Collection",
    image: "/Tropical Plant.webp",
  },
  {
    name: "Flowering Plants",
    category: "Blooming Collection",
    image: "/Flowering Plants.jpg",
  },
  {
    name: "Outdoor Greens",
    category: "Garden Collection",
    image: "/Gardern Collection.webp",
  },
  {
    name: "Palm Collection",
    category: "Tropical Collection",
    image: "/Tropical Collection.webp",
  },
  {
    name: "Succulents",
    category: "Minimal Collection",
    image: "/Minimal Collection.jpg",
  },
  {
    name: "Decorative Plants",
    category: "Lifestyle Collection",
    image: "/Lifestyle Collection.webp",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardAnimation = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.92,
    rotateX: 10,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Home() {
  return (
    <main className="overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-screen overflow-hidden">

        {/* Animated Hero Image */}
        <motion.img
          src="/hero img.webp"
          alt="Vishnu Siddhi Nursery"
          initial={{
            scale: 1.15,
            opacity: 0,
          }}
          animate={{
            scale: 1,
            opacity: 1,
          }}
          transition={{
            duration: 2,
            ease: "easeOut",
          }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Moving dark overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8 }}
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,5,.96),rgba(3,8,5,.68),rgba(3,8,5,.32))]"
        />

        {/* Green glow */}
        <motion.div
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.3, 0.55, 0.3],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(58,137,78,.28),transparent_34%)]"
        />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28">

          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >

            <motion.p
              variants={fadeUp}
              className="mb-5 text-xs uppercase tracking-[.42em] text-[#c7a35a]"
            >
              Vishnu Siddhi Nursery · VSN
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="text-5xl font-semibold leading-[.98] tracking-[-.04em] md:text-7xl lg:text-8xl"
            >
              Greenery,
              <br />
              <motion.span
                animate={{
                  opacity: [0.45, 1, 0.65],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-[#c7a35a]"
              >
                refined.
              </motion.span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-base leading-8 text-white/65 md:text-lg"
            >
              Discover premium bonsai, rare indoor plants and statement
              greenery selected to bring quiet luxury into your space.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-9 flex flex-wrap gap-4"
            >

              <Link
                href="/plants"
                className="group relative overflow-hidden border border-[#c7a35a] bg-[#c7a35a] px-7 py-4 text-xs font-semibold uppercase tracking-[.2em] text-[#07100a]"
              >
                <span className="relative z-10 transition-colors duration-500 group-hover:text-[#c7a35a]">
                  Explore Collection
                </span>

                <span className="absolute inset-0 -translate-x-full bg-[#07100a] transition-transform duration-500 group-hover:translate-x-0" />
              </Link>

              <Link
                href="/contact"
                className="border border-white/20 px-7 py-4 text-xs uppercase tracking-[.2em] text-white/80 transition duration-500 hover:border-[#c7a35a] hover:text-[#c7a35a]"
              >
                Enquire
              </Link>

            </motion.div>

          </motion.div>
        </div>

        {/* Floating bottom indicator */}
        <motion.div
          animate={{
            y: [0, 12, 0],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs tracking-[.3em] text-white/50"
        >
          SCROLL ↓
        </motion.div>

      </section>


      {/* =========================================================
          COLLECTIONS
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >

          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs uppercase tracking-[.3em] text-[#c7a35a]"
            >
              01 / Collections
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-3 text-4xl font-semibold md:text-5xl"
            >
              Exclusive Collections
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="max-w-md text-sm leading-7 text-white/45"
          >
            A modern selection designed for homes, offices, hospitality spaces
            and plant collectors.
          </motion.p>

        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {collections.map((plant) => (
            <PlantCard key={plant.name} {...plant} />
          ))}
        </motion.div>

      </section>


      {/* =========================================================
          VSN APPROACH
      ========================================================= */}

      <section className="border-y border-white/10 bg-[#0a140d]">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={staggerContainer}
          className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center"
        >

          <div>
            <motion.p
              variants={fadeUp}
              className="text-xs uppercase tracking-[.3em] text-[#c7a35a]"
            >
              02 / The VSN Approach
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl font-semibold leading-tight md:text-6xl"
            >
              Nature with
              <br />
              <span className="text-[#c7a35a]">a point of view.</span>
            </motion.h2>
          </div>

          <motion.div
            variants={fadeUp}
            className="text-sm leading-8 text-white/55"
          >
            <p>
              VSN brings together plants with distinctive shape, texture and
              character. Our collections are presented with a premium,
              contemporary aesthetic so your greenery becomes part of the
              architecture.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-block text-xs uppercase tracking-[.2em] text-[#c7a35a] transition hover:tracking-[.3em]"
            >
              Discover our story →
            </Link>
          </motion.div>

        </motion.div>

      </section>


      {/* =========================================================
          WHY VSN
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-3xl"
        >

          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-[.3em] text-[#c7a35a]"
          >
            03 / Why VSN
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl font-semibold leading-tight md:text-6xl"
          >
            More than plants.
            <br />
            <span className="text-[#c7a35a]">
              A lifestyle of green.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-sm leading-8 text-white/50 md:text-base"
          >
            At Vishnu Siddhi Nursery, we believe plants are more than
            decoration. They bring freshness, character and natural beauty
            into everyday spaces. Our carefully selected collections are
            designed to complement modern homes, offices, gardens and
            commercial spaces.
          </motion.p>

        </motion.div>


        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >

          {[
            {
              number: "01",
              title: "Quality Plants",
              text: "We focus on healthy, attractive and well-maintained plants suitable for different environments and spaces.",
            },
            {
              number: "02",
              title: "Unique Selection",
              text: "Explore a distinctive range of bonsai, indoor plants and statement greenery selected for their natural character.",
            },
            {
              number: "03",
              title: "Expert Guidance",
              text: "Get guidance on choosing plants, understanding their requirements and creating a beautiful green environment.",
            },
          ].map((item) => (

            <motion.div
              key={item.number}
              variants={cardAnimation}
              whileHover={{
                y: -12,
                scale: 1.03,
                borderColor: "rgba(199,163,90,.5)",
                transition: {
                  duration: 0.3,
                },
              }}
              className="group border border-white/10 bg-[#0b120e] p-8 transition"
            >

              <motion.div
                whileHover={{
                  rotate: 360,
                }}
                transition={{
                  duration: 0.8,
                }}
                className="text-3xl text-[#c7a35a]"
              >
                {item.number}
              </motion.div>

              <h3 className="mt-8 text-2xl transition duration-500 group-hover:text-[#c7a35a]">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-white/45 transition duration-500 group-hover:text-white/70">
                {item.text}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </section>


      {/* =========================================================
          GREEN SPACES
      ========================================================= */}

      <section className="border-y border-white/10 bg-[#071009]">

        <div className="mx-auto max-w-7xl px-6 py-24">

          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >

              <motion.p
                variants={fadeUp}
                className="text-xs uppercase tracking-[.3em] text-[#c7a35a]"
              >
                04 / Green Spaces
              </motion.p>

              <motion.h2
                variants={fadeUp}
                className="mt-4 text-4xl font-semibold leading-tight md:text-6xl"
              >
                Bring nature
                <br />
                <span className="text-[#c7a35a]">
                  closer to you.
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-6 text-sm leading-8 text-white/50"
              >
                From a single statement plant to a complete collection,
                VSN helps you create spaces that feel calm, fresh and
                naturally sophisticated.
              </motion.p>

            </motion.div>


            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
              className="space-y-4"
            >

              {[
                {
                  title: "Home & Interiors",
                  text: "Add natural elegance to living rooms, balconies, bedrooms and workspaces.",
                },
                {
                  title: "Office & Commercial Spaces",
                  text: "Create professional environments with carefully chosen indoor and architectural plants.",
                },
                {
                  title: "Gardens & Outdoor Spaces",
                  text: "Bring texture, freshness and visual balance to outdoor spaces with suitable greenery.",
                },
              ].map((item) => (

                <motion.div
                  key={item.title}
                  variants={cardAnimation}
                  whileHover={{
                    x: 12,
                    scale: 1.02,
                  }}
                  className="glass group p-6 transition duration-500"
                >

                  <h3 className="text-xl transition group-hover:text-[#c7a35a]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-white/45 transition group-hover:text-white/70">
                    {item.text}
                  </p>

                </motion.div>

              ))}

            </motion.div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PHILOSOPHY
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-6 py-24">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="text-center"
        >

          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-[.3em] text-[#c7a35a]"
          >
            05 / Our Philosophy
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl font-semibold md:text-6xl"
          >
            Every plant has
            <br />
            <span className="text-[#c7a35a]">
              its own story.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/50"
          >
            We celebrate the individuality of every plant. Natural shapes,
            textures, colours and growth patterns make each piece unique.
            Our collection is created for people who appreciate greenery
            with personality.
          </motion.p>

        </motion.div>


        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={staggerContainer}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >

          {[
            ["🌿", "Natural Beauty", "Authentic greenery that adds life to your surroundings."],
            ["🌱", "Fresh Growth", "Plants that continuously transform and evolve with time."],
            ["🪴", "Modern Living", "Greenery designed to complement contemporary lifestyles."],
            ["🌳", "Long Lasting", "Create a green environment that grows with you."],
          ].map(([icon, title, text]) => (

            <motion.div
              key={title}
              variants={cardAnimation}
              whileHover={{
                y: -10,
                rotateY: 5,
                scale: 1.04,
              }}
              className="group border border-white/10 p-7 text-center transition duration-500 hover:border-[#c7a35a]/40"
            >

              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-4xl"
              >
                {icon}
              </motion.div>

              <h3 className="mt-5 text-lg transition duration-500 group-hover:text-[#c7a35a]">
                {title}
              </h3>

              <p className="mt-3 text-xs leading-6 text-white/40 transition group-hover:text-white/65">
                {text}
              </p>

            </motion.div>

          ))}

        </motion.div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="border-t border-white/10 bg-[#0a140d]">

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.92,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-5xl px-6 py-28 text-center"
        >

          <p className="text-xs uppercase tracking-[.35em] text-[#c7a35a]">
            06 / Begin Your Green Journey
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
            Find the perfect
            <br />
            <motion.span
              animate={{
                opacity: [0.5, 1, 0.6],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="text-[#c7a35a]"
            >
              green companion.
            </motion.span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/50">
            Explore our plant collections and discover greenery that fits
            your space, style and personality.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <Link
              href="/plants"
              className="border border-[#c7a35a] bg-[#c7a35a] px-8 py-4 text-xs font-semibold uppercase tracking-[.2em] text-[#07100a] transition duration-500 hover:bg-transparent hover:text-[#c7a35a]"
            >
              View Plants
            </Link>

            <Link
              href="/contact"
              className="border border-white/20 px-8 py-4 text-xs uppercase tracking-[.2em] text-white/75 transition duration-500 hover:border-[#c7a35a]/60 hover:text-[#c7a35a]"
            >
              Get In Touch
            </Link>

          </div>

        </motion.div>

      </section>

    </main>
  );
}