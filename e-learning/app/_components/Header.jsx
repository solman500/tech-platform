'use client'
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import svgi from "../../public/logo.svg";
import { UserButton, useUser } from "@clerk/nextjs";
import { ShoppingCart } from "lucide-react";
import { CartContext } from "../_context/CartContext";
import CartApis from "../_utils/CartApis";
import Cart from "./Cart";

const Header = () => {
  const { cart, setCart } = useContext(CartContext);
  const [openCart,setOpenCart]=useState(false)
  const { user } = useUser();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(window.location.href.toString().includes("sign-in"));
  }, []);

  useEffect(() => {
    user && getCartItems(user);
  }, [user]);

  const getCartItems = (user) => {
    CartApis.getUserCartItems(user.primaryEmailAddress.emailAddress)
      .then((res) => {
        console.log("cartitem", res?.data?.data);
        res?.data?.data.forEach((citem) => {
          setCart((oldCart) => [
            ...oldCart,
            {
              id: citem.id,
              product: citem?.attributes?.products?.data[0],
            },
          ]);
        });
      })
      .catch((error) => {
        console.error("Error fetching cart items:", error);
      });
  };

  return (
    !isLoggedIn && (
      <header className="bg-white shadow-md">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 ">
          <div className="flex h-16 items-center justify-between">
            <div className="md:flex md:items-center md:gap-12">
              <Image src={svgi} property="" alt="svg" />
            </div>

            <div className="hidden md:block">
              <nav aria-label="Global">
                <ul className="flex items-center gap-6 text-sm ">
                  <li>
                    <a
                      className="text-gray-500 transition hover:text-teal-600 font-bold"
                      href="#"
                    >
                      {" "}
                      Home{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition  hover:text-teal-600"
                      href="#"
                    >
                      {" "}
                      About Us{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition  hover:text-teal-600"
                      href="#"
                    >
                      {" "}
                      Explore{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition  hover:text-teal-600"
                      href="#"
                    >
                      {" "}
                      Projects{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition  hover:text-teal-600"
                      href="#"
                    >
                      {" "}
                      About Us{" "}
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-gray-500 transition  hover:text-teal-600"
                      href="#"
                    >
                      {" "}
                      Contact Us{" "}
                    </a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="flex items-center gap-4">
              {!user ? (
                <div className="sm:flex sm:gap-4">
                  <a
                    className="rounded-md bg-teal-600 px-5 py-2.5 text-sm font-medium text-white shadow transation hover:bg-teal-500 dark:hover:bg-teal-500"
                    href="/sign-in"
                  >
                    Login
                  </a>

                  <div className="hidden sm:flex">
                    <a
                      className="rounded-md bg-gray-100 px-5 py-2.5 text-sm font-medium text-teal-600 transation hover:bg-gray-300  "
                      href="#"
                    >
                      Register
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-5">
                  <h2 className="flex gap-1 cursor-pointer">

                    <ShoppingCart onClick={()=>setOpenCart(!openCart)}/>
                    ({cart?.length})
                  </h2>

                  <UserButton fallbackRedirectUrl="/" />
                 {openCart && <Cart/>} 
                </div>
              )}

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  );
};

export default Header;
