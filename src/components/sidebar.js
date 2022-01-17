import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import "../style/navbar.css"

const sidebar = ({ toggleSideBar, isOpen, toggleAriaAttr }) => {
  console.log("thsi is coming from the side bar ")
  console.log(toggleAriaAttr)
  return (
    <aside
      className={`aside-sidebar-wrapper flex ${isOpen ? "show-sidebar" : ""}`}
    >
      <button
        onClick={toggleSideBar}
        aria-controls="sidebar-navigation"
        aria-expanded={toggleAriaAttr}
        className="material-icons close-button"
        style={{}}
      >
        <span className="sr-only">close button</span>
        close
      </button>

      <nav>
        <ul className="sidebar-navigation flex" id="sidebar-navigation">
          <li>
            <AnchorLink className="anchorLink" to="/index#Home" title="">
              <span>Home</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchorLink" to="/index#Services" title="">
              <span>Services</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchorLink" to="/index#About" title="">
              <span>About</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchorLink" to="/index#Portfolio" title="">
              <span>Portfolio</span>
            </AnchorLink>
          </li>
          <li>
            <AnchorLink className="anchorLink" to="/index#Contact" title="">
              <span>Contact</span>
            </AnchorLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default sidebar
