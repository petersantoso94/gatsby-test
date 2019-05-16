import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//import Portfolio components
import Header from '../components/portofolio/Header'
import Content from '../components/portofolio/Content'


class Portfolio extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.pageLoader();
    window.pageFunction();
}

  render() {
    const { location } = this.props
    return (
      <Layout location={location}>
        <SEO
          title="Home Page"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <Header />
            <Content />

      </Layout>
    )
  }
}

export default Portfolio
