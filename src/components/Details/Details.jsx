import React from "react";
import style from "./details.module.css";

export default function Details(props) {
  return props.data.map((item) => {
    return (
      <div className={style.container} key={item.id}>
        <div className={style.logo}>{item.logo}</div>
        <div className={style.title_box}>
          <p className={style.title}>{item.title}</p>
          <p className={style.text}>{item.text}</p>
        </div>
      </div>
    );
  });
}
