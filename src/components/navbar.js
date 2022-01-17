import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { StyledBurger } from "../styled-components/button.styled"
import Hero from "../components/Hero"
import "../../static/fonts/fonts.css"
import "../style/navbar.css"
import "../style/hero-animate.css"

export const navbar = ({ toggleSideBar, toggleAriaAttr }) => {
  console.log("thsi is coming from the nav bar")
  console.log(toggleAriaAttr)
  return (
    <header>
      <div className="primary-header flex">
        <div id="logoWrapper"></div>
        <div className="mobile-nav-toggle">
          <StyledBurger
            className="btn-hover"
            onClick={toggleSideBar}
            aria-controls="primary-navigation"
            aria-expanded={toggleAriaAttr}
          >
            <span className="sr-only">Menu</span>
            <div />
            <div />
            <div />
          </StyledBurger>
        </div>
        <nav>
          <ul className="primary-navigation flex" id="primary-navigation">
            <li>
              <AnchorLink className="anchorLink" to="/#Home" title="">
                <span>Home</span>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="anchorLink" to="/#Services" title="">
                <span>Services</span>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="anchorLink" to="/#About" title="">
                <span>About</span>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="anchorLink" to="/#Portfolio" title="">
                <span>Portfolio</span>
              </AnchorLink>
            </li>
            <li>
              <AnchorLink className="anchorLink" to="/#Contact" title="">
                <span>Contact</span>
              </AnchorLink>
            </li>
          </ul>
        </nav>
      </div>

      <Hero></Hero>
      <svg
        className="header-curve-svg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#561D01"
          fill-opacity="1"
          d="M0,64L120,85.3C240,107,480,149,720,144C960,139,1200,85,1320,58.7L1440,32L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
    </header>
  )
}
export default navbar
