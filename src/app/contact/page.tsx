export default function Contact() {
  return (
    <section className="py-12 max-w-xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8 uppercase">Contact</h2>
      <form className="flex flex-col gap-4 items-center">
        <input type="text" placeholder="Your Name" className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-white/50 focus:outline-none" />
        <input type="email" placeholder="Your Email" className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-white/50 focus:outline-none" />
        <textarea placeholder="Your Message" className="w-full px-4 py-2 rounded bg-white/10 text-white placeholder-white/50 focus:outline-none" rows={4} />
        <button type="submit" className="px-6 py-2 bg-white text-black font-bold rounded hover:bg-accent transition">Send</button>
      </form>
    </section>
  );
}
