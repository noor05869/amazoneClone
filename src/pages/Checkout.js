import React from "react";
import Header from "../components/Header";
import Image from "next/image";
function Checkout() {
  return (
    <div className="bg-gray-100">
      <Header />
      <div className="  lg:flex  max-w-screen-2xl  mx-auto">
        <div className="flex-grow m-5 shadow-sm">
          <Image
            src=" https://links.papareact.com/ikj"
            width={1020}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white">
            <h1 className="text-3xl border-b pb-4">shopiign baskit</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
