import React from "react"
import "../style/globalstyles.css" 
import "../style/footer.css"
function CustomFooter() {
  return (
    <>
      <footer className="custom-footer">
        <p>
          &copy; {new Date().getFullYear()} <span>Henna By Vidhya</span>
        </p>
      </footer>
    </>
  )
}

export default CustomFooter
