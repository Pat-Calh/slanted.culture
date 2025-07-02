export default function EventsBlog() {
  return (
    <section className="py-12 max-w-3xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center uppercase">Events / Blog</h2>
      <div className="flex flex-col gap-8">
        {[1,2,3].map(i => (
          <div key={i} className="bg-white/5 p-6 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-2">Event or Blog Title {i}</h3>
            <p className="text-white/70 mb-2">Short description or excerpt for event/blog post {i} goes here.</p>
            <span className="text-xs text-white/40">Date: 2025-07-0{i}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
