import React from "react";
import ProductCard from "./ProductCard";
import { data } from "../context/data";

const Products = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <p className="mb-6 text-lg font-semibold tracking-wider border-l-4 pl-2 w-max border-blue-400">
        Products
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((card) => (
          <ProductCard key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
};

export default Products;
