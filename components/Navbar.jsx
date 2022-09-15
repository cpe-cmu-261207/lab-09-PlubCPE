import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    // <div style={{ maxWidth: "600px" }} className="mx-auto">
    //   <div className="d-flex justify-content-center gap-5 fs-4">
    //     <Link href="/">
    //       <a>About</a>
    //     </Link>
    //     <Link href="/experience">
    //       <a>Exprience</a>
    //     </Link>
    //     <Link href="/contack">
    //       <a>Contact</a>
    //     </Link>
    //   </div>
    //   <hr />
    // </div>
    <div className="me-auto container text-center text-lg-right">
      <div className="me-auto pt-4 clearfix">
        <h1 className="me-auto mb-0 text-light text-dark">
          CHAKKAPOP SOIWICHA
        </h1>
        <div className="site-nav">
          <nav role="navigation">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <Link href="/">
                  <a
                    className="nav-link"
                    href="index.html"
                    title="About"
                    target="_self"
                  >
                    <span className="menu-title">About</span>
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/Experience">
                  <a
                    className="nav-link"
                    href="exp.html"
                    title="Experience"
                    target="_self"
                  >
                    <span className="menu-title">Experience</span>
                  </a>
                </Link>
              </li>

              <li className="nav-item">
                <Link href="/Contact">
                  <a className="nav-link" href="contact.html" title="Contact">
                    <span className="menu-title">Contact</span>
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/lab-07">
                  <a className="nav-link" href="contact.html" title="Contact">
                    <span className="menu-title">Todolist</span>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
