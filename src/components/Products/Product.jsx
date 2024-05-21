import React from "react";
import style from "./product.module.css";
export default function Product(props) {
  return props.data.map((item) => {
    return (
      <div className={style.container} key={item.id}>
        <div className={style.container_img}>
          <img src={item.img} />
        </div>
        <div className={style.title_container}>
          <p className={style.title}>{item.title}</p>
          <div className={style.container_price}>
            <p className={style.price}>{item.price}</p>
            <div className={style.star}>{item.star}</div>
          </div>
        </div>
      </div>
    );
  });
}
