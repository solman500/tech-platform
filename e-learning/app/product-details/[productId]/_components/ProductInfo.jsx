"use client";
import React, { useContext } from "react";
import { AlertOctagon, BadgeCheck, ShoppingCart } from "lucide-react";
import SkeletonProductInfo from "./SkeletonProductInfo";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import CartApis from "../../../_utils/CartApis";
import { CartContext } from "../../../_context/CartContext";


const ProductInfo = ({ product }) => {
  const { user } = useUser();
  const router = useRouter();
  const { cart, setCart } = useContext(CartContext);

  console.log(cart)
  
  const handleAddToCart = () => {
    if (!user) {
      router.push("/sign-in");
    } else {
      const data = {
        data: {
          username: user.fullName,
          email: user.primaryEmailAddress ? user.primaryEmailAddress.emailAddress : "",
          products: [product?.id],
        },
      };


      CartApis.addToCart(data)
        .then((res) => {
          console.log("cart", res.data.data);
          setCart((oldCart) => [
            ...oldCart,
            {
              id: res?.data?.data?.id,
              product,
            },
          ]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  
  return (
    <div>
      {product?.id ? (
        <div>
          <h2 className="text-[20px]">{product?.attributes?.title}</h2>
          <h2 className="text-[15px] text-gray-400">
            {product?.attributes?.category}
          </h2>
          <h2 className="text-[15px] mt-5 ">
            {product?.attributes?.description[0]?.children[0].text}
          </h2>

          <h2 className="text-[11px] text-gray-500 flex gap-2 mt-2 items-center">
            {product?.attributes?.instantDelivery ? (
              <BadgeCheck className="w-5 h-5 text-green-500" />
            ) : (
              <AlertOctagon />
            )}
            Eligible For instant Delivery
          </h2>
          {/* <h2 className="text-[25px] inline px-2  text-white bg-teal-600 rounded "> */}
          <h2 className="text-[25px]  text-teal-600">
            $ {product?.attributes?.price}
          </h2>
          <button
            className="flex items-center gap-2 mt-5 bg-teal-600 hover:bg-teal-800 text-white px-5 py-2 rounded-lg"
            onClick={handleAddToCart}
          >
            <ShoppingCart size={20} />
            Add to Cart{" "}
          </button>
        </div>
      ) : (
        <SkeletonProductInfo />
      )}
    </div>
  );
};

export default ProductInfo;
