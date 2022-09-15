import React from "react";
import Mainlayout from "../layouts/MainLayout";

export default function Experience() {
  return (
    <Mainlayout>
      <div
        className="shadow-1-strong bg-white my-5 p-5 rounded-3 container "
        id="skills"
        style={{ margin: "auto" }}
      >
        <div className="skills-section  ">
          <h2 className="h2 fw-light mb-4">Skills</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="mb-3">
                <span className="fw-bolder">HTML</span>
                <div
                  className="progress my-2 rounded"
                  style={{ height: "20px" }}
                >
                  <div
                    className="progress-bar bg-info aos-init"
                    role="progressbar"
                    style={{ width: "30%" }}
                  >
                    Beginner
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <span className="fw-bolder">CSS</span>
                <div
                  className="progress my-2 rounded"
                  style={{ height: "20px" }}
                >
                  <div
                    className="progress-bar bg-info aos-init"
                    role="progressbar"
                    style={{ width: "30%" }}
                  >
                    Beginner
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <span className="fw-bolder">JavaScript</span>
                <div
                  className="progress my-2 rounded"
                  style={{ height: "20px" }}
                >
                  <div
                    className="progress-bar bg-info aos-init"
                    role="progressbar"
                    style={{ width: "25%" }}
                  >
                    Beginner
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <span className="fw-bolder">C++</span>
                <div
                  className="progress my-2 rounded"
                  style={{ height: "20px" }}
                >
                  <div
                    className="progress-bar bg-info aos-init"
                    role="progressbar"
                    style={{ width: "50%" }}
                  >
                    Fair
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <span className="fw-bolder">English</span>
                <div
                  className="progress my-2 rounded"
                  style={{ height: "20px" }}
                >
                  <div
                    className="progress-bar bg-info aos-init"
                    role="progressbar"
                    style={{ width: "70%" }}
                  >
                    Advance
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="shadow-1-strong bg-white my-5 p-5 rounded-3 container"
        id="experience"
      >
        <div className="work-experience-section">
          <h2 className="h2 fw-light mb-4">Experience</h2>
          <div className="timeline">
            <div
              className="timeline-card timeline-card-info aos-init"
              data-aos="fade-in"
              data-aos-delay="0"
            >
              <div className="timeline-head px-4 pt-3">
                <div className="h5">
                  POSN Computer(2019)
                  <span className="text-muted h6">
                    at Charlermkwansatree School
                  </span>
                </div>
              </div>
              <div className="timeline-body px-4 pb-4">
                <div className="text-muted text-small mb-3">
                  September - October, 2019
                </div>
                <div>
                  I had the opportunity to practice programming for the first
                  time and it was the first experience that made me want to
                  learn programming.
                </div>
              </div>
            </div>
            <div
              className="timeline-card timeline-card-info aos-init"
              data-aos="fade-in"
              data-aos-delay="200"
            >
              <div className="timeline-head px-4 pt-3">
                <div className="h5">
                  className Leader
                  <span className="text-muted h6">at Nakhonsawan School</span>
                </div>
              </div>
              <div className="timeline-body px-4 pb-4">
                <div className="text-muted text-small mb-3">
                  May, 2016 - 2020
                </div>
                <div>
                  My experience as a className leader has taught me how to take
                  great responsibility and to collaborate effectively with
                  others.
                </div>
              </div>
            </div>
            <div
              className="timeline-card timeline-card-info aos-init"
              data-aos="fade-in"
              data-aos-delay="400"
            ></div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}
