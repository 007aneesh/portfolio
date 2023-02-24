import React from "react";
import image from "../images/pic2.jpg";
import { AiOutlineRight } from "react-icons/ai";
import "./About.css";
import Skills from "./skills";
const About = ({ navbar: Navbar }) => {
  return (
    <>
      <div
        className="background"
        style={{
          backgroundColor: "#040404",
          width: "100vw",
          height: "100vh",
          position: "fixed",
          opacity: "0.94",
        }}
      >
        <Navbar />
        <div
          className="content"
          style={{
            overflow: "auto",
            overflowX: "hidden",
            height: "100%",
            width: "100%",
            position: "relative",
            zIndex: "0",
          }}
        >
          {/* contain heading  */}
          <div
            className="data1"
            style={{ marginTop: "100px", paddingLeft: "8vw" }}
          >
            <h2
              className="heading2"
              style={{
                fontSize: "14px",
                fontWeight: "500",
                padding: "0",
                lineHeight: "1px",
                margin: "0px 0px 0px 0vw",
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#aaaaaa",
                fontFamily: "Poppins, sans-serif",
              }}
            >
              About
              <style>
                {`
      .heading2::after {
        content: "";
    width: 120px;
    height: 1px;
    display: inline-block;
    background: #4ceb95;
    margin: 4px 10px;
      }
    `}
              </style>
            </h2>
            <h1
              style={{
                fontSize: "33px",
                fontWeight: "800",
                textTransform: "uppercase",
                fontFamily: " sans-serif",
                color: "#fff",
              }}
            >
              LEARN MORE ABOUT ME
            </h1>
          </div>
          {/* contain image and content flexbox */}
          <div
            className="d1"
            style={{
              padding: "2vh 7vw 2vh 7vw",
              display: "flex",
            }}
          >
            <style>{`@media (min-width: 426px){
            .d1{
              flex-direction: row;
            }
          }
          @media (max-width: 892px){
            .d1{
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
            .data2{
              margin-top: 20px;
              margin-left: 30px
            }
          }
          `}</style>
            <div>
              <img
                className="me"
                src={image}
                style={{
                  width: "300px",
                  margin: "5px 5px 5px 10px",
                  boxShadow: "20px 20px 20px 20px rgba(0, 0, 0, 0.25)",
                }}
                alt="img1"
              ></img>
            </div>
            <div
              className="data2"
              style={{
                marginLeft: "20px",
                alignContent: "center",
                width: "100%",
                color: "#fff",
              }}
            >
              <h3
                style={{
                  color: "#18D26E",
                  margin: "0px 0px 0px 0px",
                  fontWeight: "700",
                  fontSize: "26px",
                  fontFamily: "Share Tech Mono",
                  // eslint-disable-next-line
                  fontFamily: "monospace",
                }}
              >
                Front-end Developer
              </h3>
              <p
                style={{ fontStyle: "italic!important", marginBottom: "15px" }}
              >
                Hello, it's me Aneesh. I have 2 year of experience working on
                front-end development and ability to collaborate effectively
                with the senior developers. I have hands-on experience working
                with React JS and maintaing the better code base for reusabilty
                and I enjoy working closely with team members with the passion
                of personal growth.
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                }}
                className="c2"
              >
                <div
                  className="col-lg-6"
                  style={{ padding: "0px 10px 0px 0px" }}
                >
                  <ul
                    style={{
                      color: "#fff",
                      marginBottom: "-16px",
                      marginTop: "10px",
                    }}
                  >
                    <li
                      style={{
                        display: "flex",
                        alignContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <AiOutlineRight style={{ color: "#33cc33" }} />
                      <strong
                        style={{ marginRight: "10px", marginLeft: "5px" }}
                      >
                        Birthday:
                      </strong>
                      <span>3 January 2003</span>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <AiOutlineRight style={{ color: "#33cc33" }} />
                      <strong
                        style={{ marginRight: "10px", marginLeft: "5px" }}
                      >
                        Age:
                      </strong>
                      <span>20</span>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <AiOutlineRight style={{ color: "#33cc33" }} />
                      <strong
                        style={{ marginRight: "10px", marginLeft: "5px" }}
                      >
                        Email:
                      </strong>
                      <span>aneeshx000@gmail.com</span>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <AiOutlineRight style={{ color: "#33cc33" }} />
                      <strong
                        style={{ marginRight: "10px", marginLeft: "5px" }}
                      >
                        City:
                      </strong>
                      <span>Radaur, Haryana</span>
                    </li>
                  </ul>
                </div>
                <div
                  className="col-lg-6"
                  style={{ padding: "0px 0px 0px 0px" }}
                >
                  <ul style={{ color: "#fff", marginTop: "10px" }}>
                    <li
                      style={{
                        display: "flex",
                        alignContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <AiOutlineRight style={{ color: "#33cc33" }} />
                      <strong
                        style={{ marginRight: "10px", marginLeft: "5px" }}
                      >
                        Degree:
                      </strong>
                      <span>B.E. CSE</span>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <AiOutlineRight style={{ color: "#33cc33" }} />
                      <strong
                        style={{ marginRight: "10px", marginLeft: "5px" }}
                      >
                        Github:
                      </strong>
                      <span>
                        <a
                          href="https://github.com/007aneesh"
                          style={{ color: "white" }}
                        >
                          <style>{`a:hover{color: "orange"}`}</style>
                          https://github.com/007aneesh
                        </a>
                      </span>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <AiOutlineRight style={{ color: "#33cc33" }} />
                      <strong
                        style={{ marginRight: "10px", marginLeft: "5px" }}
                      >
                        Hobby:
                      </strong>
                      <span>Watching Movies</span>
                    </li>
                    <li
                      style={{
                        display: "flex",
                        alignContent: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <AiOutlineRight style={{ color: "#33cc33" }} />
                      <strong
                        style={{ marginRight: "10px", marginLeft: "5px" }}
                      >
                        Freelance:
                      </strong>
                      <span>Available</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="block1">
                <p
                  style={{
                    display: "flex",
                    fontStyle: "italic",
                    marginBottom: "22px",
                  }}
                  className="p1"
                >
                  I spend my spare time building upon my development skills and
                  creating my own personal projects.
                </p>
              </div>
            </div>
          </div>
          {/* skills */}
          <div className="skills" style={{ width: "100vw" }}>
            <div style={{ padding: "5vh 0px 0px 8vw" }}>
              <h2
                className="heading3"
                style={{
                  fontSize: "14px",
                  fontWeight: "500",
                  padding: "0",
                  lineHeight: "1px",
                  margin: "0px 0px 0px 0vw",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "#aaaaaa",
                  fontFamily: "Poppins, sans-serif",
                }}
              >
                Skills
                <style>
                  {`
                      .heading3::after {
                        content: "";
                        width: 120px;
                        height: 1px;
                        display: inline-block;
                        background: #4ceb95;
                        margin: 4px 10px;
                      }
                  `}
                </style>
              </h2>
            </div>
            <Skills />
          </div>
        </div>
        {/* footer */}
        <footer
          style={{
            display: "flex",
            padding: "10px 20px 0px -1px",
            zIndex: "1",
            width: "100vw",
            bottom: "0",
            marginBottom: "0px",
            right: "0",
            overflowX: "hidden",
          }}
        >
          <div
            style={{
              width: "100%",
              background: "#040404",
              display: "flex",
              justifyContent: "center",
              height: "40px",
              alignItems: "center",
              marginRight: "18px",
            }}
          >
            Designed by&nbsp;{" "}
            <span style={{ color: "#33cc33" }}>Aneesh Aggarwal</span>
          </div>
        </footer>
      </div>
    </>
  );
};
export default About;
