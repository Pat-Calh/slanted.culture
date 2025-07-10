import Image from "next/image";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] text-center gap-8">
      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase drop-shadow-lg">
        Slanted Culture
      </h1>
      <Image src="/SlantedLogo.png" alt="Slanted Culture Logo" width={220} height={100} className="my-4 mx-auto w-auto h-auto max-w-[220px]" />
      <p className="max-w-xl text-lg md:text-2xl text-white/80 font-medium">
        Car culture, art, and photography—where the streets meet creativity. Join the movement.
      </p>
      <a href="/shop" className="inline-block px-8 py-3 bg-white text-black font-bold rounded-full shadow-lg hover:bg-accent transition text-lg">
        Explore the Gallery
      </a>
    </section>
  );
}
