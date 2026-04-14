import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/various-toys-on-the-floor-e1746024712998.webp" 
          alt="Baby Toys Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Safe, Soft & <br />
            Beautifully Made
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 font-medium leading-relaxed">
            Trusted by parents across India. Every product is crafted with care — clean materials, 
            thoughtful design, and a gentle touch that little ones deserve.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-kiddo-pink text-kiddo-dark hover:bg-kiddo-accent hover:text-white px-10 py-6 text-lg font-bold rounded-full transition-all duration-300 shadow-lg border-none">
              Shop Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
