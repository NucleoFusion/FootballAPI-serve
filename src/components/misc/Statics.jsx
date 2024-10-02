import React from "react";
import styles from "../Category/Category.module.css";

export default function Statics(props) {
  return (
    <div className={styles.staticDiv}>
      <h1 className="bebas-neue-regular">
        Statics {props.name ? `- ${props.name}` : ""}
      </h1>
      <div>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eligendi
          perferendis at quod fuga dolorem provident consectetur placeat omnis
          officia voluptate corporis dolore libero in quas labore, maxime nobis
          soluta suscipit?
        </p>
      </div>
    </div>
  );
}
