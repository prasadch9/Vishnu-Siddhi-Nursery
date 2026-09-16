import PlantCard from "@/components/PlantCard";

const plants = [
  ["Bonsai", "Bonsai", "/Ficus Bonsai.webp"],
  ["Buddha Belly Bamboo", "Buddha Belly Bamboo", "/buddha belly bamboo.avif"],
  ["Ceiba Speciosa", "Ceiba Speciosa", "/ceiba speciosa.webp"],
  ["Clusia Rosea", "Clusia Rosea", "/clusia rosea.webp"],
  ["Golden Zebra Fern", "Golden Zebra Fern", "/golden zebra fern.jpg"],
  ["Malpighia Shapes", "Malpighia Shapes", "/malpighia shapes.webp"],
  ["Tecoma Dwarf", "Tecoma Dwarf", "/tecoma dwarf.webp"],
  ["Thai Cypress", "Thai Cypress", "/thai cypress.webp"],
  ["Washingtonia Filifera", "Washingtonia Filifera", "/Washingtonia Filifera.webp"],
  ["Wedelia-Trilobata", "Wedelia-Trilobata", "/Wedelia-Trilobata.webp"]
];

export default function Plants() {
  return (
    <section className="mx-auto min-h-screen max-w-7xl px-6 pb-24 pt-36">
      <div className="max-w-3xl">
        <p className="text-xs uppercase tracking-[.35em] text-[#c7a35a]">Plant Collections</p>
        <h1 className="mt-4 text-5xl font-semibold md:text-7xl">Greenery with presence.</h1>
        <p className="mt-6 text-sm leading-7 text-white/50">
          Explore a sample catalogue.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plants.map(([name, category, image]) => (
          <PlantCard key={name} name={name} category={category} image={image} />
        ))}
      </div>
    </section>
  );
}
