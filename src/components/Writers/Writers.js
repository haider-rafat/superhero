import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Writer from "../Writer/Writer";
import "./Writers.css";
const Writers = () => {
  //declare sate
  const [writers, setWriters] = useState([]);
  const [cart, setCart] = useState([]);

  //   load data
  useEffect(() => {
    fetch("./fakeData.JSON")
      .then((res) => res.json())
      .then((data) => setWriters(data));
  }, []);

  //cart handler
  const addToCart = (writer) => {
    writer.quantity = 1;
    const newCart = [...cart, writer];
    setCart(newCart);
  };
  return (
    <main className="container">
      <div className="all-writer">
        {writers.map((writer) => (
          <Writer key={writer.id} data={writer} addToCart={addToCart} />
        ))}
      </div>
      <div className="selected-list">
        <div className="list">
          <Cart data={cart} />
        </div>
      </div>
    </main>
  );
};

export default Writers;
