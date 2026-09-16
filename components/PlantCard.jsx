export default function PlantCard({ name, category, image }) {
  return (
    <article className="plant-card overflow-hidden border border-white/10 bg-[#0b120e]">
      <div className="relative h-72 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
        <span className="absolute bottom-4 left-4 border border-[#c7a35a]/50 bg-black/40 px-3 py-1 text-[10px] uppercase tracking-[.2em] text-[#d8bc7e]">
          {category}
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg tracking-wide">{name}</h3>
        <p className="mt-2 text-xs leading-5 text-white/45">
          Selected for character, form and lasting visual appeal.
        </p>
      </div>
    </article>
  );
}
