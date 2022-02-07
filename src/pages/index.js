import Head from "next/head";
import React, { useRef, useState } from "react";

import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  console.log("producvt", products);
  const [searchTerm, setsearchTerm] = useState("");
  const [searchResult, setsearchResult] = useState([]);
  const inputref = useRef();

  function handleChange() {
    console.log(inputref.current.value);
    setsearchTerm(inputref.current.value);
    if (searchTerm !== "") {
      const sreachResults = products.filter((title) => {
        // data.title.toLowerCase().includes(searchTerm.toLowerCase());
        return Object.values(title)
          .join("")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setsearchResult(sreachResults);
      console.log("result", searchResult);
    } else {
      setsearchResult(products);
    }
  }
  return (
    <div className="bg-gray-100">
      <Head>
        <title>Amazon 2.0</title>
      </Head>
      {/* <header></header> */}

      <Header inputref={inputref} handleChange={handleChange} />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        {/* productfeed */}
        <ProductFeed
          products={searchTerm.length < 1 ? products : searchResult}
        />
      </main>
    </div>
  );
}
export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );
  return {
    props: { products },
  };
}
