 "use client";
import React, { useEffect, useState } from "react";
import BreadCrumb from "../../../app/_components/BreadCrumb";
import ProductBanner from "./_components/ProductBanner";
import ProductInfo from "./_components/ProductInfo";
import ProductList from "../../_components/ProductList";
import { usePathname } from "next/navigation";
import ProductApi from '../../_utils/ProductApi';

export default function ProductDetails({ params }) {

  const path=usePathname();
  console.log(path)
  const [productDetails, setProductDetails] = useState({});
  const [productList,setProductsList]=useState([])
  useEffect(() => {
    getProductById_();
  }, [params?.productId]);



  const getProductById_ = () => {
    ProductApi.getProductById(params?.productId).then((res) => {
      console.log(res.data.data);
      setProductDetails(res.data.data);
      getProductByCategory_(res.data.data);
    });
  };



  const getProductByCategory_ = (product) => {
    ProductApi.getProductByCategory(product?.attributes.category).then(
      (res) => {
        console.log(res?.data?.data);
        setProductsList(res?.data?.data)
      }
    );
  };

  return (
    <div className="px-10 md:px-28 py-8">
      <BreadCrumb path={path} />
      <div className="grid grid-cols-1 gap-5 mt-10 justify-around sm:gap-0 sm:grid-cols-2">
        <ProductBanner product={productDetails} />
        <ProductInfo product={productDetails} />
      </div>
      <div>
        <h1 className="text-2xl font-bold mt-10 mb-2">Related Products</h1>
        <ProductList productList={productList} />
      </div>

    </div>
  );
}
