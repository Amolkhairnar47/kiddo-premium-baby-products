import React from 'react';

export default function AboutUs() {
  return (
    <section id="about" className="py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="bg-kiddo-yellow/50 absolute -inset-4 rounded-3xl -rotate-2 z-0"></div>
            <div className="relative z-10 bg-white p-8 rounded-3xl shadow-lg">
              <img 
                src="/images/logo.png" 
                alt="Kiddo Handprints" 
                className="w-full h-auto rounded-2xl"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

          {/* Text Side */}
          <div>
            <h2 className="text-4xl font-extrabold text-kiddo-dark mb-8">About Us</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="font-medium text-lg font-heading">
                Welcome to Kiddo — Where Little Moments Become Big Memories.
              </p>
              <p>
                Founded with one simple belief — that every child deserves safe, quality products — 
                Kiddo is India's trusted destination for baby and kids essentials. We offer a carefully 
                selected range of toys, clothing, feeding accessories, learning products, and daily-use 
                items for children aged 1 to 4 years.
              </p>
              <p>
                Our stores across India bring the Kiddo experience to your neighbourhood, while our 
                website lets you shop from the comfort of your home — with fast delivery right to your door.
              </p>
              <p>
                At Kiddo, we don't just sell products. We support parents, celebrate childhood, and 
                make every little moment count.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
