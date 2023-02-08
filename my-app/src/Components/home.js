import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import Navbar from "./nav";
const Home = () => {
  return (
    <>
      <div className="right-div">
        <h1>Aneesh Aggarwal</h1>
        <p>
          I'm a passionate&nbsp;
          <span class="highlight">front-end developer</span>
        </p>

        <Navbar />

        <div className="icons">
          <a href="https://www.instagram.com/aneesh_.aggarwal/">
            <FaInstagram
              className="ho"
              size={22}
              style={{
                border: "1px solid black",
                padding: "10px",
                borderRadius: "50%",
                color: "white",
              }}
            />
          </a>
          <a href="https://www.linkedin.com/in/aneeshaggarwal/">
            <FaLinkedin
              className="ho"
              size={22}
              style={{
                border: "1px solid black",
                padding: "10px",
                borderRadius: "50%",
                color: "white",
              }}
            />
          </a>
          <a href="https://www.linkedin.com/in/aneeshaggarwal/">
            <AiOutlineMail
              className="ho"
              size={22}
              style={{
                border: "1px solid black",
                padding: "10px",
                borderRadius: "50%",
                color: "white",
              }}
            />
          </a>
          <a href="https://github.com/007aneesh">
            <AiFillGithub
              className="ho"
              size={22}
              style={{
                border: "1px solid black",
                padding: "10px",
                borderRadius: "50%",
                color: "white",
              }}
            />
          </a>
        </div>
      </div>
      <footer>
        Designed by <span style={{ color: "#33cc33" }}>Aneesh Aggarwal</span>
      </footer>
    </>
  );
};
export default Home;
