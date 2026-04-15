import React, { useState } from 'react';
import { ShoppingCart, User, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="relative w-40 h-40">
              <img 
                src="/images/logo.png" 
                alt="Kiddo Logo" 
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="text-2xl font-extrabold text-kiddo-dark tracking-tight font-heading">Kiddo</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-semibold text-kiddo-dark hover:text-kiddo-accent transition-colors font-heading">Home</a>
            <a href="#about" className="text-sm font-semibold text-kiddo-dark hover:text-kiddo-accent transition-colors font-heading">About Us</a>
            <a href="#shop" className="text-sm font-semibold text-kiddo-dark hover:text-kiddo-accent transition-colors font-heading">Shop</a>
            <a href="#contact" className="text-sm font-semibold text-kiddo-dark hover:text-kiddo-accent transition-colors font-heading">Contact Us</a>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button 
              className="md:hidden p-2 text-kiddo-dark hover:bg-kiddo-pink/20 rounded-full transition-all"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 flex flex-col gap-6">
          <a href="#" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-kiddo-dark hover:text-kiddo-accent transition-colors font-heading">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-kiddo-dark hover:text-kiddo-accent transition-colors font-heading">About Us</a>
          <a href="#shop" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-kiddo-dark hover:text-kiddo-accent transition-colors font-heading">Shop</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-kiddo-dark hover:text-kiddo-accent transition-colors font-heading">Contact Us</a>
        </div>
      )}
    </nav>
  );
}
// import React from 'react';
// import { ShoppingCart, User, Menu } from 'lucide-react';

// export default function Navbar() {
//   return (
//     <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <div className="flex-shrink-0 flex items-center gap-2">
//             <div className="relative w-40 h-40">
//               <img 
//                 src="/images/logo.png" 
//                 alt="Kiddo Logo" 
//                 className="w-full h-full object-contain"
//                 referrerPolicy="no-referrer"
//               />
//             </div>
//             <span className="text-2xl font-extrabold text-kiddo-dark tracking-tight font-heading">Kiddo</span>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center gap-8">
//             <a href="#" className="text-sm font-semibold text-kiddo-dark hover:text-kiddo-accent transition-colors font-heading">Home</a>
//             <a href="#about" className="text-sm font-semibold text-kiddo-dark hover:text-kiddo-accent transition-colors font-heading">About Us</a>
//             <a href="#shop" className="text-sm font-semibold text-kiddo-dark hover:text-kiddo-accent transition-colors font-heading">Shop</a>
//             <a href="#contact" className="text-sm font-semibold text-kiddo-dark hover:text-kiddo-accent transition-colors font-heading">Contact Us</a>
//           </div>

//           {/* Icons */}
//           <div className="flex items-center gap-4">
//             <button className="p-2 text-kiddo-dark hover:bg-kiddo-pink/20 rounded-full transition-all">
//               <User size={20} />
//             </button>
//             <button className="p-2 text-kiddo-dark hover:bg-kiddo-pink/20 rounded-full transition-all relative">
//               <ShoppingCart size={20} />
//               <span className="absolute top-0 right-0 bg-kiddo-accent text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">2</span>
//             </button>
//             <button className="md:hidden p-2 text-kiddo-dark hover:bg-kiddo-pink/20 rounded-full transition-all">
//               <Menu size={20} />
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }
