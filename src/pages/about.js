import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//import about components
import Header from '../components/about/Header'
import Intro from '../components/about/Intro'
import Testimonials from '../components/about/Testimonials'
import Team from '../components/about/Team'
import Promo from '../components/about/Promo'


class About extends React.Component {
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
            <Intro />
            <Testimonials />
            <Team />
            <Promo />

      </Layout>
    )
  }
}

export default About
