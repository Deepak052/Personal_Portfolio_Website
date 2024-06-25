import React, { useContext, useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { ThemeContext } from "../../Context/theme";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "./navbar.css";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [{ themename, toggeltheme }] = useContext(ThemeContext);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    const body = document.body;
    const toggle = document.querySelector(".toggle-inner");
    if (themename === "dark") {
      body.classList.add("dark-mode");
      toggle.classList.add("toggle-active");
    } else {
      body.classList.remove("dark-mode");
      toggle.classList.remove("toggle-active");
    }
  }, [themename]);

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
       

        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <div className="toggleButton">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Navbar.Toggle>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about" onClick={() => updateExpanded(false)}>
                About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/project" onClick={() => updateExpanded(false)}>
                Projects
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/TechStack" onClick={() => updateExpanded(false)}>
                TechStack
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
  <a
    href="https://drive.google.com/file/d/1x9qskqUmat4VG_t9PTl77-2o69uBgOru/view?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => updateExpanded(false)}
    className="nav-link"  // Add Bootstrap's nav-link class for styling
  >
    Resume
  </a>
</Nav.Item>

            <Nav.Item>
              <div className="theme-switch">
                <div id="toggle" onClick={toggeltheme}>
                  <div className="toggle-inner" />
                </div>
              </div>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
