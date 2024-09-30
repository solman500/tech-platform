import { List } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const ProductItem = ({ product }) => {
  console.log(product);

  return (
    <Link href={`/product-details/${product?.id}`}>
      <div className="p-1 hover:border hover:shadow-md hover:rounded border-teal-500 hover:cursor-pointer">
        <Image
          src={product.attributes.banner.data.attributes.url}
          width={400}
          height={350}
          alt="Product Banner"
          priority
          className="rounded-t-lg h-[170px] object-cover"
        />
        <div className="flex justify-between p-3 items-center rounded-b-lg bg-gray-200">
          <div className="">
            <h2 className="text-[16px] font-medium line-clamp-1">
              {product?.attributes?.title}
            </h2>
            <h2 className="text-[12px] text-gray-400 flex gap-1 items-center">
              {" "}
              <List /> {product?.attributes?.category}
            </h2>
          </div>

          <div className="flex items-center bg-teal-600 rounded p-1">
            <h2 className="text-[14px] font-medium   ">
              {product?.attributes?.price}
            </h2>
            <span className="text-[14px]">$</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductItem;
