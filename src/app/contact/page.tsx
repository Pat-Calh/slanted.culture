'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { submitForm } from '@/lib/form-utils';

export default function Contact() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const { success, error: submitError } = await submitForm(form, 'contact');
    
    if (success) {
      router.push('/thank-you');
    } else {
      setError(submitError || 'Failed to submit form');
      setIsSubmitting(false);
    }
  };
  return (
    <div className="relative min-h-screen flex items-center justify-center p-4 bg-black">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      
      <form 
        name="contact" 
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="relative z-10 w-full max-w-xl p-8 rounded-xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-xl"
      >
        {error && (
          <div className="mb-6 p-4 bg-red-900/50 border border-red-500 text-red-100 rounded-lg">
            {error}
          </div>
        )}
        {/* Hidden Netlify form name */}
        <input type="hidden" name="form-name" value="contact" />
        
        {/* Honeypot field for spam prevention */}
        <div className="hidden">
          <label>
            Don't fill this out if you're human: <input name="bot-field" />
          </label>
        </div>
        
        <h2 className="text-3xl font-bold text-white mb-8 text-center uppercase tracking-wider">
          Get In Touch
        </h2>
        
        <div className="space-y-6">
          <div>
            <label 
              htmlFor="name" 
              className="block text-gray-300 text-sm font-medium mb-2"
            >
              Your Name
            </label>
            <input 
              id="name"
              type="text" 
              name="name" 
              required 
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          
          <div>
            <label 
              htmlFor="email"
              className="block text-gray-300 text-sm font-medium mb-2"
            >
              Your Email
            </label>
            <input 
              id="email"
              type="email" 
              name="email" 
              required 
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          
          <div>
            <label 
              htmlFor="message"
              className="block text-gray-300 text-sm font-medium mb-2"
            >
              Message
            </label>
            <textarea 
              id="message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-200 resize-none"
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className={`w-full py-3 px-6 bg-gradient-to-r from-rose-600 to-pink-600 text-white font-bold rounded-lg transition-all duration-200 transform focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2 focus:ring-offset-gray-900 ${
              isSubmitting 
                ? 'opacity-75 cursor-not-allowed' 
                : 'hover:from-rose-700 hover:to-pink-700 hover:scale-[1.02]'
            }`}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </div>
        
        <p className="mt-6 text-center text-gray-400 text-sm">
          We'll get back to you as soon as possible!
        </p>
      </form>
    </div>
  );
}