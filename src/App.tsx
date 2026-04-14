import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesBar from './components/FeaturesBar';
import Categories from './components/Categories';
import FeaturedProducts from './components/FeaturedProducts';
import AboutUs from './components/AboutUs';
import WhyChooseUs from './components/WhyChooseUs';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-kiddo-pink selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <FeaturesBar />
        <Categories />
        <FeaturedProducts />
        <AboutUs />
        <WhyChooseUs />
        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
