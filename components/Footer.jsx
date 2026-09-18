"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Plant Collections", href: "/plants" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
        amount: 0.2,
      }}
      transition={{
        duration: 1,
      }}
      className="border-t border-white/10 bg-[#050705]"
    >

      <div className="mx-auto max-w-7xl px-6 py-14">

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid gap-10 md:grid-cols-3"
        >

          {/* BRAND */}

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: -50,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                },
              },
            }}
          >

            <motion.p
              animate={{
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="gold-text text-xs uppercase tracking-[.3em]"
            >
              VSN
            </motion.p>

            <h3 className="mt-3 text-2xl font-semibold">
              Vishnu Siddhi Nursery
            </h3>

            <p className="mt-4 max-w-sm text-sm leading-7 text-white/55">
              Curated greenery for refined spaces — from timeless bonsai
              to distinctive indoor plants.
            </p>

          </motion.div>


          {/* LINKS */}

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: 40,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.8,
                },
              },
            }}
          >

            <p className="text-xs uppercase tracking-[.25em] text-white/40">
              Explore
            </p>

            <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">

              {footerLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{
                    x: 10,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                >
                  <Link
                    href={link.href}
                    className="inline-block transition duration-300 hover:text-[#c7a35a]"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

            </div>

          </motion.div>


          {/* CONTACT */}

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                x: 50,
              },
              visible: {
                opacity: 1,
                x: 0,
                transition: {
                  duration: 0.8,
                },
              },
            }}
          >

            <p className="text-xs uppercase tracking-[.25em] text-white/40">
              Visit / Enquire
            </p>

            <p className="mt-4 text-sm leading-7 text-white/60">
              Speak with our nursery team for plant availability,
              bulk requirements and curated collections.
            </p>

            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.97,
              }}
            >
              <Link
                href="/contact"
                className="mt-5 inline-block border border-[#c7a35a]/50 px-5 py-3 text-xs uppercase tracking-[.2em] text-[#c7a35a] transition duration-500 hover:bg-[#c7a35a] hover:text-black"
              >
                Contact VSN
              </Link>
            </motion.div>

          </motion.div>

        </motion.div>


        {/* ANIMATED LINE */}

        <motion.div
          initial={{
            width: "0%",
            opacity: 0,
          }}
          whileInView={{
            width: "100%",
            opacity: 0.4,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="gold-line my-8"
        />


        {/* COPYRIGHT */}

        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="text-xs text-white/35"
        >
          © {new Date().getFullYear()} Vishnu Siddhi Nursery.
          All rights reserved.
        </motion.p>

      </div>

    </motion.footer>
  );
}