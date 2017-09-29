import React from "react";
import "./navi.scss";

const Navi = () => {
  const onMouseOver = el => {
    console.log(el);
    console.log(el.target);
    console.log("test");
  };
  return (
    <nav className="navi">
      <ul>
        <a href="./">
          <li onMouseOver={onMouseOver}>Home</li>
        </a>
        <a href="./">
          <li onMouseOver={onMouseOver}>About Me</li>
        </a>
        <a href="">
          <li onMouseOver={onMouseOver}>Blog</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navi;
