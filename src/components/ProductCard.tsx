import React from 'react';
import Button from './Button';
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
  return <div className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${featured ? 'border border-[#9ac1a0]/30' : ''}`}>
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
          {featured && <span className="bg-[#f3f8f4] text-[#9ac1a0] text-xs px-2 py-1 rounded-full">
              Featured
            </span>}
        </div>
        {product.description && <p className="text-gray-600 text-sm mb-4">{product.description}</p>}
        <Button variant="outline" size="sm" fullWidth>
          Add to Cart
        </Button>
      </div>
    </div>;
};
export default ProductCard;