import React from "react";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
function Header() {
  const router = useRouter();
  const { data: session } = useSession();
  const items = useSelector(selectItems);

  // console.log(session.user.name);
  return (
    <div>
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className=" mt-2 flex items-center sm:flex-grow-0 ">
          <Image
            onClick={() => router.push("/")}
            objectFit="contain"
            src="https://links.papareact.com/f90"
            height={40}
            width={150}
            className="cursor-pointer"
          />
        </div>
        <div className=" hidden sm:flex items-center h-10 rounded-md cursor-pointer flex-grow bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* <right> */}
        <div className="flex items-center text-xs space-x-6 mx-6 whitespace-nowrap text-white ">
          <div onClick={!session ? signIn : signOut} className=" link">
            <p className="  text-white">
              {session ? `Hello ${session.user.name}` : "Sign In"}
            </p>
            <p className="font-extrabold md:text-sm link">
              acount list &othher{" "}
            </p>
          </div>
          <div className=" link">
            <p>returns </p>
            <p className="font-extrabold md:text-sm ">orders </p>
          </div>
          <div
            onClick={() => router.push("/Checkout")}
            className=" relative flex items-center link"
          >
            <span className="absolute top-0 right-10  md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full   text-black font-bold        ">
              {" "}
              {items.length}
            </span>
            <ShoppingCartIcon className=" hidden md:inline h-10" />
            <p className="font-extrabold md:text-sm "> baskit</p>
          </div>
        </div>
      </div>
      <div className=" flex space-x-3 p-4 pl-6  items-center bg-amazon_blue-light text-white text-sm">
        <p className="link flex items-center ">
          <MenuIcon className="h-6 mr-1" />
          all
        </p>
        <p className="link "> prime vedio</p>
        <p className="link "> amazone buisness </p>

        <p className="link "> todays deal</p>

        <p className="link hidden lg:inline-flex "> electronics</p>
        <p className="link hidden lg:inline-flex "> food and grocery </p>

        <p className="link hidden lg:inline-flex ">prime</p>

        <p className="link hidden lg:inline-flex "> buy agian</p>

        <p className="link hidden lg:inline-flex "> shopper toolkit</p>

        <p className="link hidden lg:inline-flex ">
          {" "}
          Health and professional care
        </p>
      </div>
    </div>
  );
}

export default Header;
