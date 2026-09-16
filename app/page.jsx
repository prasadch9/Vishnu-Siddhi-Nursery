import Link from "next/link";
import PlantCard from "@/components/PlantCard";

const collections = [
  {
    name: "Bonsai",
    category: "Signature Collection",
    image: "/images.webp"
  },
  {
    name: "Rare Indoor Plants",
    category: "Curated Collection",
    image: "/images (1).jpg"
  },
  {
    name: "Architectural Greens",
    category: "Statement Plants",
    image: "/image (3).jpg"
  },
  {
  name: "Tropical Foliage",
  category: "Lush Collection",
  image: "/Tropical Plant.webp"
},
{
  name: "Flowering Plants",
  category: "Blooming Collection",
  image: "/Flowering Plants.jpg"
},
{
  name: "Outdoor Greens",
  category: "Garden Collection",
  image: "/Gardern Collection.webp"
},
{
  name: "Palm Collection",
  category: "Tropical Collection",
  image: "/Tropical Collection.webp"
},
{
  name: "Succulents",
  category: "Minimal Collection",
  image: "/Minimal Collection.jpg"
},
{
  name: "Decorative Plants",
  category: "Lifestyle Collection",
  image: "/Lifestyle Collection.webp"
},
  
];

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen overflow-hidden">

        {/* Hero Image */}
        <img
          src="/hero img.webp"
          alt="Vishnu Siddhi Nursery"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,8,5,.96),rgba(3,8,5,.68),rgba(3,8,5,.32))]" />

        {/* Green Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_45%,rgba(58,137,78,.28),transparent_34%)]" />

        <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28">
          <div className="max-w-3xl reveal-up">
            <p className="mb-5 text-xs uppercase tracking-[.42em] text-[#c7a35a]">
              Vishnu Siddhi Nursery · VSN
            </p>

            <h1 className="text-5xl font-semibold leading-[.98] tracking-[-.04em] md:text-7xl lg:text-8xl">
              Greenery,
              <br />
              <span className="text-[#c7a35a]">refined.</span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/65 md:text-lg">
              Discover premium bonsai, rare indoor plants and statement
              greenery selected to bring quiet luxury into your space.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/plants"
                className="border border-[#c7a35a] bg-[#c7a35a] px-7 py-4 text-xs font-semibold uppercase tracking-[.2em] text-[#07100a] transition hover:bg-transparent hover:text-[#c7a35a]"
              >
                Explore Collection
              </Link>

              <Link
                href="/contact"
                className="border border-white/20 px-7 py-4 text-xs uppercase tracking-[.2em] text-white/80 transition hover:border-[#c7a35a]/60"
              >
                Enquire
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[.3em] text-[#c7a35a]">
              01 / Collections
            </p>

            <h2 className="mt-3 text-4xl font-semibold md:text-5xl">
              Exclusive Collections
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/45">
            A modern selection designed for homes, offices, hospitality spaces
            and plant collectors.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {collections.map((plant) => (
            <PlantCard key={plant.name} {...plant} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0a140d]">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs uppercase tracking-[.3em] text-[#c7a35a]">
              02 / The VSN Approach
            </p>

            <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
              Nature with
              <br />a point of view.
            </h2>
          </div>

          <div className="text-sm leading-8 text-white/55">
            <p>
              VSN brings together plants with distinctive shape, texture and
              character. Our collections are presented with a premium,
              contemporary aesthetic so your greenery becomes part of the
              architecture.
            </p>

            <Link
              href="/about"
              className="mt-7 inline-block text-xs uppercase tracking-[.2em] text-[#c7a35a]"
            >
              Discover our story →
            </Link>
          </div>
        </div>
      </section>

      {/* 03 / Why Choose VSN */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-3xl">
          <p className="text-xs uppercase tracking-[.3em] text-[#c7a35a]">
            03 / Why VSN
          </p>

          <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
            More than plants.
            <br />
            <span className="text-[#c7a35a]">A lifestyle of green.</span>
          </h2>

          <p className="mt-6 text-sm leading-8 text-white/50 md:text-base">
            At Vishnu Siddhi Nursery, we believe plants are more than
            decoration. They bring freshness, character and natural beauty
            into everyday spaces. Our carefully selected collections are
            designed to complement modern homes, offices, gardens and
            commercial spaces.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          <div className="border border-white/10 bg-[#0b120e] p-8">
            <div className="text-3xl text-[#c7a35a]">01</div>

            <h3 className="mt-8 text-2xl">
              Quality Plants
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/45">
              We focus on healthy, attractive and well-maintained plants
              suitable for different environments and spaces.
            </p>
          </div>

          <div className="border border-white/10 bg-[#0b120e] p-8">
            <div className="text-3xl text-[#c7a35a]">02</div>

            <h3 className="mt-8 text-2xl">
              Unique Selection
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/45">
              Explore a distinctive range of bonsai, indoor plants and
              statement greenery selected for their natural character.
            </p>
          </div>

          <div className="border border-white/10 bg-[#0b120e] p-8">
            <div className="text-3xl text-[#c7a35a]">03</div>

            <h3 className="mt-8 text-2xl">
              Expert Guidance
            </h3>

            <p className="mt-4 text-sm leading-7 text-white/45">
              Get guidance on choosing plants, understanding their
              requirements and creating a beautiful green environment.
            </p>
          </div>
        </div>
      </section>

      {/* 04 / Green Spaces */}
      <section className="border-y border-white/10 bg-[#071009]">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid gap-12 md:grid-cols-2 md:items-center">

            <div>
              <p className="text-xs uppercase tracking-[.3em] text-[#c7a35a]">
                04 / Green Spaces
              </p>

              <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-6xl">
                Bring nature
                <br />
                <span className="text-[#c7a35a]">
                  closer to you.
                </span>
              </h2>

              <p className="mt-6 text-sm leading-8 text-white/50">
                From a single statement plant to a complete collection,
                VSN helps you create spaces that feel calm, fresh and
                naturally sophisticated.
              </p>
            </div>

            <div className="space-y-4">
              <div className="glass p-6">
                <h3 className="text-xl">
                  Home & Interiors
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  Add natural elegance to living rooms, balconies,
                  bedrooms and workspaces.
                </p>
              </div>

              <div className="glass p-6">
                <h3 className="text-xl">
                  Office & Commercial Spaces
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  Create professional environments with carefully chosen
                  indoor and architectural plants.
                </p>
              </div>

              <div className="glass p-6">
                <h3 className="text-xl">
                  Gardens & Outdoor Spaces
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/45">
                  Bring texture, freshness and visual balance to outdoor
                  spaces with suitable greenery.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 05 / Plant Philosophy */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="text-center">

          <p className="text-xs uppercase tracking-[.3em] text-[#c7a35a]">
            05 / Our Philosophy
          </p>

          <h2 className="mt-4 text-4xl font-semibold md:text-6xl">
            Every plant has
            <br />
            <span className="text-[#c7a35a]">
              its own story.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-sm leading-8 text-white/50">
            We celebrate the individuality of every plant. Natural shapes,
            textures, colours and growth patterns make each piece unique.
            Our collection is created for people who appreciate greenery
            with personality.
          </p>

        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          <div className="border border-white/10 p-7 text-center">
            <div className="text-4xl">🌿</div>

            <h3 className="mt-5 text-lg">
              Natural Beauty
            </h3>

            <p className="mt-3 text-xs leading-6 text-white/40">
              Authentic greenery that adds life to your surroundings.
            </p>
          </div>

          <div className="border border-white/10 p-7 text-center">
            <div className="text-4xl">🌱</div>

            <h3 className="mt-5 text-lg">
              Fresh Growth
            </h3>

            <p className="mt-3 text-xs leading-6 text-white/40">
              Plants that continuously transform and evolve with time.
            </p>
          </div>

          <div className="border border-white/10 p-7 text-center">
            <div className="text-4xl">🪴</div>

            <h3 className="mt-5 text-lg">
              Modern Living
            </h3>

            <p className="mt-3 text-xs leading-6 text-white/40">
              Greenery designed to complement contemporary lifestyles.
            </p>
          </div>

          <div className="border border-white/10 p-7 text-center">
            <div className="text-4xl">🌳</div>

            <h3 className="mt-5 text-lg">
              Long Lasting
            </h3>

            <p className="mt-3 text-xs leading-6 text-white/40">
              Create a green environment that grows with you.
            </p>
          </div>

        </div>
      </section>

      {/* 06 / Final CTA */}
      <section className="border-t border-white/10 bg-[#0a140d]">
        <div className="mx-auto max-w-5xl px-6 py-28 text-center">

          <p className="text-xs uppercase tracking-[.35em] text-[#c7a35a]">
            06 / Begin Your Green Journey
          </p>

          <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
            Find the perfect
            <br />
            <span className="text-[#c7a35a]">
              green companion.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/50">
            Explore our plant collections and discover greenery that fits
            your space, style and personality.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <Link
              href="/plants"
              className="border border-[#c7a35a] bg-[#c7a35a] px-8 py-4 text-xs font-semibold uppercase tracking-[.2em] text-[#07100a] transition hover:bg-transparent hover:text-[#c7a35a]"
            >
              View Plants
            </Link>

            <Link
              href="/contact"
              className="border border-white/20 px-8 py-4 text-xs uppercase tracking-[.2em] text-white/75 transition hover:border-[#c7a35a]/60 hover:text-[#c7a35a]"
            >
              Get In Touch
            </Link>

          </div>

        </div>
      </section>
    </>
  );
}