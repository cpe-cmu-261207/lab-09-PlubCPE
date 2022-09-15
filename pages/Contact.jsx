import React from "react";
import Mainlayout from "../layouts/MainLayout";

export default function Contact() {
  return (
    <Mainlayout>
      <div
        className="shadow-1-strong bg-white my-5 p-5 rounded-3 me-auto container"
        id="education"
      >
        <div className="education-section">
          <h2 className="h2 fw-light mb-4">Education</h2>
          <div className="timeline">
            <div
              className="timeline-card timeline-card-success aos-init"
              data-aos="fade-in"
              data-aos-delay="0"
            >
              <div className="timeline-head px-4 pt-3">
                <div className="h5">
                  IEP(Intensive English Program)
                  <span className="text-muted h6">
                    from Anuban Phichit School
                  </span>
                </div>
              </div>
              <div className="timeline-body px-4 pb-4">
                <div className="text-muted text-small mb-3">2009 - 2014</div>
                <div>
                  Learn various subjects in English. This allows me to have
                  experience in using English with native-speaking teachers and
                  have the opportunity to exchange cultures abroad.
                </div>
              </div>
            </div>
            <div
              className="timeline-card timeline-card-success aos-init"
              data-aos="fade-in"
              data-aos-delay="200"
            >
              <div className="timeline-head px-4 pt-3">
                <div className="h5">
                  Special project(Olympic)
                  <span className="text-muted h6">from Nakhonsawan School</span>
                </div>
              </div>
              <div className="timeline-body px-4 pb-4">
                <div className="text-muted text-small mb-3">2015 - 2020</div>
                <div>
                  The program focuses mainly on science and math. Plus, there is
                  an experiment to give students a more real experience.
                </div>
              </div>
            </div>
            <div
              className="timeline-card timeline-card-success aos-init"
              data-aos="fade-in"
              data-aos-delay="400"
            >
              <div className="timeline-head px-4 pt-3">
                <div className="h5">
                  Computer Engineering
                  <span className="text-muted h6">
                    from Chaingmai University
                  </span>
                </div>
              </div>
              <div className="timeline-body px-4 pb-4">
                <div className="text-muted text-small mb-3">2021 - Present</div>
                <div>
                  From a famous university, i`ve gained a lot of experience that
                  is ready to enter the world of work effectively.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="shadow-1-strong bg-white my-5 p-5 container rounded-3"
        id="about"
      >
        <div className="about-section">
          <div className="row">
            <div className="col-md-5 text-dark">
              <div className="row mt-2">
                <h2 className="h2 fw-light mb-4">Contract</h2>

                <div className="col-sm-5">
                  <div className="pb-2 fw-bolder">
                    <i
                      className="far fa-envelope pe-2 text-muted"
                      style={{ width: "24px", opacity: "0.85" }}
                    ></i>
                    CMU mail
                  </div>
                </div>
                <div className="col-sm-7">
                  <a
                    href="https://outlook.office365.com/mail/inbox"
                    target="_blank"
                    rel="noreferrer"
                  >
                    chakkapop_s@cmu.ac.th
                  </a>
                </div>
                <div className="col-sm-5">
                  <div className="pb-2 fw-bolder">
                    <i
                      className="fab fa-facebook pe-2 text-muted"
                      style={{ width: "24px", opacity: "0.85" }}
                    ></i>
                    Facebook
                  </div>
                </div>
                <div className="col-sm-7">
                  <a
                    href="https://www.facebook.com/plub.soiwicha"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    Plub Soiwicha
                  </a>
                </div>
                <div className="col-sm-5">
                  <div className="pb-2 fw-bolder">
                    <i
                      className="fas fa-phone pe-2 text-muted"
                      style={{ width: "24px", opacity: "0.85" }}
                    ></i>
                    Phone
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="pb-2">091-283-3947</div>
                </div>
                <div className="col-sm-5">
                  <div className="pb-2 fw-bolder">
                    <i
                      className="fas fa-map-marker-alt pe-2 text-muted"
                      style={{ width: "24px", opacity: "0.85" }}
                    ></i>
                    Address
                  </div>
                </div>
                <div className="col-sm-7">
                  <div className="pb-2">
                    House No.84 Village No.2 Sub-area Muangkao Area Muang
                    phichit 66000
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}
