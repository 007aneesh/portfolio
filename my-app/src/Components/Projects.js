import React from "react";
import "./projects.css";
export default function Projects({ navbar: Navbar }) {
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
          <div
            className="containe"
            style={{
              marginTop: "100px",
              paddingLeft: "8vw",
              paddingRight: "8vw",
              marginBottom: "70px",
            }}
          >
            <div className="Title">
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
                Projects
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
                My Works
              </h1>
            </div>
            <section className="portfolio">
              <div class="cards_container ">
                <div class="card">
                  <div class="card_header">
                    <p class="small_text">React JS</p>
                    <h2 class="title_text">News Website</h2>
                  </div>
                  <div class="card_content">
                    <p class="content_text">
                      A react js website that provides the latest news feed via
                      the news api.
                    </p>
                    <a href="https://github.com/007aneesh/newsAPI" class="btn">
                      View
                    </a>
                  </div>
                </div>
                <div class="card">
                  <div class="card_header">
                    <p class="small_text">Javascript</p>
                    <h2 class="title_text">Weather App</h2>
                  </div>
                  <div class="card_content">
                    <p class="content_text">
                      A JS app to get the current weather of any location by
                      default it's current location using the OpenWeatherMap
                      API.
                    </p>
                    <a
                      href="https://github.com/007aneesh/React-weather-app"
                      class="btn"
                    >
                      View
                    </a>
                  </div>
                </div>
                <div class="card">
                  <div class="card_header">
                    <p class="small_text">Javascript</p>
                    <h2 class="title_text">Drum Kit</h2>
                  </div>
                  <div class="card_content">
                    <p class="content_text">
                      A web drum machine that imitates drum kit sounds through
                      the optional uses of the keyboard and button clicks.
                    </p>
                    <a href="https://drum-kit-two-psi.vercel.app/" class="btn">
                      View
                    </a>
                  </div>
                </div>
              </div>
              <div class="cards_container ">
                <div class="card ls">
                  <div class="card_header">
                    <p class="small_text">React JS</p>
                    <h2 class="title_text">LongShot</h2>
                  </div>
                  <div class="card_content">
                    <p class="content_text">
                      A react js website that fetches the data from the JSON
                      format and displays into tabular form with drag and drop
                      functionality.
                    </p>
                    <a href="https://github.com/007aneesh/longShot" class="btn">
                      View
                    </a>
                  </div>
                </div>
                <div class="card nc">
                  <div class="card_header">
                    <p class="small_text">HTML, CSS, JS</p>
                    <h2 class="title_text">Netflix Clone</h2>
                  </div>
                  <div class="card_content">
                    <p class="content_text">
                      Netflix clone designed via HTML, CSS and JS.
                    </p>
                    <a
                      href="https://github.com/007aneesh/Netflix-clone-By-Aneesh"
                      class="btn"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </section>
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
