import React, { useState, useEffect } from "react";
import products from "../products.json";
import "./style.css";

export default function ProductCard() {
  const [productId, setProductId] = useState(1);

  function setUpdater() {
    setInterval(() => {
      idUpdater();
    }, 10000);
  }
  function idUpdater() {
    const id = Math.floor(Math.random() * 3) ;
    setProductId(id);
  }
  useEffect(() => {
    idUpdater();
    setUpdater();
  }, []);
  function checkFreeShipping(price){
    if(price>=300){
      return 'FRETE GRÁTIS'
    }
  }
  return (
    <>
    <h2>Olha o que vem por aí!</h2>
    <section className="product-list">
      {products.map((prod, index) => {
        if (index >= productId && index < productId + 4) {
          return (
            <div className="product-card">
              <img
                className="product-image"
                src={products[index].image}
                alt={products[index].description}
                title={products[index].description}
              />
              <p className="product-name">{products[index].name}</p>
              <div className="original-price">de Cr$ <span>{products[index].price.toFixed(2)}</span></div>
              <div className="price-box">
                <span className="product-price">
                  Cr$ {(products[index].price*(1-products[index].desconto/100)).toFixed(2)}
                </span>
                <span className="discount-tag">
                  {products[index].desconto}% OFF
                </span>
              </div>
              <div className="extra-info">
                <span>à vista</span>
                <span>{checkFreeShipping(products[index].price)}</span>
              </div>
            </div>
          );
        }
      })}
    </section>
    </>
  );
}
