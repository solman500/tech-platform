import Image from "next/image";
import React from "react";

const ProductBanner = ({ product }) => {
  return (
    <div>
      {product?.attributes?.banner?.data?.attributes?.url ? (
        <Image
          src={product?.attributes?.banner?.data?.attributes?.url}
          alt="image banner"
          width={400}
          height={400}
          priority
          className="rounded-lg shadow-md"
        />
      ) : (
        <div className="w-[400px] h-[225px] bg-slate-200 rounded-lg animate-pluse"></div>
      )}
    </div>
  );
};

export default ProductBanner;
