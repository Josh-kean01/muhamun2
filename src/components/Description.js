import React from "react";
import img from "../images/download.jfif";
import img1 from "../images/earth.jfif";
import img2 from "../images/bag.jfif";
import img3 from "../images/mail.jfif";
const Description = () => {
  return (
    <article className="c">
      <h1 className="a">
        Hi, I am <span className="b">Hamzat Muhamun</span>👌
      </h1>
      <h2 className="a">I'm a Full Stack Developer</h2>
      <div>
        <Property img={img} text="Fueled by coffee" />
        <Property img={img1} text="Based in Nigeria" />
        <Property img={img2} text="Student at Valuemax" />
        <Property img={img3} text="hamzatmuhamun@gmail.com" />
      </div>
    </article>
  );
};

export default Description;

const Property = ({ img, text }) => {
  return (
    <div>
      <img src={img} alt="" className="my-1 rounded-5" height={40} width={40} />
      <span>{text}</span>
    </div>
  );
};
