import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { DefaultButton } from "../styled-components/button.styled"

function Hero() {
  return (
    <div id="Home" className="hero-container">
      <div className="landing-text-wrapper">
        <h1>
          <span className="animating top-hero-text">Henna</span>
          <br></br>
          <span className="animating bottom-hero-text">By Vidhya</span>
        </h1>
      </div>

      <DefaultButton className="hero-button">
        <svg
          width="120"
          height="100"
          viewBox="0 0 120 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Frame 1">
            <g id="LightGroup">
              <path
                id="light1"
                opacity="0.7"
                d="M51 48.268C52.3333 49.0378 52.3333 50.9622 51 51.732L16.5 71.6506C15.1667 72.4204 13.5 71.4582 13.5 69.9186V30.0814C13.5 28.5418 15.1667 27.5796 16.5 28.3494L51 48.268Z"
              />
            </g>
            <g id="DarkGroup">
              <path
                id="dark2"
                opacity="0.7"
                d="M84 48.268C85.3333 49.0378 85.3333 50.9622 84 51.732L49.5 71.6506C48.1667 72.4204 46.5 71.4582 46.5 69.9186V30.0814C46.5 28.5418 48.1667 27.5796 49.5 28.3494L84 48.268Z"
              />
              <path
                id="dark1"
                opacity="0.7"
                d="M51 48.268C52.3333 49.0378 52.3333 50.9622 51 51.732L16.5 71.6506C15.1667 72.4204 13.5 71.4582 13.5 69.9186V30.0814C13.5 28.5418 15.1667 27.5796 16.5 28.3494L51 48.268Z"
              />
            </g>
          </g>
        </svg>

        <AnchorLink className="anchorLink" to="/#BookingForm" title="">
          <span className="hero-button-text-wrapper">Book Now!</span>
        </AnchorLink>
      </DefaultButton>
    </div>
  )
}

export default Hero
