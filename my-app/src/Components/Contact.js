import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { SlLocationPin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { BsFillShareFill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import "./contact.css";
import { IconContext } from "react-icons";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail, AiFillGithub } from "react-icons/ai";
import styled from "styled-components";
export default function Contact({ navbar: Navbar }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cdscumk",
        "template_mvszujn",
        form.current,
        "-O7rwuqHc2tMHwIOn"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent!");
          alert("Message sent!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
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
        <div
          className="content"
          style={{
            overflow: "auto",
            overflowX: "hidden",
            height: "100%",
            width: "100%",
            position: "relative",
          }}
        >
          {/*Navbar*/}
          <Navbar />
          {/* container*/}
          <style>{`:root {
    scroll-behavior: smooth;
  }`}</style>
          <div className="containe" style={{ marginTop: "100px" }}>
            <div className="Title" style={{ paddingLeft: "8vw" }}>
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
                Contact
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
                Contact me
              </h1>
            </div>
            <div className="container text-center" style={{ padding: "30px" }}>
              <div className="row">
                <div className="col col-lg">
                  <div className="blocks">
                    <div className="c4">
                      <IconContext.Provider
                        value={{
                          className: "icon",
                          color: "#4CEB95",
                          size: "1.5em",
                        }}
                      >
                        <div
                          style={{
                            width: "52px",
                            height: "52px",
                            borderRadius: "50%",
                            background: "rgba(255, 255, 255, 0.1)",
                            display: "flex",
                            alignContent: "center",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                          }}
                        >
                          <SlLocationPin />
                        </div>
                      </IconContext.Provider>
                      <h3 className="headings">My Address</h3>
                    </div>
                    <div className="c5">
                      <p>Chitkara University, Punjab</p>
                    </div>
                  </div>
                  <div className="blocks">
                    <div className="c4">
                      <IconContext.Provider
                        value={{
                          className: "icon",
                          color: "#4CEB95",
                          size: "1.5em",
                        }}
                      >
                        <div
                          style={{
                            width: "52px",
                            height: "52px",
                            borderRadius: "50%",
                            background: "rgba(255, 255, 255, 0.1)",
                            display: "flex",
                            alignContent: "center",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                          }}
                        >
                          <BsFillShareFill />
                        </div>
                      </IconContext.Provider>
                      <h3 className="headings">Social Profiles</h3>
                    </div>

                    <div className="c5">
                      <p>
                        <a href="https://www.instagram.com/aneesh_.aggarwal/">
                          <FaInstagram
                            size={22}
                            style={{
                              padding: "8px 13px 5px 0px",
                              color: "white",
                            }}
                          />
                        </a>
                        <a href="https://www.linkedin.com/in/aneeshaggarwal/">
                          <FaLinkedin
                            size={22}
                            style={{
                              padding: "8px 13px 5px 0px",
                              color: "white",
                            }}
                          />
                        </a>
                        <a href="https://www.linkedin.com/in/aneeshaggarwal/">
                          <AiOutlineMail
                            size={22}
                            style={{
                              padding: "8px 13px 5px 0px",
                              color: "white",
                            }}
                          />
                        </a>
                        <a href="https://github.com/007aneesh">
                          <AiFillGithub
                            size={22}
                            style={{
                              padding: "8px 13px 5px 0px",
                              color: "white",
                            }}
                          />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-lg">
                  <div className="blocks">
                    <div className="c4">
                      <IconContext.Provider
                        value={{
                          className: "icon",
                          color: "#4CEB95",
                          size: "1.5em",
                          display: "flex",
                          alignContent: "center",
                          justifyContent: "center",
                        }}
                      >
                        <div
                          style={{
                            width: "52px",
                            height: "52px",
                            borderRadius: "50%",
                            background: "rgba(255, 255, 255, 0.1)",
                            display: "flex",
                            alignContent: "center",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                          }}
                        >
                          <CiMail />
                        </div>
                      </IconContext.Provider>
                      <h3 className="headings">Email me</h3>
                    </div>

                    <div className="c5">
                      <p>aneeshx000@gmail.com</p>
                    </div>
                  </div>
                  <div className="blocks">
                    <div className="c4">
                      <IconContext.Provider
                        value={{
                          className: "icon",
                          color: "#4CEB95",
                          size: "1.5em",
                        }}
                      >
                        <div
                          style={{
                            width: "52px",
                            height: "52px",
                            borderRadius: "50%",
                            background: "rgba(255, 255, 255, 0.1)",
                            display: "flex",
                            alignContent: "center",
                            alignItems: "center",
                            justifyContent: "center",
                            fontWeight: "bold",
                          }}
                        >
                          <BiPhoneCall />
                        </div>
                      </IconContext.Provider>
                      <h3 className="headings">Call me</h3>
                    </div>

                    <div className="c5">
                      <p>+91&nbsp;8295371847</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="forum"
              style={{
                padding: "0px 30px",
              }}
            >
              <StyledContactForm>
                <form ref={form} onSubmit={sendEmail}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    name="user_name"
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    name="user_email"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />

                  <textarea placeholder="Message" name="message" required />
                  <input type="submit" value="Send Message" />
                </form>
              </StyledContactForm>
            </div>
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
}
// Styles
const StyledContactForm = styled.div`
  display: flex;
  margin-bottom: 80px;
  justify-content: center;
  color: white;
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 76vw;
    font-size: 16px;
    padding: 30px;
    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border: none;
      color: white;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.08);
      margin-bottom: 10px;
      &:focus {
        background: rgba(255, 255, 255, 0.15);
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      min-height: 70px;
      max-height: 120px;
      padding: 7px;
      outline: none;
      border: none;
      color: white;
      border-radius: 5px;
      background: rgba(255, 255, 255, 0.08);
      &:focus {
        background: rgba(255, 255, 255, 0.15);
      }
    }

    input[type="submit"] {
      width: 30vw;
      margin-top: 2rem;
      cursor: pointer;
      background: #4ceb95;
      transition: 0.4s;
      border: none;
      color: black;
    }
  }
`;
