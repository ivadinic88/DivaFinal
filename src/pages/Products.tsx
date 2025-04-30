import React, { useState } from 'react';
import { FilterIcon } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Button from '../components/Button';
const products = [
  {
    id: 1,
    name: "Regenerative Serum",
    category: "Serum",
    price: 1300,
    image: "/regenerativni-serum.jpg"
  },
  {
    id: 2,
    name: "Hyaluronic Serum",
    category: "Serum",
    price: 1400,
    image: "/hijaluron-serum.jpg"
  },
  {
    id: 3,
    name: "Hyaluronic Niacinamide Serum",
    category: "Serum",
    price: 1400,
    image: "/hijaluron-niacinamid.jpg"
  },
  {
    id: 4,
    name: "Retinol Serum",
    category: "Serum",
    price: 1400,
    image: "/retinol.jpg"
  },
  {
    id: 5,
    name: "Moisturizing Serum",
    category: "Serum",
    price: 1300,
    image: "/hidratantni.jpg"
  },
  {
    id: 6,
    name: "Bakuchiol Serum",
    category: "Serum",
    price: 1400,
    image: "/bakuchiol.jpg"
  },
  {
    id: 7,
    name: "Anti-age Serum",
    category: "Serum",
    price: 1300,
    image: "/antiage.jpg"
  },
  {
    id: 8,
    name: "Moisturizing Cream",
    category: "Face Cream",
    price: 1500,
    image: "/hidratantna-krema.jpg"
  },
  {
    id: 9,
    name: "Regenerative Cream",
    category: "Face Cream",
    price: 1500,
    image: "/regenerativna-krema.jpg"
  },
  {
    id: 10,
    name: "Hyaluronic Cream",
    category: "Face Cream",
    price: 1500,
    image: "/hijaluronska-krema.jpg"
  },
  {
    id: 11,
    name: "Bakuchiol Cream",
    category: "Face Cream",
    price: 1500,
    image: "/krema-bakuchiol.jpg"
  },
  {
    id: 12,
    name: "Antiwrinkle",
    category: "Antirid",
    price: 800,
    image: "/antirid.jpg"
  },
  {
    id: 13,
    name: "Rose Soap",
    category: "Soap",
    price: 300,
    image: "/sapun-ruza.jpg"
  },
  {
    id: 14,
    name: "Rainbow Soap",
    category: "Soap",
    price: 300,
    image: "/sapun-duga.jpg"
  },
  {
    id: 15,
    name: "Heart Soap",
    category: "Soap",
    price: 300,
    image: "/sapun-srce.jpg"
  }
];

const categories = ['All', 'Serum', 'Face Cream', 'Soap', 'Antirid'];
const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);
  const filteredProducts = selectedCategory === 'All' ? products : products.filter(product => product.category === selectedCategory);
  return <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-light text-gray-800 mb-4">
          Our <span className="text-[#c19a6b] font-medium">Products</span>
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our range of natural cosmetics designed to enhance your
          natural beauty while taking care of your skin.
        </p>
      </div>
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-medium text-gray-800">
            {selectedCategory === 'All' ? 'All Products' : selectedCategory}
            <span className="text-gray-500 ml-2 text-base font-normal">
              ({filteredProducts.length} items)
            </span>
          </h2>
          <button className="md:hidden flex items-center text-gray-600" onClick={() => setShowFilters(!showFilters)}>
            <FilterIcon size={18} className="mr-1" />
            Filters
          </button>
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {/* Filter Sidebar - Mobile Toggle */}
          <div className={`md:block ${showFilters ? 'block' : 'hidden'} md:w-64 mb-6 md:mb-0`}>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-medium text-gray-800 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => <button key={category} className={`block w-full text-left px-3 py-2 rounded-md ${selectedCategory === category ? 'bg-[#f3f8f4] text-[#9ac1a0] font-medium' : 'text-gray-600 hover:bg-gray-50'}`} onClick={() => setSelectedCategory(category)}>
                    {category}
                  </button>)}
              </div>
            </div>
          </div>
          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
            </div>
            {filteredProducts.length === 0 && <div className="text-center py-12">
                <p className="text-gray-500">
                  No products found in this category.
                </p>
              </div>}
          </div>
        </div>
      </div>
    </div>;
};
export default Products;