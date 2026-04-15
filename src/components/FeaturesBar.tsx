import React from 'react';
import { ShieldCheck, Truck, Store } from 'lucide-react';

const features = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-kiddo-accent" />,
    title: "100% Safe",
    desc: "Certified products"
  },
  {
    icon: <Truck className="w-8 h-8 text-kiddo-accent" />,
    title: "Fast Delivery",
    desc: "Pan-India shipping"
  },
  {
    icon: <Store className="w-8 h-8 text-kiddo-accent" />,
    title: "Stores",
    desc: "Physical Retail Stores"
  }
];

export default function FeaturesBar() {
  return (
    <div className="max-w-4xl mx-auto -mt-16 relative z-20 px-4">
      <div className="bg-[#FAE8D0] rounded-3xl shadow-xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-kiddo-dark/10 p-8">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center text-center p-4">
            <div className="mb-3">{f.icon}</div>
            <h3 className="font-bold text-lg text-kiddo-dark">{f.title}</h3>
            <p className="text-sm text-kiddo-dark/60">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
