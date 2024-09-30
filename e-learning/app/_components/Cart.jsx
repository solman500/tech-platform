import React, { useContext } from "react";
import { CartContext } from "../_context/CartContext";
import Link from "next/link";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <div className="h-[300px] w-[250px] bg-slate-200 z-10 rounded-md border shadow-sm absolute mx-10 right-10 top-12 p-5 overflow-auto">
      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {cart.map((item) => (
            <li className="flex items-center gap-4" key={item.id}>
              <img
                src={item.product.attributes.banner.data.attributes.url}
                alt=""
                className="size-16 rounded object-cover"
              />

              <div>
                <h3 className="text-sm line-clamp-1 text-gray-900">
                  {item.product.attributes.title}
                </h3>

                <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                  <div>
                    <dt className="inline">Category:</dt>
                    <dd className="inline">
                      {item.product.attributes.category}
                    </dd>
                  </div>

                  <div>
                    <dt className="inline">Price:</dt>
                    <dd className="inline">{item.product.attributes.price}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}

          {/* <li className="flex items-center gap-4">
            <img
              src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=830&q=80"
              alt=""
              className="size-16 rounded object-cover"
            />

            <div>
              <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dt className="inline">Size:</dt>
                  <dd className="inline">XXS</dd>
                </div>

                <div>
                  <dt className="inline">Color:</dt>
                  <dd className="inline">White</dd>
                </div>
              </dl>
            </div>
          </li> */}
        </ul>

        <div className="space-y-4 text-center">
          <Link 
            href="/cart"
            className="block rounded border border-gray-600 px-5 py-3 text-sm text-gray-600 transition hover:ring-1 hover:ring-gray-400"
          >
            View my cart ({cart?.length})
          </Link>

          <Link
            href="/checkout"
            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
          >
            Checkout
          </Link>

          <a
            href="#"
            className="inline-block text-sm text-gray-500 underline underline-offset-4 transition hover:text-gray-600"
          >
            Continue shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
