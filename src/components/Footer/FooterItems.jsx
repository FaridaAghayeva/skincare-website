import React from "react";
import style from "./items.module.css";
export default function FooterItems(props) {
  return props.data.map((item) => {
    return (
      <div key={item.id} className={style.container}>
        <p className={style.title}>{item.title}</p>
        <p>{item.item1}</p>
        <p>{item.item2}</p>
        <p>{item.item3}</p>
        <p>{item.item4}</p>
      </div>
    );
  });
}
