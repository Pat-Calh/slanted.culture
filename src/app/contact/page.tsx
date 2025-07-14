export default function Contact() {
  return (
    <section className="py-12 max-w-xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-8 uppercase">Contact</h2>
      <form className="flex flex-col gap-4 items-center">
  <input
    type="text"
    placeholder="Your Name"
    className="w-full px-4 py-2 rounded bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
  />
  <input
    type="email"
    placeholder="Your Email"
    className="w-full px-4 py-2 rounded bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
  />
  <textarea
    placeholder="Your Message"
    className="w-full px-4 py-2 rounded bg-white text-black placeholder-gray-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent"
    rows={4}
  />
  <button type="submit" className="px-6 py-2 bg-rose-600 text-white font-bold rounded border border-rose-700 shadow hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-400 transition">Send</button>
</form>
    </section>
  );
}
