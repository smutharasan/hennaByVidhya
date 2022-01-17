import React from "react"

import { Helmet } from "react-helmet"
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import About from "../components/about"

import Services from "../components/Services"
import Contact from "../components/contact"
import Portfolio from "../components/portfolio"
import CustomFooter from "../components/customfooter"

import * as styles from "../style/index.module.css"
import "../style/globalstyles.css"

export default function Home() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isAriaExpanded, setIsAriaExpanded] = React.useState(false)
  const toggleSideBar = () => {
    setIsOpen(!isOpen)
    setIsAriaExpanded(!isAriaExpanded)
  }

  console.log("Hey Supriya")

  return (
    <div className={styles.page}>
      <Helmet>
        <script
          src="https://code.jquery.com/jquery-3.3.1.min.js"
          integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
          crossOrigin="anonymous"
        />
        <script src="https://cdn.jsdelivr.net/npm/kute.js@2.1.2/dist/kute.min.js"></script>
      </Helmet>
      <Navbar
        toggleSideBar={toggleSideBar}
        toggleAriaAttr={isAriaExpanded}
      ></Navbar>
      <Sidebar
        toggleSideBar={toggleSideBar}
        isOpen={isOpen}
        toggleAriaAttr={isAriaExpanded}
      ></Sidebar>
      <main>
        <Portfolio></Portfolio>
        <About></About>
        <Services></Services>
        <Contact></Contact>
      </main>
      <CustomFooter></CustomFooter>
    </div>
  )
}
