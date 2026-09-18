import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="mx-auto min-h-screen max-w-7xl px-6 pb-24 pt-36">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[.35em] text-[#c7a35a]">
          Contact
        </p>

        <h1 className="mt-4 text-5xl font-semibold md:text-7xl">
          Let’s grow something beautiful.
        </h1>

        <p className="mt-6 text-sm leading-7 text-white/50">
          Enquire about plant availability, custom collections, landscaping
          requirements or bulk orders.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-2">

        {/* Send Enquiry */}
        <div className="glass p-7 md:p-10">
          <h2 className="text-2xl">Send an enquiry</h2>

          <form className="mt-7 space-y-5">
            <input
              className="w-full border border-white/10 bg-black/20 px-4 py-4 text-sm outline-none placeholder:text-white/25 focus:border-[#c7a35a]/60"
              placeholder="Your name"
            />

            <input
              className="w-full border border-white/10 bg-black/20 px-4 py-4 text-sm outline-none placeholder:text-white/25 focus:border-[#c7a35a]/60"
              placeholder="Phone / WhatsApp"
            />

            <input
              className="w-full border border-white/10 bg-black/20 px-4 py-4 text-sm outline-none placeholder:text-white/25 focus:border-[#c7a35a]/60"
              placeholder="Email"
              type="email"
            />

            <textarea
              className="min-h-36 w-full border border-white/10 bg-black/20 px-4 py-4 text-sm outline-none placeholder:text-white/25 focus:border-[#c7a35a]/60"
              placeholder="Tell us what you are looking for..."
            />

            <button
              type="button"
              className="w-full border border-[#c7a35a] bg-[#c7a35a] px-6 py-4 text-xs font-semibold uppercase tracking-[.2em] text-black transition hover:bg-transparent hover:text-[#c7a35a]"
            >
              Send Enquiry
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="border border-white/10 bg-[#0b120e] p-7 md:p-10">
          <p className="text-xs uppercase tracking-[.25em] text-[#c7a35a]">
            VSN Nursery
          </p>

          <h2 className="mt-4 text-3xl">
            Visit / Connect
          </h2>

          <div className="mt-10 space-y-7 text-sm">

            <div>
              <p className="text-xs uppercase tracking-[.2em] text-white/35">
                Phone
              </p>

              <p className="mt-2 text-white/75">
                98496 03115
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[.2em] text-white/35">
                Email
              </p>

              <p className="mt-2 text-white/75">
                Add your business email
              </p>
            </div>

            <div>
              <p className="text-xs uppercase tracking-[.2em] text-white/35">
                Address
              </p>

              <p className="mt-2 leading-7 text-white/55">
                Address: Ave Appa Rao Rd, near hp petrol pump, Srinivas Nagar,
                Gandhipuram, Rajamahendravaram, Andhra Pradesh 533103
              </p>
            </div>

          </div>

          <div className="gold-line my-10 opacity-30" />

          <div className="flex gap-3">

            <a
              href="#"
              className="border border-white/10 px-5 py-3 text-xs uppercase tracking-[.15em] text-white/60 hover:border-[#c7a35a]/50 hover:text-[#c7a35a]"
            >
              <FaInstagram className="text-lg" />
            </a>

            <a
              href="#"
              className="border border-white/10 px-5 py-3 text-xs uppercase tracking-[.15em] text-white/60 hover:border-[#c7a35a]/50 hover:text-[#c7a35a]"
            >
              <FaFacebookF className="text-lg" />
            </a>

          </div>
        </div>
      </div>

      {/* Google Maps Location */}
      <div className="mt-14 overflow-hidden border border-white/10 bg-[#0b120e]">

        <div className="p-7 md:p-10">

          <p className="text-xs uppercase tracking-[.3em] text-[#c7a35a]">
            Location
          </p>

          <h2 className="mt-3 text-3xl font-semibold">
            Find Vishnu Siddhi Nursery
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-white/50">
            Visit us at our nursery in Rajamahendravaram.
          </p>

          <a
            href="https://www.google.com/maps/place/Vishnu+Siddhi+Nursery/@17.0078054,81.7909702,15.94z/data=!4m6!3m5!1s0x3a37a34265bc9bd7:0xfb6dc9b74f9ded69!8m2!3d17.0088677!4d81.7950725!16s%2Fg%2F11z5jyycn1?hl=en-IN&entry=ttu&g_ep=EgoyMDI2MDkxMy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-block border border-[#c7a35a] bg-[#c7a35a] px-6 py-4 text-xs font-semibold uppercase tracking-[.2em] text-black transition hover:bg-transparent hover:text-[#c7a35a]"
          >
            Open Location in Google Maps
          </a>

        </div>
      </div>

    </section>
  );
}
