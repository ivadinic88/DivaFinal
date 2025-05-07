import React from 'react';
import { Link } from 'react-router-dom';
export interface ProductProps {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  featured?: boolean;
  description?: string;
}
interface ProductCardProps {
  product: ProductProps;
  featured?: boolean;
}
const ProductCard = ({
  product,
  featured = false
}: ProductCardProps) => {
  return (
    <div className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${featured ? 'border border-[#9ac1a0]/30' : ''}`}>
      <div className="aspect-square overflow-hidden bg-[#f9f9f9]">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4">
        <span className="text-xs text-[#9ac1a0] font-medium uppercase tracking-wider">
          {product.category}
        </span>
        <h3 className="font-medium text-gray-800 mt-1">{product.name}</h3>
        <div className="mt-2 mb-3 flex justify-between items-center">
          <span className="font-medium text-[#c19a6b]">
            RSD {product.price.toFixed(2)}
          </span>
          {featured && (
            <span className="bg-[#f3f8f4] text-[#9ac1a0] text-xs px-2 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>
        {product.description && (
          <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        )}
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#9ac1a0] bg-transparent text-[#c19a6b] border border-[#c19a6b] hover:bg-[#f9f5f0] px-3 py-1.5 text-sm w-full text-center"
        >
          Contact to Order
        </Link>
      </div>
    </div>
  );
};
export default ProductCard;
