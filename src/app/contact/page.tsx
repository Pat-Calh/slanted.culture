export default function Contact() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 bg-black">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <form 
        name="contact" 
        method="POST"
        data-netlify="true"
        className="relative z-10 w-full max-w-xl p-8 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-xl"
      >
        <input type="hidden" name="form-name" value="contact" />
        
        <h2 className="text-3xl font-bold text-white mb-8 text-center uppercase tracking-wider">
          Get In Touch
        </h2>
        
        <div className="space-y-6">
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Name
            </label>
            <input 
              type="text" 
              name="name" 
              required 
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
              placeholder="Your name"
            />
          </div>
          
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Email
            </label>
            <input 
              type="email" 
              name="email" 
              required 
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
              placeholder="your.email@example.com"
            />
          </div>
          
          <div>
            <label className="block text-gray-300 text-sm font-medium mb-2">
              Message
            </label>
            <textarea 
              name="message" 
              required 
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 resize-none"
              placeholder="Your message here..."
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="w-full py-3 px-6 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold rounded-lg hover:from-rose-700 hover:to-pink-700 transition-all duration-200 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-900"
          >
            Send Message
          </button>
        </div>
        
        <p className="mt-6 text-center text-gray-400 text-sm">
          We'll get back to you as soon as possible!
        </p>
      </form>
    </div>
  );
}