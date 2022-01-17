import React from "react"

import BridalHenna from "../components/services-svgs/BridalHenna"
import HennaParty from "../components/services-svgs/HennaParty"
import SmallDesignHenna from "../components/services-svgs/SmallDesignHenna"
import MediumDesignHenna from "../components/services-svgs/MediumDesignHenna"
import LayeredWaveSVG from "../components/curve-svgs/LayeredWaveSVG"
import BookingForm from "./BookingForm"
import "../style/services.css"

const Services = () => {
  const onChange = date => {
    console.log(date.toString())
  }
  console.log(new Date("December 17, 1995 03:24:00").getFullYear())
  return (
    <section className="section flex flex-direction-column services-section">
      <LayeredWaveSVG flipped={true}></LayeredWaveSVG>
      <h2 className="services-heading">services</h2>
      <div className="flex services-container">
        <div className="grid services-grid">
          <div className="flex flex-direction-column card services-card">
            <SmallDesignHenna></SmallDesignHenna>
            <div className="card-details">
              <h4 className="price-description">$5.00</h4>
              <h6 className="service-description">Small Design</h6>
            </div>
          </div>
          <div className="flex flex-direction-column card services-card">
            <MediumDesignHenna></MediumDesignHenna>
            <div className="card-details">
              <h4 className="price-description">$10.00</h4>
              <h6 className="service-description">Medium Design</h6>
            </div>
          </div>
          <div className="flex flex-direction-column card services-card">
            <HennaParty></HennaParty>
            <div className="card-details">
              <h4 className="price-description">$25.00</h4>
              <h6 className="service-description">Henna Party Services</h6>
            </div>
          </div>
          <div className="flex flex-direction-column card services-card">
            <BridalHenna></BridalHenna>
            <div className="card-details">
              <h4 className="price-description">$35.00</h4>
              <h6 className="service-description">Bridal Services</h6>
              <p style={{ fontSize: "100%" }}>Bridal Trial -$5.00</p>
            </div>
          </div>
        </div>
      </div>

      <BookingForm></BookingForm>
      <LayeredWaveSVG flipped={false}></LayeredWaveSVG>
    </section>
  )
}

export default Services
