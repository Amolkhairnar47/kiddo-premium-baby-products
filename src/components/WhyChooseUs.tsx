import React from 'react';
import { ShieldCheck, Leaf, Heart, LayoutGrid } from 'lucide-react';

const reasons = [
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "100% BIS Certified",
    desc: "Every product is tested and certified safe for babies and toddlers.",
    color: "bg-white border border-kiddo-purple",
    iconColor: "bg-kiddo-pink text-kiddo-dark"
  },
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Non-Toxic Eco Friendly",
    desc: "Made from natural, baby-safe materials. Good for your child & the planet.",
    color: "bg-white border border-kiddo-blue",
    iconColor: "bg-kiddo-blue text-kiddo-dark"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "50,000+ Happy Parents",
    desc: "Trusted by families across India — online and in our retail stores.",
    color: "bg-white border border-kiddo-purple",
    iconColor: "bg-kiddo-purple text-kiddo-dark"
  },
  {
    icon: <LayoutGrid className="w-8 h-8" />,
    title: "1000+ Products Available",
    desc: "Toys, clothing, feeding, learning & daily care — all in one place.",
    color: "bg-white border border-kiddo-green",
    iconColor: "bg-kiddo-green text-kiddo-dark"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-0 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-kiddo-dark mb-16">Why Choose Us ?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, i) => (
            <div 
              key={i} 
              className={`${reason.color} p-8 rounded-[40px] flex flex-col items-center text-center  transition-transform hover:scale-105 duration-300`}
            >
              <div className={`${reason.iconColor} p-4 rounded-2xl mb-6`}>
                {reason.icon}
              </div>
              <h3 className="text-xl font-bold text-kiddo-dark mb-4">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
