import React from "react";
import Product from "./Product";
import style from "./products.module.css";
export default function Products() {
  const html = (
    <>
      <svg
        width="20px"
        height="100%"
        color="#3c5e39"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 1.25L7.1563 7.0125L0.800049 7.93125L5.40005 12.4188L4.31255 18.75L10 15.7625L15.6875 18.75L14.6 12.4188L19.2 7.9375L12.8438 7.0125L10 1.25Z"
          fill="currentColor"
        ></path>
      </svg>
      <svg
        width="20px"
        height="100%"
        color="#3c5e39"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 1.25L7.1563 7.0125L0.800049 7.93125L5.40005 12.4188L4.31255 18.75L10 15.7625L15.6875 18.75L14.6 12.4188L19.2 7.9375L12.8438 7.0125L10 1.25Z"
          fill="currentColor"
        ></path>
      </svg>
      <svg
        width="20px"
        height="100%"
        color="#3c5e39"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 1.25L7.1563 7.0125L0.800049 7.93125L5.40005 12.4188L4.31255 18.75L10 15.7625L15.6875 18.75L14.6 12.4188L19.2 7.9375L12.8438 7.0125L10 1.25Z"
          fill="currentColor"
        ></path>
      </svg>
      <svg
        width="20px"
        height="100%"
        color="#3c5e39"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 1.25L7.1563 7.0125L0.800049 7.93125L5.40005 12.4188L4.31255 18.75L10 15.7625L15.6875 18.75L14.6 12.4188L19.2 7.9375L12.8438 7.0125L10 1.25Z"
          fill="currentColor"
        ></path>
      </svg>
      <svg
        width="20px"
        height="100%"
        color="#3c5e39"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 1.25L7.1563 7.0125L0.800049 7.93125L5.40005 12.4188L4.31255 18.75L10 15.7625L15.6875 18.75L14.6 12.4188L19.2 7.9375L12.8438 7.0125L10 1.25Z"
          fill="currentColor"
        ></path>
      </svg>
    </>
  );
  const products = [
    {
      id: 1,
      img: "https://assets-global.website-files.com/65add3db6f2c57641a8233fc/65add6ffdf3158a28b74ce68_656ec87fff48c80ae27ca86a_Velvety%2520-%2520Product%2520(3).png",
      title: "HOLOCENA",
      price: "$ 17.50 USD",
      star: html,
    },
    {
      id: 2,
      img: "https://assets-global.website-files.com/65add3db6f2c57641a8233fc/65add6ffdf3158a28b74ce02_656ec81fc93fb19f594692e9_Velvety%2520-%2520Product%2520(2).png",
      title: "NOTORIUS",
      price: "$ 22.00 USD",
      star: html,
    },
    {
      id: 3,
      img: "https://assets-global.website-files.com/65add3db6f2c57641a8233fc/65add6fedf3158a28b74cdee_656ec7c64de799dba6aea765_Velvety%2520-%2520Product%2520(1).png",
      title: "CHICORI",
      price: "$ 20.00 USD",
      star: html,
    },
    {
      id: 4,
      img: "https://assets-global.website-files.com/65add3db6f2c57641a8233fc/65add6ffdf3158a28b74ce27_65a4a08ae9466c32bd123f85_Velvety%2520-%2520Product%2520(8).png",
      title: "LUSH",
      price: "$ 19.00 USD",
      star: html,
    },
    {
      id: 5,
      img: "https://assets-global.website-files.com/65add3db6f2c57641a8233fc/65add6ffdf3158a28b74ce68_656ec87fff48c80ae27ca86a_Velvety%2520-%2520Product%2520(3).png",
      title: "HOLOCENA",
      price: "$ 17.50 USD",
      star: html,
    },
    {
      id: 6,
      img: "https://assets-global.website-files.com/65add3db6f2c57641a8233fc/65add6ffdf3158a28b74ce02_656ec81fc93fb19f594692e9_Velvety%2520-%2520Product%2520(2).png",
      title: "NOTORIUS",
      price: "$ 22.00 USD",
      star: html,
    },
  ];
  return (
    <div className={style.box}>
      <div className={style.title_container}>
        <p className={style.title}>Our featured products</p>
        <p className={style.text}>
          Facial and skincare, natural and certified organic
        </p>
      </div>
      <div className={style.container}>
        <Product data={products} />
      </div>
    </div>
  );
}
