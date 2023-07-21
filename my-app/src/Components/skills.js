import React from "react";
import "./skills.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ChangingProgressProvider from "./ChangingProgressProvider";
const Skills = () => {
  return (
    <div className="mh-skills">
      <div className="container">
        <div className="row">
          {/* Technical skills */}
          <div className="col-sm-12 col-md-6">
            <div className="mh-skills-inner">
              <div className="mh-professional-skill">
                <h3>Technical skills</h3>
                <div className="each-skills">
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="name">HTML</div>
                        {/* <div className="percentage-num">90%</div> */}
                      </div>
                      <div className="progressbar">
                        <div
                          className="percentagem"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="name">CSS</div>
                        {/* <div className="percentage-num">90%</div> */}
                      </div>
                      <div className="progressbar">
                        <div
                          className="percentagem"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="name">Javascript</div>
                        {/* <div className="percentage-num">80%</div> */}
                      </div>
                      <div className="progressbar">
                        <div
                          className="percentagem"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="name">Tailwind CSS</div>
                        {/* <div className="percentage-num">90%</div> */}
                      </div>
                      <div className="progressbar">
                        <div
                          className="percentagem"
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="name">React</div>
                        {/* <div className="percentage-num">70%</div> */}
                      </div>
                      <div className="progressbar">
                        <div
                          className="percentagem"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="name">C++</div>
                        {/* <div className="percentage-num">85%</div> */}
                      </div>
                      <div className="progressbar">
                        <div
                          className="percentagem"
                          style={{ width: "85%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="candidatos">
                    <div className="parcial">
                      <div className="info">
                        <div className="name">SQL</div>
                        {/* <div className="percentage-num">80%</div> */}
                      </div>
                      <div className="progressbar">
                        <div
                          className="percentagem"
                          style={{ width: "80%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* professional skills */}
          <div className="col-sm-12 col-md-6" style={{ paddingLeft: "10px" }}>
            <div className="mh-professional-skills">
              <h3>Professional skills</h3>
              <ul className="mh-professional-progress">
                <li>
                  <div className="mh-progress mh-progress-circle">
                    <ChangingProgressProvider values={[0, 85]}>
                      {(percentage) => (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            pathTransition:
                              percentage === 0
                                ? "none"
                                : "stroke-dashoffset 3s ease 0s",
                            pathColor: "#4ceb95",
                            textColor: "white",
                            trailColor: "white",
                            strokeLinecap: "butt",
                          })}
                        />
                      )}
                    </ChangingProgressProvider>
                  </div>

                  <div className="pr-skill-name">Communication</div>
                </li>
                <li>
                  <div className="mh-progress mh-progress-circle">
                    <ChangingProgressProvider values={[0, 90]}>
                      {(percentage) => (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            pathTransition:
                              percentage === 0
                                ? "none"
                                : "stroke-dashoffset 3s ease 0s",
                            pathColor: "#4ceb95",
                            textColor: "white",
                            trailColor: "white",
                            strokeLinecap: "butt",
                          })}
                        />
                      )}
                    </ChangingProgressProvider>
                  </div>
                  <div className="pr-skill-name">Team work</div>
                </li>
                <li>
                  <div className="mh-progress mh-progress-circle">
                    <ChangingProgressProvider values={[0, 80]}>
                      {(percentage) => (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            pathTransition:
                              percentage === 0
                                ? "none"
                                : "stroke-dashoffset 3s ease 0s",
                            pathColor: "#4ceb95",
                            textColor: "white",
                            trailColor: "white",
                            strokeLinecap: "butt",
                          })}
                        />
                      )}
                    </ChangingProgressProvider>
                  </div>
                  <div className="pr-skill-name">Project management</div>
                </li>
                <li>
                  <div className="mh-progress mh-progress-circle">
                    <ChangingProgressProvider values={[0, 80]}>
                      {(percentage) => (
                        <CircularProgressbar
                          value={percentage}
                          text={`${percentage}%`}
                          styles={buildStyles({
                            pathTransition:
                              percentage === 0
                                ? "none"
                                : "stroke-dashoffset 3s ease 0s",
                            pathColor: "#4ceb95",
                            textColor: "white",
                            trailColor: "white",
                            strokeLinecap: "butt",
                          })}
                        />
                      )}
                    </ChangingProgressProvider>
                  </div>
                  <div className="pr-skill-name">Creativity</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
