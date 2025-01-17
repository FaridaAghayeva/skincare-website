import React from "react";
import style from "./header.module.css";
export default function Header() {
  return (
    <div className={style.background}>
      <img
        className={style.logo}
        src="https://assets-global.website-files.com/65adcca2df53eafcdc411e4e/65add79ed2c6ecb99e821d09_Velvety%20-%20Logo%20Light.svg"
      />
      <div className={style.right}>
        <div className={style.li_items}>
          <div className={style.li_left}>
            <span>PAGES</span>
            <span>SHOP</span>
            <span>ABOUT</span>
          </div>
          <div className={style.li_right}>
            <span>LOGIN</span>
            <span>CART(0)</span>
          </div>
        </div>
        <div className={style.header_main}>
          <div className={style.product_img}>
            <img src="https://assets-global.website-files.com/653bd9b7224c1bc5ea50bce6/656ea1ccf15d48f82322e416_Velvety%20-%20Product%20(3).png" />
          </div>
          <div className={style.title_container}>
            <div className={style.title}>
              <p>Let nature take care of your body and soul</p>
            </div>
            <div className={style.button}>
              <p>Shop now</p>
              <svg
                width="90px"
                height="20"
                viewBox="0 0 31 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30.5002 10.0001L30.5527 9.26074L30.5532 9.25772L30.553 9.25768L30.548 9.25694L30.5235 9.25316C30.5007 9.24958 30.4654 9.24385 30.4185 9.23574C30.3247 9.2195 30.1847 9.19373 30.0061 9.15653C29.6486 9.08206 29.1386 8.96213 28.5374 8.78177C27.3297 8.41945 25.7802 7.82098 24.3629 6.8761C23.0131 5.97624 21.9592 4.47737 21.2303 3.141C20.8708 2.48197 20.6008 1.88201 20.4211 1.44775C20.3314 1.23097 20.2646 1.05643 20.2208 0.937624C20.1988 0.878244 20.1827 0.832863 20.1723 0.803172L20.161 0.770641L20.1586 0.763617L20.1583 0.762695C20.1583 0.762823 20.1584 0.762968 19.4469 1.00014C18.7354 1.23731 18.7354 1.23749 18.7355 1.23769L18.7357 1.23817L18.7361 1.23943L18.7373 1.2432L18.7415 1.25558L18.7566 1.29916C18.7697 1.33636 18.7887 1.38961 18.8136 1.45719C18.8635 1.59228 18.9373 1.78493 19.0351 2.02128C19.2304 2.49326 19.5229 3.14331 19.9135 3.85928C20.6845 5.27291 21.8806 7.02404 23.5309 8.12418C24.1954 8.5672 24.8807 8.93908 25.5479 9.25014H0.446877V10.7501H25.5479C24.8807 11.0612 24.1954 11.4331 23.5309 11.8761C21.8806 12.9762 20.6845 14.7274 19.9135 16.141C19.5229 16.857 19.2304 17.507 19.0351 17.979C18.9373 18.2153 18.8635 18.408 18.8136 18.5431C18.7887 18.6107 18.7697 18.6639 18.7566 18.7011L18.7415 18.7447L18.7373 18.7571L18.7361 18.7608L18.7357 18.7621L18.7355 18.7626C18.7354 18.7628 18.7354 18.763 19.4469 19.0001C20.1584 19.2373 20.1583 19.2375 20.1583 19.2376L20.1586 19.2367L20.161 19.2296L20.1723 19.1971C20.1827 19.1674 20.1988 19.122 20.2208 19.0627C20.2646 18.9438 20.3314 18.7693 20.4211 18.5525C20.6008 18.1183 20.8708 17.5183 21.2303 16.8593C21.9592 15.5229 23.0131 14.024 24.3629 13.1242C25.7802 12.1793 27.3297 11.5808 28.5374 11.2185C29.1386 11.0381 29.6486 10.9182 30.0061 10.8438C30.1847 10.8065 30.3247 10.7808 30.4185 10.7645C30.4654 10.7564 30.5007 10.7507 30.5235 10.7471L30.548 10.7433L30.553 10.7426L30.5532 10.7426L30.5527 10.7395L30.5002 10.0001Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
