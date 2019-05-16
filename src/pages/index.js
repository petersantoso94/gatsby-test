import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//import home components
import Hero from '../components/home/Hero'
import Intro from '../components/home/Intro'
import Service from '../components/home/Service'
import Cta from '../components/home/Cta'
import Projects from '../components/home/Projects'
import Milestones from '../components/home/Milestones'
import Clients from '../components/home/Clients'


class Index extends React.Component {
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
        <Hero />
        <Intro />
        <Service />
        <Cta />
        <Projects />
        <Milestones />
        <Clients />

      </Layout>
    )
  }
}

export default Index
