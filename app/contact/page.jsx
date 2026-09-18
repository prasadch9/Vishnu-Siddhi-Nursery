"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const textReveal = {
  hidden: {
    opacity: 0,
    y: 45,
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

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 80,
    scale: 0.94,
    rotateX: 10,
    filter: "blur(8px)",
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

const formContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.25,
    },
  },
};

const fieldAnimation = {
  hidden: {
    opacity: 0,
    x: -35,
    scale: 0.97,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const detailsContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const detailAnimation = {
  hidden: {
    opacity: 0,
    x: 35,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Contact() {
  return (
    <section className="relative mx-auto min-h-screen max-w-7xl overflow-hidden px-6 pb-24 pt-36">

      {/* =========================================================
          BACKGROUND ANIMATED GLOWS
      ========================================================= */}

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: [0.04, 0.12, 0.04],
          scale: [0.8, 1.15, 0.8],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="pointer-events-none absolute -right-48 top-10 h-[550px] w-[550px] rounded-full bg-[#c7a35a]/10 blur-[130px]"
      />

      <motion.div
        animate={{
          opacity: [0.02, 0.09, 0.02],
          x: [0, 80, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-48 top-[650px] h-[450px] w-[450px] rounded-full bg-green-500/10 blur-[120px]"
      />

      {/* =========================================================
          HEADER
      ========================================================= */}

      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.16,
            },
          },
        }}
        className="relative max-w-3xl"
      >
        {/* Label */}
        <motion.div
          variants={textReveal}
          className="flex items-center gap-4"
        >
          <motion.span
            initial={{ width: 0, opacity: 0 }}
            animate={{
              width: ["0px", "55px", "35px"],
              opacity: [0, 1, 0.7],
            }}
            transition={{
              duration: 1.3,
              ease: "easeOut",
            }}
            className="h-px bg-[#c7a35a]"
          />

          <motion.p
            animate={{
              opacity: [0.45, 1, 0.6],
              letterSpacing: ["0.2em", "0.35em", "0.3em"],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "mirror",
            }}
            className="text-xs uppercase text-[#c7a35a]"
          >
            Contact
          </motion.p>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={textReveal}
          className="mt-5 text-5xl font-semibold leading-tight md:text-7xl"
        >
          Let’s grow something{" "}
          <motion.span
            animate={{
              opacity: [0.65, 1, 0.7],
              textShadow: [
                "0 0 0px rgba(199,163,90,0)",
                "0 0 30px rgba(199,163,90,0.25)",
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
            beautiful.
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={textReveal}
          className="mt-6 max-w-xl text-sm leading-7 text-white/50"
        >
          Enquire about plant availability, custom collections, landscaping
          requirements or bulk orders.
        </motion.p>

        {/* Decorative line */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: ["0%", "100%", "70%"],
            opacity: [0, 1, 0.4],
          }}
          transition={{
            duration: 2,
            delay: 0.8,
          }}
          className="mt-8 h-px max-w-md bg-gradient-to-r from-[#c7a35a]/70 via-[#c7a35a]/20 to-transparent"
        />
      </motion.div>

      {/* =========================================================
          CONTACT CARDS
      ========================================================= */}

      <div
        className="relative mt-16 grid gap-8 md:grid-cols-2"
        style={{ perspective: "1200px" }}
      >

        {/* =====================================================
            SEND ENQUIRY
        ===================================================== */}

        <motion.div
          variants={cardReveal}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          whileHover={{
            y: -8,
            rotateY: -1.5,
            transition: {
              duration: 0.35,
            },
          }}
          className="glass group relative overflow-hidden p-7 md:p-10"
        >
          {/* Card glow */}
          <motion.div
            animate={{
              opacity: [0, 0.15, 0],
              scale: [0.9, 1.05, 0.9],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#c7a35a]/20 blur-[80px]"
          />

          {/* Animated top line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.3,
            }}
            className="absolute left-0 top-0 h-px bg-gradient-to-r from-[#c7a35a] to-transparent"
          />

          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="relative text-2xl"
          >
            Send an enquiry
          </motion.h2>

          <motion.form
            variants={formContainer}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative mt-7 space-y-5"
          >
            {/* Name */}
            <motion.div variants={fieldAnimation}>
              <input
                className="w-full border border-white/10 bg-black/20 px-4 py-4 text-sm outline-none transition-all duration-300 placeholder:text-white/25 focus:border-[#c7a35a]/60 focus:bg-[#c7a35a]/[0.03] focus:shadow-[0_0_25px_rgba(199,163,90,0.06)]"
                placeholder="Your name"
              />
            </motion.div>

            {/* Phone */}
            <motion.div variants={fieldAnimation}>
              <input
                className="w-full border border-white/10 bg-black/20 px-4 py-4 text-sm outline-none transition-all duration-300 placeholder:text-white/25 focus:border-[#c7a35a]/60 focus:bg-[#c7a35a]/[0.03] focus:shadow-[0_0_25px_rgba(199,163,90,0.06)]"
                placeholder="Phone / WhatsApp"
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={fieldAnimation}>
              <input
                className="w-full border border-white/10 bg-black/20 px-4 py-4 text-sm outline-none transition-all duration-300 placeholder:text-white/25 focus:border-[#c7a35a]/60 focus:bg-[#c7a35a]/[0.03] focus:shadow-[0_0_25px_rgba(199,163,90,0.06)]"
                placeholder="Email"
                type="email"
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={fieldAnimation}>
              <textarea
                className="min-h-36 w-full resize-none border border-white/10 bg-black/20 px-4 py-4 text-sm outline-none transition-all duration-300 placeholder:text-white/25 focus:border-[#c7a35a]/60 focus:bg-[#c7a35a]/[0.03] focus:shadow-[0_0_25px_rgba(199,163,90,0.06)]"
                placeholder="Tell us what you are looking for..."
              />
            </motion.div>

            {/* Button */}
            <motion.div variants={fieldAnimation}>
              <motion.button
                type="button"
                whileHover={{
                  scale: 1.02,
                  letterSpacing: "0.24em",
                }}
                whileTap={{
                  scale: 0.97,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="relative w-full overflow-hidden border border-[#c7a35a] bg-[#c7a35a] px-6 py-4 text-xs font-semibold uppercase tracking-[.2em] text-black"
              >
                <motion.span
                  initial={{ x: "-110%" }}
                  whileHover={{ x: "110%" }}
                  transition={{
                    duration: 0.7,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 bg-white/20"
                />

                <span className="relative z-10">
                  Send Enquiry
                </span>
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>

        {/* =====================================================
            CONTACT DETAILS
        ===================================================== */}

        <motion.div
          variants={cardReveal}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          whileHover={{
            y: -8,
            rotateY: 1.5,
            transition: {
              duration: 0.35,
            },
          }}
          className="group relative overflow-hidden border border-white/10 bg-[#0b120e] p-7 md:p-10"
        >
          {/* Background glow */}
          <motion.div
            animate={{
              opacity: [0.03, 0.12, 0.03],
              x: [40, -30, 40],
              y: [-20, 30, -20],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-[#c7a35a]/10 blur-[100px]"
          />

          {/* Top border animation */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{
              duration: 1.2,
              delay: 0.4,
            }}
            className="absolute left-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c7a35a]/60 to-transparent"
          />

          <motion.div
            variants={detailsContainer}
            initial="hidden"
            whileInView="show"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative"
          >
            <motion.p
              variants={detailAnimation}
              className="text-xs uppercase tracking-[.25em] text-[#c7a35a]"
            >
              VSN Nursery
            </motion.p>

            <motion.h2
              variants={detailAnimation}
              className="mt-4 text-3xl"
            >
              Visit / Connect
            </motion.h2>

            <div className="mt-10 space-y-7 text-sm">

              {/* Phone */}
              <motion.div
                variants={detailAnimation}
                whileHover={{
                  x: 8,
                  transition: { duration: 0.25 },
                }}
                className="border-l border-transparent pl-0 transition-colors duration-300 hover:border-[#c7a35a]/50 hover:pl-4"
              >
                <p className="text-xs uppercase tracking-[.2em] text-white/35">
                  Phone
                </p>

                <p className="mt-2 text-white/75">
                  98496 03115
                </p>
              </motion.div>

              {/* Email */}
              <motion.div
                variants={detailAnimation}
                whileHover={{
                  x: 8,
                  transition: { duration: 0.25 },
                }}
                className="border-l border-transparent pl-0 transition-colors duration-300 hover:border-[#c7a35a]/50 hover:pl-4"
              >
                <p className="text-xs uppercase tracking-[.2em] text-white/35">
                  Email
                </p>

                <p className="mt-2 text-white/75">
                  Add your business email
                </p>
              </motion.div>

              {/* Address */}
              <motion.div
                variants={detailAnimation}
                whileHover={{
                  x: 8,
                  transition: { duration: 0.25 },
                }}
                className="border-l border-transparent pl-0 transition-colors duration-300 hover:border-[#c7a35a]/50 hover:pl-4"
              >
                <p className="text-xs uppercase tracking-[.2em] text-white/35">
                  Address
                </p>

                <p className="mt-2 leading-7 text-white/55">
                  Address: Ave Appa Rao Rd, near hp petrol pump, Srinivas
                  Nagar, Gandhipuram, Rajamahendravaram, Andhra Pradesh
                  533103
                </p>
              </motion.div>
            </div>

            {/* Gold line */}
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{
                width: "100%",
                opacity: 0.3,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.5,
              }}
              className="gold-line my-10"
            />

            {/* Social icons */}
            <motion.div
              variants={detailAnimation}
              className="flex gap-3"
            >
              {/* Instagram */}
              <motion.a
                href="#"
                whileHover={{
                  y: -6,
                  rotate: -5,
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="group/social flex h-12 w-12 items-center justify-center border border-white/10 text-white/60 transition-colors duration-300 hover:border-[#c7a35a]/50 hover:text-[#c7a35a]"
              >
                <motion.span
                  whileHover={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <FaInstagram className="text-lg" />
                </motion.span>
              </motion.a>

              {/* Facebook */}
              <motion.a
                href="#"
                whileHover={{
                  y: -6,
                  rotate: 5,
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="group/social flex h-12 w-12 items-center justify-center border border-white/10 text-white/60 transition-colors duration-300 hover:border-[#c7a35a]/50 hover:text-[#c7a35a]"
              >
                <motion.span
                  whileHover={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 0.5,
                  }}
                >
                  <FaFacebookF className="text-lg" />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* =========================================================
          LOCATION / GOOGLE MAPS
      ========================================================= */}

      <motion.div
        variants={cardReveal}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        whileHover={{
          y: -6,
          transition: {
            duration: 0.35,
          },
        }}
        className="group relative mt-14 overflow-hidden border border-white/10 bg-[#0b120e]"
      >
        {/* Moving glow */}
        <motion.div
          animate={{
            opacity: [0.03, 0.12, 0.03],
            scale: [0.8, 1.2, 0.8],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full bg-[#c7a35a]/10 blur-[110px]"
        />

        {/* Animated top border */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{
            duration: 1.3,
          }}
          className="absolute left-0 top-0 h-px bg-gradient-to-r from-[#c7a35a]/70 via-[#c7a35a]/20 to-transparent"
        />

        <div className="relative p-7 md:p-10">

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
            }}
            className="text-xs uppercase tracking-[.3em] text-[#c7a35a]"
          >
            Location
          </motion.p>

          <motion.h2
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
            }}
            className="mt-3 text-3xl font-semibold"
          >
            Find Vishnu Siddhi Nursery
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="mt-3 max-w-2xl text-sm leading-7 text-white/50"
          >
            Visit us at our nursery in Rajamahendravaram.
          </motion.p>

          {/* Google Maps button */}
          <motion.a
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            whileHover={{
              scale: 1.04,
              letterSpacing: "0.24em",
            }}
            whileTap={{
              scale: 0.97,
            }}
            href="https://www.google.com/maps/place/Vishnu+Siddhi+Nursery/@17.0078054,81.7909702,15.94z/data=!4m6!3m5!1s0x3a37a34265bc9bd7:0xfb6dc9b74f9ded69!8m2!3d17.0088677!4d81.7950725!16s%2Fg%2F11z5jyycn1?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDkxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="relative mt-7 inline-block overflow-hidden border border-[#c7a35a] bg-[#c7a35a] px-6 py-4 text-xs font-semibold uppercase tracking-[.2em] text-black"
          >
            <motion.span
              initial={{ x: "-110%" }}
              whileHover={{ x: "110%" }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
              className="absolute inset-0 bg-white/25"
            />

            <span className="relative z-10">
              Open Location in Google Maps
            </span>
          </motion.a>
        </div>
      </motion.div>

      {/* =========================================================
          BOTTOM DECORATION
      ========================================================= */}

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
            scale: [1, 1.2, 1],
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
