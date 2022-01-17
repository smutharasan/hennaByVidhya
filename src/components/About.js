import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import "../style/about.css"

const About = () => {

  return (
    <section id="About" className="section about-section">
      <div className="blob-wrapper">
        <svg
          id="visual"
          viewBox="0 0 900 600"
          width="900"
          height="600"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
        >
          <g transform="translate(459.39457087507327 309.7580809292021)">
            <path
              id="aboutBlobOne"
              d="M120,-157.6C152.7,-141.5,174.3,-102.6,194.8,-58.8C215.3,-14.9,234.6,33.8,228.4,80.8C222.2,127.8,190.4,173.1,148.1,184C105.8,195,52.9,171.5,-2.4,174.8C-57.8,178.2,-115.6,208.4,-137.5,190.9C-159.3,173.3,-145.3,108,-153,56.3C-160.7,4.6,-190.2,-33.4,-178.3,-54.2C-166.4,-75.1,-113.2,-78.8,-76.6,-93.6C-40,-108.3,-20,-134.2,11.9,-150.5C43.7,-166.8,87.4,-173.6,120,-157.6Z"
              fill="#ff7300"
            ></path>
          </g>
        </svg>
      </div>
      <div className="about-main-content flex">
        <div className="aboutImageWrapper">
          <StaticImage
            src="../../static/images/about.jpg"
            alt="Henna"
            placeholder="blurred"
            layout="constrained"
            aspectRatio={1.5 / 2}
            className="aboutImage"
          />
        </div>

        <div className="about-details flex flex-direction-column">
          <div className="about-heading">
            <h2 id="about-heading-two">About</h2>
            <h6 id="about-heading-six">Myself</h6>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            facilisis, ante eu sollicitudin malesuada, magna nibh tempor mi, ac
            dictum neque nibh eget turpis. Nunc non erat sed neque vestibulum
            lobortis quis et dui. Maecenas non orci bibendum, fermentum neque
            at, efficitur neque. Nam vulputate nunc et facilisis fermentum.
            Morbi posuere sagittis massa faucibus suscipit. Suspendisse potenti.
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Nulla sed feugiat mauris. Nunc cursus mi ac
            metus iaculis pretium. Integer facilisis auctor felis ac ultrices.
            Praesent vitae diam non ipsum vehicula hendrerit. Fusce ultricies
            neque a rhoncus consequat. Nulla et tempor mauris. Ut elementum
            facilisis interdum. Fusce dictum eu est vel imperdiet. Donec ut
            semper nulla, a posuere felis.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
