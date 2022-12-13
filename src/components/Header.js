import React from "react";
// import logo from "../logo.png";

const Header = ({ setCurrentPage, isDarkMode, setIsDarkMode }) => {
  return (
    <header>
      {/* <nav className="navbar navbar-expand-lg px-4">
        <div className="container-fluid">
          <span className="navbar-brand px-lg-5 " href="#" role="button">
            <img src={logo} width="48" alt="" className="rounded" />
            &nbsp; 𝕵𝖔𝖘𝖍_𝕶𝖊𝖆𝖓 ➭
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mx-lg-5"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav mx-lg-5">
              <span
                className="nav-link active mx-lg-5"
                aria-current="page"
                role="button"
                onClick={() => setCurrentPage("home")}
              >
                Home
              </span>
              <span
                className="nav-link mx-lg-5"
                role="button"
                onClick={() => setCurrentPage("about")}
              >
                About Me
              </span>
              <span
                className="nav-link mx-lg-5"
                role="button"
                onClick={() => setCurrentPage("project")}
              >
                Project
              </span>
              <span
                className="nav-link mx-lg-5"
                role="button"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                <iconify-icon
                  inline
                  icon="line-md:switch-off-to-switch-transition"
                ></iconify-icon>
              </span>
            </div>
          </div>
        </div>
      </nav> */}

      {/* <div className="navbar">
        <ul>
          <li>
            <button onClick={() => setCurrentPage("home")}>home</button>
          </li>
          <li>
            <button onClick={() => setCurrentPage("about")}>about me</button>
          </li>
          <li>
            <button onClick={() => setCurrentPage("project")}>project</button>
          </li>
          <li>
            <button onClick={() => setIsDarkMode(!isDarkMode)}>+</button>
          </li>
        </ul>
      </div> */}

      <nav class="navbar navbar-expand-lg bg-light">
        <div class="container px-5">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <span
                class="nav-link active px-5"
                aria-current="page"
                onClick={() => setCurrentPage("home")}
              >
                Home
              </span>
              <span
                class="nav-link px-5"
                onClick={() => setCurrentPage("about")}
              >
                About me
              </span>
              <span
                class="nav-link px-5"
                onClick={() => setCurrentPage("project")}
              >
                Projects
              </span>
              <span
                class="nav-link px-5"
                onClick={() => setIsDarkMode(!isDarkMode)}
              >
                +
              </span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
