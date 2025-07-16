export default function Contact() {
  return (
    <section className="py-16 px-4 max-w-2xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center uppercase tracking-tight">
        Get In Touch
      </h2>
      
      <form 
        name="contact" 
        netlify 
        className="space-y-6 bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 shadow-xl"
      >
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Name</label>
          <input 
            type="text" 
            name="name" 
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
            placeholder="Your name"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Email</label>
          <input 
            type="email" 
            name="email" 
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
            placeholder="your.email@example.com"
          />
        </div>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Message</label>
          <textarea 
            name="message" 
            rows={4}
            required
            className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 text-white placeholder-gray-400"
            placeholder="Your message here..."
          ></textarea>
        </div>
        
        <div className="pt-2">
          <button 
            type="submit" 
            className="w-full py-3 px-6 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold rounded-lg hover:from-rose-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Send Message
          </button>
        </div>
      </form>
      
      <div className="mt-12 text-center text-gray-400 text-sm">
        <p>We'll get back to you as soon as possible!</p>
      </div>
    </section>
  );
}
