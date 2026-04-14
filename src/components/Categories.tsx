import React from 'react';
import { motion } from 'motion/react';

const categories = [
  { name: "Clothing", color: "bg-kiddo-pink/50", icon: "👕" },
  { name: "Toys", color: "bg-kiddo-purple/50", icon: "🧸" },
  { name: "feeding", color: "bg-kiddo-blue/50", icon: "🍼" },
  { name: "Learning", color: "bg-kiddo-yellow/50", icon: "🧩" },
  { name: "Daily Care", color: "bg-kiddo-accent/30", icon: "🧴" }
];

export default function Categories() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-kiddo-dark mb-12">Shop by Category</h2>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {categories.map((cat, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className={`${cat.color} w-24 h-24 md:w-32 md:h-32 rounded-3xl flex items-center justify-center text-4xl md:text-5xl shadow-sm group-hover:shadow-md transition-all duration-300 mb-4`}>
                {cat.icon}
              </div>
              <span className="font-bold text-kiddo-dark group-hover:text-kiddo-accent transition-colors font-heading">{cat.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
