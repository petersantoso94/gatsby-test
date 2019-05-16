import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//import services components
import Header from '../components/services/Header'
import Intro from '../components/services/Intro'
import Service from '../components/services/Service'
import Promo from '../components/services/Promo'


class Services extends React.Component {
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
                <Service />
                <Promo />

            </Layout>
        )
    }
}

export default Services
