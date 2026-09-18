"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -70,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 70,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function About() {
  return (
    <main className="overflow-hidden">

      <section className="mx-auto min-h-screen max-w-7xl px-6 pb-24 pt-36">


        {/* =========================================================
            01 / INTRO
        ========================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
          variants={stagger}
          className="grid gap-14 md:grid-cols-2 md:items-center"
        >

          <motion.div variants={fadeLeft}>

            <motion.p
              animate={{
                opacity: [0.45, 1, 0.55],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-xs uppercase tracking-[.35em] text-[#c7a35a]"
            >
              About VSN
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="mt-4 text-5xl font-semibold leading-tight md:text-7xl"
            >
              A nursery built
              <br />
              around{" "}
              <motion.span
                animate={{
                  opacity: [0.45, 1, 0.6],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-[#c7a35a]"
              >
                character.
              </motion.span>
            </motion.h1>

          </motion.div>


          <motion.div
            variants={fadeRight}
            whileHover={{
              borderColor: "rgba(199,163,90,.7)",
              x: 5,
            }}
            className="border-l border-[#c7a35a]/30 pl-7 text-sm leading-8 text-white/55 transition duration-500"
          >

            <motion.p
              initial={{
                opacity: 0.35,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.2,
              }}
            >
              Vishnu Siddhi Nursery is presented as a premium destination for
              plants that add identity to a space. From carefully shaped bonsai
              to lush indoor varieties, VSN focuses on visual character and a
              refined plant experience.
            </motion.p>

            <p className="mt-5">
              Whether you are styling a home, office, hospitality space or
              personal collection, our goal is simple: make greenery feel
              intentional.
            </p>

          </motion.div>

        </motion.div>


        {/* =========================================================
            02 / IMAGE + STORY
        ========================================================= */}

        <div className="mt-24 grid gap-10 md:grid-cols-2 md:items-center">


          {/* IMAGE */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
              scale: 0.9,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.25,
            }}
            transition={{
              duration: 1.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.025,
            }}
            className="group relative overflow-hidden border border-white/10 bg-[#0b120e]"
          >

            <motion.img
              src="/91-1.png"
              alt="Vishnu Siddhi Nursery"
              initial={{
                scale: 1.15,
                rotate: -2,
                opacity: 0.65,
              }}
              animate={{
                scale: [1.15, 1.06, 1.15],
                rotate: [-2, 1.5, -2],
                opacity: [0.7, 1, 0.75],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{
                scale: 1.12,
                rotate: 0,
                transition: {
                  duration: 0.8,
                },
              }}
              className="h-[420px] w-full object-cover md:h-[520px]"
            />

            {/* Dark Overlay */}

            <motion.div
              initial={{
                opacity: 0.7,
              }}
              whileHover={{
                opacity: 0.3,
              }}
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition duration-700"
            />

            {/* Golden Glow */}

            <motion.div
              animate={{
                opacity: [0, 0.25, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,163,90,.35),transparent_60%)]"
            />

            {/* Image Text */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.4,
                duration: 0.8,
              }}
              className="absolute bottom-6 left-6"
            >

              <p className="text-xs uppercase tracking-[.3em] text-[#c7a35a]">
                Vishnu Siddhi Nursery
              </p>

              <p className="mt-2 text-sm text-white/70">
                Where nature meets refined living.
              </p>

            </motion.div>

          </motion.div>


          {/* STORY */}

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={stagger}
            className="md:pl-8"
          >

            <motion.p
              variants={fadeRight}
              className="text-xs uppercase tracking-[.3em] text-[#c7a35a]"
            >
              02 / Our Story
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl font-semibold leading-tight md:text-5xl"
            >
              Bringing the beauty
              <br />
              of nature{" "}
              <motion.span
                animate={{
                  opacity: [0.4, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="text-[#c7a35a]"
              >
                closer.
              </motion.span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-sm leading-8 text-white/50"
            >
              Plants have the ability to transform the atmosphere of a space.
              They bring freshness, natural texture and a sense of calm that
              cannot be recreated by ordinary decoration.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-sm leading-8 text-white/50"
            >
              At Vishnu Siddhi Nursery, we aim to make that experience simple
              and enjoyable. Our collection brings together different forms of
              greenery so customers can discover plants that naturally belong
              in their surroundings.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-sm leading-8 text-white/50"
            >
              From compact indoor plants to statement greenery and carefully
              shaped bonsai, every plant can become a meaningful part of your
              home, office or outdoor environment.
            </motion.p>

          </motion.div>

        </div>


        {/* =========================================================
            03 / OUR VALUES
        ========================================================= */}

        <div className="mt-24">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            variants={stagger}
            className="max-w-3xl"
          >

            <motion.p
              variants={fadeLeft}
              className="text-xs uppercase tracking-[.3em] text-[#c7a35a]"
            >
              03 / Our Values
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl font-semibold md:text-5xl"
            >
              What defines{" "}
              <motion.span
                animate={{
                  opacity: [0.45, 1, 0.6],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="text-[#c7a35a]"
              >
                VSN.
              </motion.span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-sm leading-7 text-white/45"
            >
              Our approach is built around quality, presentation and helping
              people create spaces where plants feel naturally at home.
            </motion.p>

          </motion.div>


          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={stagger}
            className="mt-12 grid gap-px bg-white/10 md:grid-cols-3"
          >

            {[
              [
                "01",
                "Curated",
                "Collections selected around form, texture and presence.",
              ],
              [
                "02",
                "Premium",
                "A sophisticated plant-shopping experience for modern spaces.",
              ],
              [
                "03",
                "Personal",
                "Guidance to help match plants with your environment.",
              ],
            ].map(([num, title, text]) => (

              <motion.div
                key={num}
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 70,
                    scale: 0.9,
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
                }}
                whileHover={{
                  y: -12,
                  scale: 1.035,
                  rotateY: 4,
                  backgroundColor: "#0c160f",
                }}
                className="group bg-[#080b09] p-8 transition duration-500 md:p-10"
              >

                <motion.p
                  whileHover={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                  className="text-xs text-[#c7a35a]"
                >
                  {num}
                </motion.p>

                <h3 className="mt-8 text-2xl transition duration-500 group-hover:text-[#c7a35a]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-white/45 transition duration-500 group-hover:text-white/70">
                  {text}
                </p>

                <motion.div
                  initial={{
                    width: "20%",
                  }}
                  whileHover={{
                    width: "100%",
                  }}
                  className="mt-6 h-px bg-[#c7a35a]"
                />

              </motion.div>

            ))}

          </motion.div>

        </div>


        {/* =========================================================
            04 / COLLECTIONS
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 1,
          }}
          className="mt-24 border-y border-white/10 bg-[#0a140d]"
        >

          <div className="grid gap-10 px-8 py-20 md:grid-cols-2 md:px-12">

            <motion.div
              initial={{
                opacity: 0,
                x: -60,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.8,
              }}
            >

              <p className="text-xs uppercase tracking-[.3em] text-[#c7a35a]">
                04 / Collections
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                Greenery for
                <br />
                <motion.span
                  animate={{
                    opacity: [0.45, 1, 0.65],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                  }}
                  className="text-[#c7a35a]"
                >
                  every space.
                </motion.span>
              </h2>

            </motion.div>


            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                amount: 0.2,
              }}
              variants={stagger}
              className="space-y-6 text-sm leading-8 text-white/50"
            >

              {[
                [
                  "Bonsai",
                  "Discover carefully shaped bonsai that bring an artistic, timeless character to your collection.",
                ],
                [
                  "Indoor Plants",
                  "Add natural beauty to interiors with plants selected for modern homes and workspaces.",
                ],
                [
                  "Statement Greenery",
                  "Larger architectural plants designed to become a visual centrepiece of your environment.",
                ],
              ].map(([title, text]) => (

                <motion.div
                  key={title}
                  variants={fadeRight}
                  whileHover={{
                    x: 12,
                  }}
                  className="group border-l border-transparent pl-0 transition duration-500 hover:border-[#c7a35a] hover:pl-5"
                >

                  <h3 className="text-lg text-white transition duration-500 group-hover:text-[#c7a35a]">
                    {title}
                  </h3>

                  <p className="mt-2">
                    {text}
                  </p>

                </motion.div>

              ))}

            </motion.div>

          </div>

        </motion.div>


        {/* =========================================================
            05 / EXPERIENCE
        ========================================================= */}

        <div className="mt-24 grid gap-12 md:grid-cols-2 md:items-center">

          <motion.div
            initial={{
              opacity: 0,
              x: -70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
            }}
          >

            <p className="text-xs uppercase tracking-[.3em] text-[#c7a35a]">
              05 / The Experience
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              More than a plant.
              <br />
              <motion.span
                animate={{
                  opacity: [0.4, 1, 0.6],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                }}
                className="text-[#c7a35a]"
              >
                A greener experience.
              </motion.span>
            </h2>

          </motion.div>


          <motion.div
            initial={{
              opacity: 0,
              x: 70,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
            }}
            className="text-sm leading-8 text-white/50"
          >

            <p>
              Choosing the right plant is about understanding the space,
              available light, atmosphere and the character you want to create.
            </p>

            <p className="mt-5">
              VSN is designed to make that journey more approachable by
              bringing different plant styles and collections together in one
              place.
            </p>

            <p className="mt-5">
              Whether you are starting with your first plant or building a
              larger collection, every green space begins with one choice.
            </p>

          </motion.div>

        </div>


        {/* =========================================================
            06 / FINAL CTA
        ========================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 80,
            scale: 0.94,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            borderColor: "rgba(199,163,90,.55)",
            scale: 1.01,
          }}
          className="relative mt-24 overflow-hidden border border-[#c7a35a]/20 bg-[#0b160e] p-8 md:p-14"
        >

          {/* Animated background glow */}

          <motion.div
            animate={{
              x: ["-20%", "20%", "-20%"],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(199,163,90,.3),transparent_55%)]"
          />

          <div className="relative">

            <motion.p
              animate={{
                opacity: [0.45, 1, 0.55],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="text-xs uppercase tracking-[.3em] text-[#c7a35a]"
            >
              Need a collection?
            </motion.p>

            <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
              Let’s curate your green space.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
              Explore our plant collections or contact VSN to discuss your
              requirements and find greenery that fits your space.
            </p>

            <motion.div
              whileHover={{
                scale: 1.06,
              }}
              whileTap={{
                scale: 0.96,
              }}
              className="inline-block"
            >
              <Link
                href="/contact"
                className="mt-7 inline-block border border-[#c7a35a] px-6 py-3 text-xs uppercase tracking-[.2em] text-[#c7a35a] transition duration-500 hover:bg-[#c7a35a] hover:text-black"
              >
                Contact Us
              </Link>
            </motion.div>

          </div>

        </motion.div>

      </section>

    </main>
  );
}