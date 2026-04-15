import React from 'react';
import { motion } from 'motion/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const products = [
  {
    id: 1,
    name: "T Shirt",
    age: "Age 1-4 Years",
    price: 499,
    image: "/images/61AOAZ8jbxL._SX679_.jpg",
    bgColor: ""
  },
  {
    id: 2,
    name: "Toys",
    age: "Age 1-4 Years",
    price: 599,
    image: "/images/81CAevJ5rWL._SL1500_.jpg",
    bgColor: ""
  },
  {
    id: 3,
    name: "Learning",
    age: "Age 1-4 Years",
    price: 899,
    image: "/images/51sxzC9kBpL.jpg",
    bgColor: ""
  }
];

export default function FeaturedProducts() {
  return (
    <section className="py-0 bg-white ">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-kiddo-dark mb-12">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              whileHover={{ y: -5 }}
              className="h-full"
            >
              <Card className="overflow-hidden  border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col rounded-[32px]">
                <div className={`${product.bgColor} p-8 aspect-square flex items-center justify-center overflow-hidden`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain mix-blend-multiply"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <CardContent className="p-10 flex-grow bg-kiddo-pink/30 rounded-b-[32px]">
                  <h3 className="text-xl font-bold text-kiddo-dark mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-4">{product.age}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-extrabold text-kiddo-dark">₹ {product.price}</span>
                    <Button variant="outline" className="rounded-full border-none bg-kiddo-blue text-kiddo-dark hover:bg-kiddo-blue-accent hover:text-white transition-all px-6">
                      Add To Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
