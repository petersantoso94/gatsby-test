import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

//import Contact components
import Header from '../components/contact/Header'
import Content from '../components/contact/Content'


class Contact extends React.Component {
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

export default Contact
