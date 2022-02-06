import React from "react";
import Header from "../components/Header";
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import CheckoutProduct from "../components/CheckoutProduct";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import { useSession } from "next-auth/react";
const stripePromise = loadStripe(process.env.stripe_public_key);

function Checkout() {
  const { data: session } = useSession();
  const items = useSelector(selectItems);
  console.log("first", session);

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    const checkOutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: session.user.email,
    });
    const result = await stripe.redirectToCheckout({
      sessionId: checkOutSession.data.id,
    });
    if (result.error) {
      alert(result.error.message);
    }
  };
  return (
    // <div className="bg-gray-100">
    //   <Header />
    //   <div className="  lg:flex  max-w-screen-2xl  mx-auto">
    //     <div className="flex-grow m-5 shadow-sm">
    //       <Image
    //         src=" https://links.papareact.com/ikj"
    //         width={1020}
    //         height={250}
    //         objectFit="contain"
    //       />
    <div className="flex flex-col p-5 space-y-10 bg-white">
      <CheckoutProduct
        createCheckoutSession={createCheckoutSession}
        items={items}
      />
    </div>
    //     </div>
    //   </div>
  );
}

export default Checkout;
