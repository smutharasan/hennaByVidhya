import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import HennaVideoOne from "../../static/images/hennaVideoOne.mp4"
import HennaVideoTwo from "../../static/images/hennaVideoTwo.mp4"
import HennaVideoThree from "../../static/images/hennaVideoThree.mp4"
import HennaVideoFour from "../../static/images/hennaVideoFour.mp4"
import HennaVideoFive from "../../static/images/hennaVideoFive.mp4"

import "../style/globalstyles.css"
import "../style/portfolio.css"

const Portfolio = () => {
  return (
    <section className="flex flex-direction-column section portfolio-section">
      <h2 className="portfolio-header">Check out my work ...</h2>
      <div className="portfolio-container">
        <div className="grid featured-grid">
          <div className="card featured-card featured-square">
            <StaticImage
              src="../../static/images/FeaturedHenna.jpg"
              alt="Henna"
              placeholder="blurred"
              layout="constrained"
              aspectRatio={1 / 1.05}
            />
          </div>
          <div className="card featured-card featured-rectangle">
            {" "}
            <StaticImage
              src="../../static/images/hennaPicOne.jpg"
              alt="Henna"
              placeholder="blurred"
              layout="constrained"
              className="featured-img-rectangle"
            />
          </div>
          <div className="card featured-card featured-square">
            {" "}
            <StaticImage
              src="../../static/images/FeaturedHennaTwo.jpg"
              alt="Henna"
              placeholder="blurred"
              layout="constrained"
              aspectRatio={1 / 1.05}
            />
          </div>
          <div className="card featured-card featured-rectangle">
            {" "}
            <StaticImage
              src="../../static/images/FeaturedHennaThree.jpg"
              alt="Henna"
              placeholder="blurred"
              layout="constrained"
              className="featured-img-rectangle"
            />
          </div>
        </div>
        <div className="grid pictures-grid">
          <div className="card picture-card">
            {" "}
            <StaticImage
              src="../../static/images/hennaPicTwo.jpg"
              alt="Henna"
              placeholder="blurred"
              layout="constrained"
              aspectRatio={1 / 1.05}
            />
          </div>
          <div className="card picture-card">
            <video controls type="video/mp4" src={HennaVideoOne} autoPlay muted></video>
          </div>
          <div className="card picture-card">
            <video controls type="video/mp4" src={HennaVideoTwo} autoPlay muted></video>
          </div>
          <div className="card picture-card">
            <video controls type="video/mp4" src={HennaVideoThree} autoPlay muted></video>
          </div>
          <div className="card picture-card">
            <video controls type="video/mp4" src={HennaVideoFour} autoPlay muted></video>
          </div>
          <div className="card picture-card">
            <video controls type="video/mp4" src={HennaVideoFive} autoPlay muted></video>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
