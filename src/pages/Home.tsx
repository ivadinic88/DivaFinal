import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from 'lucide-react';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';
const featuredProducts = [{
  id: 1,
  name: 'Hyaluronic Cream',
  category: 'Face Cream',
  price: 1500,
  image: "/hijaluronska-krema.jpg",
  featured: true,
  description: 'Deeply hydrating cream that plumps and nourishes the skin, leaving it soft and smooth.'
}, {
  id: 2,
  name: 'Retinol Serum',
  category: 'Serum',
  price: 1400,
  image: "/retinol.jpg",
  featured: true,
  description: 'Powerful serum that reduces fine lines and improves skin texture for a youthful, radiant glow.'
}, {
  id: 3,
  name: 'Bakuchiol Cream',
  category: 'Face Cream',
  price: 1500,
  image: "/krema-bakuchiol.jpg",
  featured: true,
  description: 'Gentle, plant-based alternative to retinol that firms and smooths the skin without irritation.'
}];
const Home = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-[#f3f8f4] py-10 md:py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <span className="text-[#9ac1a0] font-medium">
              Natural Beauty Products
            </span>
            <h1 className="text-4xl md:text-5xl font-light text-gray-800 mt-2 mb-4">
              <span className="font-medium text-[#c19a6b]">Naturally</span>{' '}
              Beautiful Skin
            </h1>
            <p className="text-gray-600 mb-8 max-w-md">
              Discover our collection of natural cosmetics made with pure
              ingredients that nourish and protect your skin.
            </p>
            <div className="flex space-x-4">
              <Link to="/products">
              <Button size="lg">Shop Now</Button>
              </Link>
              <Link to="/about">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </Link>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <img src="/hidratantna-krema.jpg" alt="Diva Kozmetika Natural Serum" className="rounded-lg shadow-lg max-w-sm w-full object-cover" />
          </div>
        </div>
      </section>
      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-light text-gray-800">
              Featured{' '}
              <span className="text-[#c19a6b] font-medium">Products</span>
            </h2>
            <Link to="/products" className="flex items-center text-[#c19a6b] hover:underline">
              View All <ArrowRightIcon size={16} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => <ProductCard key={product.id} product={product} featured />)}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="bg-[#f9f5f0] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-light text-center text-gray-800 mb-12">
            Why Choose{' '}
            <span className="text-[#c19a6b] font-medium">Diva Kozmetika</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-[#f3f8f4] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9ac1a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="font-medium text-gray-800 mb-2">100% Natural</h3>
              <p className="text-gray-600">
                All our products are made with natural ingredients, free from
                harmful chemicals.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-[#f3f8f4] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9ac1a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Cruelty-Free</h3>
              <p className="text-gray-600">
                We never test on animals and only use ethically sourced
                ingredients.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center">
              <div className="w-16 h-16 bg-[#f3f8f4] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#9ac1a0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Sustainable</h3>
              <p className="text-gray-600">
                Eco-friendly packaging and sustainable practices for a better
                planet.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-[#f3f8f4] rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-light text-gray-800 mb-4">
              Join Our{' '}
              <span className="text-[#c19a6b] font-medium">Newsletter</span>
            </h2>
            <p className="text-gray-600 mb-6 max-w-md mx-auto">
              Subscribe to receive updates, exclusive offers, and beauty tips
              straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input type="email" placeholder="Your email address" className="flex-grow px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#9ac1a0] focus:border-transparent" required />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;
