import React from 'react';
import { LeafIcon, HeartIcon, DropletIcon } from 'lucide-react';
const AboutUs = () => {
  return <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-light text-gray-800 mb-4">
          About{' '}
          <span className="text-[#c19a6b] font-medium">Diva Kozmetika</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover the story behind our natural cosmetics brand and our
          commitment to beauty, health, and sustainability.
        </p>
      </div>
      {/* Our Story */}
      <section className="mb-16">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <img src="/krema-bakuchiol.jpg" alt="Diva Kozmetika Products" className="rounded-lg shadow-md w-full" />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-light text-gray-800 mb-4">
              Our <span className="text-[#c19a6b] font-medium">Story</span>
            </h2>
            <p className="text-gray-600 mb-4">
              Founded with a passion for natural beauty and skincare, Diva
              Kozmetika began as a small family business dedicated to creating
              pure, effective cosmetics using nature's finest ingredients.
            </p>
            <p className="text-gray-600 mb-4">
              Our journey started when our founder, seeking alternatives to
              commercial products filled with synthetic chemicals, began
              formulating her own natural skincare solutions in her kitchen.
            </p>
            <p className="text-gray-600">
              Today, we continue to handcraft our products with the same
              dedication to quality, sustainability, and effectiveness, bringing
              the power of nature to your daily beauty routine.
            </p>
          </div>
        </div>
      </section>
      {/* Our Values */}
      <section className="mb-16 bg-[#f3f8f4] py-12 px-4 rounded-lg">
        <h2 className="text-3xl font-light text-center text-gray-800 mb-10">
          Our <span className="text-[#c19a6b] font-medium">Values</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-[#f9f5f0] rounded-full flex items-center justify-center mx-auto mb-4">
              <LeafIcon size={28} className="text-[#9ac1a0]" />
            </div>
            <h3 className="font-medium text-gray-800 mb-2">
              Natural Ingredients
            </h3>
            <p className="text-gray-600">
              We use only the finest natural ingredients, carefully selected for
              their purity and effectiveness.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-[#f9f5f0] rounded-full flex items-center justify-center mx-auto mb-4">
              <HeartIcon size={28} className="text-[#9ac1a0]" />
            </div>
            <h3 className="font-medium text-gray-800 mb-2">
              Ethical Production
            </h3>
            <p className="text-gray-600">
              All our products are cruelty-free and we ensure fair practices
              throughout our supply chain.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="w-16 h-16 bg-[#f9f5f0] rounded-full flex items-center justify-center mx-auto mb-4">
              <DropletIcon size={28} className="text-[#9ac1a0]" />
            </div>
            <h3 className="font-medium text-gray-800 mb-2">
              Sustainable Packaging
            </h3>
            <p className="text-gray-600">
              We're committed to reducing our environmental impact with
              eco-friendly packaging solutions.
            </p>
          </div>
        </div>
      </section>
      {/* Our Process */}
      <section className="mb-16">
        <h2 className="text-3xl font-light text-center text-gray-800 mb-10">
          Our <span className="text-[#c19a6b] font-medium">Process</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="relative">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center h-full">
              <div className="w-12 h-12 bg-[#c19a6b] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-medium">
                1
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Sourcing</h3>
              <p className="text-gray-600">
                We carefully select the finest natural ingredients from trusted
                suppliers.
              </p>
            </div>
            <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <svg width="40" height="8" viewBox="0 0 40 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.3536 4.35355C39.5488 4.15829 39.5488 3.84171 39.3536 3.64645L36.1716 0.464466C35.9763 0.269204 35.6597 0.269204 35.4645 0.464466C35.2692 0.659728 35.2692 0.976311 35.4645 1.17157L38.2929 4L35.4645 6.82843C35.2692 7.02369 35.2692 7.34027 35.4645 7.53553C35.6597 7.7308 35.9763 7.7308 36.1716 7.53553L39.3536 4.35355ZM0 4.5H39V3.5H0V4.5Z" fill="#D1D5DB" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center h-full">
              <div className="w-12 h-12 bg-[#c19a6b] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-medium">
                2
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Formulation</h3>
              <p className="text-gray-600">
                Our expert formulators create effective, balanced products for
                all skin types.
              </p>
            </div>
            <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <svg width="40" height="8" viewBox="0 0 40 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.3536 4.35355C39.5488 4.15829 39.5488 3.84171 39.3536 3.64645L36.1716 0.464466C35.9763 0.269204 35.6597 0.269204 35.4645 0.464466C35.2692 0.659728 35.2692 0.976311 35.4645 1.17157L38.2929 4L35.4645 6.82843C35.2692 7.02369 35.2692 7.34027 35.4645 7.53553C35.6597 7.7308 35.9763 7.7308 36.1716 7.53553L39.3536 4.35355ZM0 4.5H39V3.5H0V4.5Z" fill="#D1D5DB" />
              </svg>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white p-6 rounded-lg shadow-sm text-center h-full">
              <div className="w-12 h-12 bg-[#c19a6b] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-medium">
                3
              </div>
              <h3 className="font-medium text-gray-800 mb-2">Production</h3>
              <p className="text-gray-600">
                Small-batch production ensures freshness and attention to
                detail.
              </p>
            </div>
            <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
              <svg width="40" height="8" viewBox="0 0 40 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M39.3536 4.35355C39.5488 4.15829 39.5488 3.84171 39.3536 3.64645L36.1716 0.464466C35.9763 0.269204 35.6597 0.269204 35.4645 0.464466C35.2692 0.659728 35.2692 0.976311 35.4645 1.17157L38.2929 4L35.4645 6.82843C35.2692 7.02369 35.2692 7.34027 35.4645 7.53553C35.6597 7.7308 35.9763 7.7308 36.1716 7.53553L39.3536 4.35355ZM0 4.5H39V3.5H0V4.5Z" fill="#D1D5DB" />
              </svg>
            </div>
          </div>
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-center h-full">
              <div className="w-12 h-12 bg-[#c19a6b] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-medium">
                4
              </div>
              <h3 className="font-medium text-gray-800 mb-2">
                Quality Control
              </h3>
              <p className="text-gray-600">
                Rigorous testing ensures every product meets our high standards.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section>
        <h2 className="text-3xl font-light text-center text-gray-800 mb-10">
          Meet Our <span className="text-[#c19a6b] font-medium">Team</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-square bg-gray-100">
              <img src="/ana.jpg" alt="Team Member" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-medium text-gray-800">Ana Dinić</h3>
              <p className="text-[#9ac1a0] mb-2">Community Manager</p>
              <p className="text-gray-600 text-sm">
              Ana shares our brand with the world — connecting with our customers and spreading the word about our products with genuine passion.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-square bg-gray-100">
              <img src="/mama.jpg" alt="Team Member" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-medium text-gray-800">Violeta Dinić</h3>
              <p className="text-[#9ac1a0] mb-2">Founder & Product Creator</p>
              <p className="text-gray-600 text-sm">
              Violeta handcrafts every product with care, from developing recipes to mixing, pouring, and packaging. She brings each formula to life.
              </p>
            </div>
          </div>
          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-square bg-gray-100">
              <img src="/iva.jpg" alt="Team Member" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 text-center">
              <h3 className="font-medium text-gray-800">Iva Dinić</h3>
              <p className="text-[#9ac1a0] mb-2">Designer & Website Creator</p>
              <p className="text-gray-600 text-sm">
              Iva designs everything you see online, from the look of our website to how each product is presented. She brings creativity and vision to our digital space.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default AboutUs;