import Navbar from "../components/Navbar";
import Mainlayout from "../layouts/MainLayout";

export default function Home() {
  return (
    <Mainlayout>
      <div className="page-content ">
        <div className="container">
          <div className="resume-container">
            <div className="shadow-1-strong bg-white my-4" id="intro">
              <div className="bg-info text-white">
                <div className="cover bg-image">
                  <div
                    className="mask bg-dark"
                    //   style={
                    // {backdrop-filter: blur(2px)}
                    //   }
                  >
                    <div className="text-center p-4">
                      <div className="avatar p-1">
                        <img
                          className="img-thumbnail shadow-4-strong "
                          src="Image/profile.jpg"
                          width="160"
                          height="160"
                        />
                      </div>
                      <div className="header-bio mt-3">
                        <h2 className="h1 ">Chakkapop Soiwicha</h2>
                        <p>Computer Engineering Student</p>
                      </div>
                      <div>
                        <nav role="navigation">
                          <ul className="nav justify-content-center">
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="https://www.facebook.com/plub.soiwicha"
                                title="Facebook"
                              >
                                <i className="fab fa-facebook"></i>
                                <span className="menu-title sr-only">
                                  Facebook
                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="https://www.instagram.com/plubutanoic_acid/"
                                title="Instagram"
                              >
                                <i className="fab fa-instagram"></i>
                                <span className="menu-title sr-only">
                                  Instagram
                                </span>
                              </a>
                            </li>
                            <li className="nav-item">
                              <a
                                className="nav-link"
                                href="https://github.com/PlubCPE"
                                title="Github"
                              >
                                <i class="fab fa-github"></i>
                                <span class="menu-title sr-only">Github</span>
                              </a>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="shadow-2-strong bg-white my-5 p-5 rounded-5"
            id="about"
          >
            <div className="about-section ">
              <div className="row">
                <div className="col-md-6 text-black bg-dark rounded-3">
                  <h2 className="h2 fw-light mb-4 text-white">About Me</h2>
                  <p className="text-white">
                    Hello! I’m Chakkapop soiwicha. I am passionate about web
                    design and front end developer. I am a skilled at .
                    <strong>English</strong>. I am a quick learner and a team
                    worker that gets the job done.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Mainlayout>
  );
}
