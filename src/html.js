import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
    try {
        stylesStr = require(`!raw-loader!../public/styles.css`)
    } catch (e) {
        console.log(e)
    }
}

export default class HTML extends React.Component {
    render() {
        let css
        if (process.env.NODE_ENV === `production`) {
            css = (
                <style
                    id="gatsby-inlined-css"
                    key="gatsby-inlined-css"
                    dangerouslySetInnerHTML={{ __html: stylesStr }}
                />
            )
        }

        return (
            <html {...this.props.htmlAttributes}>
                <head>
                    {/* <!-- Google Fonts --> */}
                    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
                    {/* <!-- Stylesheets --> */}
                    <link rel="stylesheet" href="/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="/css/animate.css" />
                    <link rel="stylesheet" href="/css/owl.carousel.css" />
                    <link rel="stylesheet" href="/css/style.css" />
                    {this.props.headComponents}
                    <meta charSet="utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0"
                    />
                    <link
                        rel="apple-touch-icon"
                        sizes="180x180"
                        href={`/apple-touch-icon.png`}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="32x32"
                        href={`/favicon-32x32.png`}
                    />
                    <link
                        rel="icon"
                        type="image/png"
                        sizes="16x16"
                        href={`/favicon-16x16.png`}
                    />
                    <link
                        rel="mask-icon"
                        href={`/safari-pinned-tab.svg`}
                        color="#5bbad5"
                    />
                    {css}
                </head>
                <body {...this.props.bodyAttributes}>
                    <div
                        id="___gatsby"
                        dangerouslySetInnerHTML={{ __html: this.props.body }}
                    />
                    {this.props.postBodyComponents}
                    <script src="/js/jquery-2.1.4.min.js"></script>
                    <script src="/js/bootstrap.min.js"></script>
                    <script src="/js/isotope.pkgd.min.js"></script>
                    <script src="/js/owl.carousel.min.js"></script>
                    <script src="/js/jquery.owl-filter.js"></script>
                    <script src="/js/magnific-popup.min.js"></script>
                    <script src="/js/circle-progress.min.js"></script>
                    <script src="/js/main.js"></script>
                </body>
            </html>
        )
    }
}