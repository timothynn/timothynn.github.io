"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header>
      <div className="container header-container">
        <div className="logo">
          T<span>N</span>
        </div>
        <nav>
          <div className="nav-right">
            <ThemeToggle />
            <div
              className="hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
          <ul className={isMenuOpen ? "active" : ""}>
            <li>
              <a href="#hero" onClick={(e) => handleNavClick(e, "#hero")}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleNavClick(e, "#projects")}
              >
                Projects
              </a>
            </li>
            <li>
              <a href="#skills" onClick={(e) => handleNavClick(e, "#skills")}>
                Skills
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
