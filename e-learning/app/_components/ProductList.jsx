import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ productList }) => {
  console.log(productList);
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4 sm:grid-cols-3">
      {productList?.map((item) => (
        <div key={item.id}>
          <ProductItem product={item} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
