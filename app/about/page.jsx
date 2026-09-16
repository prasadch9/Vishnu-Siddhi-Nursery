import Link from "next/link";

export default function About() {
  return (
    <section className="mx-auto min-h-screen max-w-7xl px-6 pb-24 pt-36">

      {/* 01 / Intro */}
      <div className="grid gap-14 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[.35em] text-[#c7a35a]">
            About VSN
          </p>

          <h1 className="mt-4 text-5xl font-semibold leading-tight md:text-7xl">
            A nursery built
            <br />
            around <span className="text-[#c7a35a]">character.</span>
          </h1>
        </div>

        <div className="border-l border-[#c7a35a]/30 pl-7 text-sm leading-8 text-white/55">
          <p>
            Vishnu Siddhi Nursery is presented as a premium destination for
            plants that add identity to a space. From carefully shaped bonsai
            to lush indoor varieties, VSN focuses on visual character and a
            refined plant experience.
          </p>

          <p className="mt-5">
            Whether you are styling a home, office, hospitality space or
            personal collection, our goal is simple: make greenery feel
            intentional.
          </p>
        </div>
      </div>


      {/* 02 / Image + Story */}
      <div className="mt-24 grid gap-10 md:grid-cols-2 md:items-center">

        {/* 
          Replace this image with your own image.
          Put your image inside:
          public/images/about-nursery.jpg
        */}
        <div className="group relative overflow-hidden border border-white/10 bg-[#0b120e]">
  <img
    src="/91-1.png"
    alt="Vishnu Siddhi Nursery"
    className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105 md:h-[520px]"
  />

  <div className="absolute bottom-6 left-6"></div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

          <div className="absolute bottom-6 left-6">
            <p className="text-xs uppercase tracking-[.3em] text-[#c7a35a]">
              Vishnu Siddhi Nursery
            </p>
            <p className="mt-2 text-sm text-white/70">
              Where nature meets refined living.
            </p>
          </div>
        </div>

        <div className="md:pl-8">
          <p className="text-xs uppercase tracking-[.3em] text-[#c7a35a]">
            02 / Our Story
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Bringing the beauty
            <br />
            of nature <span className="text-[#c7a35a]">closer.</span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-white/50">
            Plants have the ability to transform the atmosphere of a space.
            They bring freshness, natural texture and a sense of calm that
            cannot be recreated by ordinary decoration.
          </p>

          <p className="mt-5 text-sm leading-8 text-white/50">
            At Vishnu Siddhi Nursery, we aim to make that experience simple
            and enjoyable. Our collection brings together different forms of
            greenery so customers can discover plants that naturally belong
            in their surroundings.
          </p>

          <p className="mt-5 text-sm leading-8 text-white/50">
            From compact indoor plants to statement greenery and carefully
            shaped bonsai, every plant can become a meaningful part of your
            home, office or outdoor environment.
          </p>
        </div>
      </div>


      {/* 03 / Our Values */}
      <div className="mt-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[.3em] text-[#c7a35a]">
            03 / Our Values
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-5xl">
            What defines <span className="text-[#c7a35a]">VSN.</span>
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/45">
            Our approach is built around quality, presentation and helping
            people create spaces where plants feel naturally at home.
          </p>
        </div>

        <div className="mt-12 grid gap-px bg-white/10 md:grid-cols-3">
          {[
            [
              "01",
              "Curated",
              "Collections selected around form, texture and presence."
            ],
            [
              "02",
              "Premium",
              "A sophisticated plant-shopping experience for modern spaces."
            ],
            [
              "03",
              "Personal",
              "Guidance to help match plants with your environment."
            ]
          ].map(([num, title, text]) => (
            <div key={num} className="bg-[#080b09] p-8 md:p-10">

              <p className="text-xs text-[#c7a35a]">
                {num}
              </p>

              <h3 className="mt-8 text-2xl">
                {title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/45">
                {text}
              </p>

            </div>
          ))}
        </div>
      </div>


      {/* 04 / Our Collections */}
      <div className="mt-24 border-y border-white/10 bg-[#0a140d]">
        <div className="grid gap-10 px-8 py-20 md:grid-cols-2 md:px-12">

          <div>
            <p className="text-xs uppercase tracking-[.3em] text-[#c7a35a]">
              04 / Collections
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              Greenery for
              <br />
              <span className="text-[#c7a35a]">every space.</span>
            </h2>
          </div>

          <div className="space-y-6 text-sm leading-8 text-white/50">

            <div>
              <h3 className="text-lg text-white">
                Bonsai
              </h3>

              <p className="mt-2">
                Discover carefully shaped bonsai that bring an artistic,
                timeless character to your collection.
              </p>
            </div>

            <div>
              <h3 className="text-lg text-white">
                Indoor Plants
              </h3>

              <p className="mt-2">
                Add natural beauty to interiors with plants selected for
                modern homes and workspaces.
              </p>
            </div>

            <div>
              <h3 className="text-lg text-white">
                Statement Greenery
              </h3>

              <p className="mt-2">
                Larger architectural plants designed to become a visual
                centrepiece of your environment.
              </p>
            </div>

          </div>
        </div>
      </div>


      {/* 05 / Experience */}
      <div className="mt-24 grid gap-12 md:grid-cols-2 md:items-center">

        <div>
          <p className="text-xs uppercase tracking-[.3em] text-[#c7a35a]">
            05 / The Experience
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            More than a plant.
            <br />
            <span className="text-[#c7a35a]">
              A greener experience.
            </span>
          </h2>
        </div>

        <div className="text-sm leading-8 text-white/50">
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
        </div>

      </div>


      {/* 06 / Final CTA */}
      <div className="mt-24 border border-[#c7a35a]/20 bg-[#0b160e] p-8 md:p-14">

        <p className="text-xs uppercase tracking-[.3em] text-[#c7a35a]">
          Need a collection?
        </p>

        <h2 className="mt-3 text-3xl font-semibold md:text-4xl">
          Let’s curate your green space.
        </h2>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-white/45">
          Explore our plant collections or contact VSN to discuss your
          requirements and find greenery that fits your space.
        </p>

        <Link
          href="/contact"
          className="mt-7 inline-block border border-[#c7a35a] px-6 py-3 text-xs uppercase tracking-[.2em] text-[#c7a35a] transition hover:bg-[#c7a35a] hover:text-black"
        >
          Contact Us
        </Link>

      </div>

    </section>
  );
}