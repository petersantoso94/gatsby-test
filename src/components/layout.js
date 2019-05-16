import React from "react"

import Header from './header'
import Footer from './footer'

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`

    return (
      <div>
        <Header location={location}/>
        {children}
        <Footer />
      </div>
    )
  }
}

export default Layout
