import React from "react";
import s from "./MainPost.module.css";

const MainPost = (props) => {
  return (
      <div className={s.mainPost}>
        <article>
          <img src={props.image} alt="#"/>
          <div className = {s.text}>
          <h2>{props.title}</h2>
          <p>
                {props.text}
          </p>
          </div>
        </article>
      </div>
  );
};

export default MainPost;
