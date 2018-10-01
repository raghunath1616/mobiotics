import React from "react"
import Navbar from "dumbComponents/common/Navbar"
import DownloadApp from "dumbComponents/common/DownloadApp"

const Layout = ({ children }) => (
  <div className="layout">
    <Navbar />
    <DownloadApp />
    <main>
      { children }
    </main>
  </div>
)

export default Layout
