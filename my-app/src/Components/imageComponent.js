import React from "react";
import image from "../images/pic1.jpg";
import "./image.css";
function MyComponent() {
  return (
    <img
      src={image}
      alt="Pic"
      // style={{
      //   borderRadius: "50%",
      //   width: "450px",
      //   height: "300px",
      //   margin: "auto",
      // }}
    />
  );
}

export default MyComponent;
