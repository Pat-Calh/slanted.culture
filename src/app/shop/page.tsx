export default function ShopGallery() {
  return (
    <section className="py-12">
      <h2 className="text-4xl font-bold mb-8 text-center uppercase">Shop / Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* Placeholder product/art cards */}
        {[1,2,3,4,5,6].map(i => (
          <div key={i} className="bg-white/10 rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-6">
            <div className="w-full h-48 bg-white/20 mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2">Artwork/Product {i}</h3>
            <p className="text-white/70 mb-4">Short description goes here.</p>
            <button className="px-4 py-2 bg-white text-black font-bold rounded hover:bg-accent transition">View</button>
          </div>
        ))}
      </div>
    </section>
  );
}
