import React from 'react';
import { Star } from 'lucide-react';

const reviews = [
  {
    name: "Priya Sharma",
    location: "Mumbai · Verified Buyer",
    text: "Kiddo products are amazing! My daughter loves the toys and the quality is just outstanding. 100% recommended!",
    avatar: "/images/icons8-businesswoman-94.png"
  },
  {
    name: "Rahul Verma",
    location: "Delhi · Verified Buyer",
    text: "Kiddo products are amazing! My daughter loves the toys and the quality is just outstanding. 100% recommended!",
    avatar: "/images/icons8-man-94.png"
  }
];

export default function Reviews() {
  return (
    <section className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-kiddo-dark mb-16">Parent Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-kiddo-green/30 p-10 rounded-[40px] relative overflow-hidden">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="text-lg font-medium text-kiddo-dark mb-8 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex items-center gap-4">
                <img 
                  src={review.avatar} 
                  alt={review.name} 
                  className="w-12 h-12 rounded-full bg-white border-2 border-white shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-kiddo-dark">{review.name}</h4>
                  <p className="text-xs text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
