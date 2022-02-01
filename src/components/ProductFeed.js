import React from "react";
import Product from "./Product";

function ProductFeed({ products }) {
  return (
    <>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3   ">
        {products &&
          products
            .slice(0, 3)
            .map((p) => (
              <Product
                key={p.id}
                price={p.price}
                id={p.id}
                title={p.title}
                description={p.description}
                category={p.category}
                image={p.image}
              />
            ))}
        <img
          className="md:col-span-full"
          src="https://links.papareact.com/dyz"
        />
        {/* <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3   ">
        {products &&
          products
            .slice(4, 5)
            .map((p) => (
              <Product
                key={p.id}
                price={p.price}
                id={p.id}
                title={p.title}
                description={p.description}
                category={p.category}
                image={p.image}
              />
            ))}
      </div> */}
      </div>

      {/* <img className="md:col-span-full" src="https://links.papareact.com/dyz" /> */}

      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3   ">
        {products &&
          products
            .slice(5, products.lenght)
            .map((p) => (
              <Product
                key={p.id}
                price={p.price}
                id={p.id}
                title={p.title}
                description={p.description}
                category={p.category}
                image={p.image}
              />
            ))}
      </div>
    </>
  );
}

export default ProductFeed;
