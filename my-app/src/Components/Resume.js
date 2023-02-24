import React from "react";
export default function Resume({ navbar: Navbar }) {
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
                Resume
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
                Check my resume
              </h1>
            </div>
            <style>{`.resume .resume-title {
  font-size: 26px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #fff;
}
.resume{
  padding-left: 8vw;
  padding-right: 8vw;
}
.resume .resume-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid rgba(255, 255, 255, 0.2);
  position: relative;
}

.resume .resume-item h4 {
  line-height: 18px;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  font-family: "Poppins", sans-serif;
  color: #18d26e;
  margin-bottom: 10px;
}

.resume .resume-item h5 {
  font-size: 16px;
  background: rgba(255, 255, 255, 0.15);
  padding: 15px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
}

.resume .resume-item ul {
  padding-left: 20px;
}
.col-lg-6{
  padding: 0px 40px 40px 0px;
}
.resume .resume-item ul li {
  padding-bottom: 10px;
}

.resume .resume-item:last-child {
  padding-bottom: 0;
}

.resume .resume-item::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  top: 0;
  background: #18d26e;
  border: 2px solid #18d26e;
}
@media(min-width: 1032px){
  .para1{
    max-width: 50vw;
  }
}
`}</style>
            <div className="resume">
              <div class="row">
                <div class="col-lg-6" style={{ paddingRight: "10px" }}>
                  <h3 class="resume-title">Summary</h3>
                  <div class="resume-item pb-0">
                    <h4>Aneesh</h4>
                    <p>
                      <p className="para1">
                        Innovative and deadline-driven Front-end developer with
                        2+ years of experience in designing and developing web
                        application from HTML, CSS, JS, React JS, Bootstrap,
                        etc.
                      </p>
                    </p>
                    <p>
                      <ul>
                        <li>Radaur Distt. Yamunanagar</li>
                        <li>Haryana</li>
                        <li>aneeshx000@gmail.com</li>
                      </ul>
                    </p>
                  </div>

                  <h3 class="resume-title">Education</h3>
                  <div class="resume-item">
                    <h4>Bachelor of Computer Engineering</h4>
                    <h5>2021 - 2025</h5>
                    <p>
                      <em>Chitkara University, Punjab, India</em>
                    </p>
                    {/* <p className="para1">
                      Qui deserunt veniam. Et sed aliquam labore tempore sed
                      quisquam iusto autem sit. Ea vero voluptatum qui ut
                      dignissimos deleniti nerada porti sand markend
                    </p> */}
                  </div>
                </div>
                <div class="col-lg-6">
                  {/* <h3 class="resume-title">Professional Experience</h3>
                  <div class="resume-item">
                    <h4>Working on it</h4>
                    <h5>Present</h5>
                    {/* <p>
                    <h5>2023</h5>
                    <p>
                      <em>Experion, New York, NY </em>
                    </p>
                    <p>
                      <ul>
                        <li>Currently looking for Interships/Training</li>
                        <li>
                          Delegate tasks to the 7 members of the design team and
                          provide counsel on all aspects of the project.{" "}
                        </li>
                        <li>
                          Supervise the assessment of all graphic materials in
                          order to ensure quality and accuracy of the design
                        </li>
                        <li>
                          Oversee the efficient use of production project
                          budgets ranging from $2,000 - $25,000
                        </li>
                      </ul>
                    </p>
                  </div>
                  <div class="resume-item">
                    <h4>Graphic design specialist</h4>
                    <h5>2017 - 2018</h5>
                    <p>
                      <em>Stepping Stone Advertising, New York, NY</em>
                    </p>
                    <p>
                      <ul>
                        <li>
                          Developed numerous marketing programs (logos,
                          brochures,infographics, presentations, and
                          advertisements).
                        </li>
                        <li>
                          Managed up to 5 projects or tasks at a given time
                          while under pressure
                        </li>
                        <li>
                          Recommended and consulted with clients on the most
                          appropriate graphic design
                        </li>
                        <li>
                          Created 4+ design presentations and proposals a month
                          for clients and account managers
                        </li>
                      </ul>
                    </p>
                  </div> */}
                </div>
              </div>
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
