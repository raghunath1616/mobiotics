import React, { Component } from "react"
import Navbar from "dumbComponents/common/Navbar"
import DownloadApp from "dumbComponents/common/DownloadApp"

class Layout extends Component {
  state = {
    showAppBar: true,
  }

  hideAppBar = () => this.setState({ showAppBar: false })

  render() {
    const { showAppBar } = this.state
    const { children } = this.props
    return (
      <div className="layout">
        <Navbar />
        { showAppBar && <DownloadApp hideAppBar={this.hideAppBar}/> }
        <main>
          { children }
        </main>
      </div>
    )
  }
}

export default Layout
