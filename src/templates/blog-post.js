import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { rhythm, scale } from "../utils/typography"

class BlogPostTemplate extends React.Component {
  componentDidMount() {
    window.pageLoader();
    window.pageFunction();
  }
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext
    return (
      <Layout location={this.props.location}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        {/* <!-- Page header section start --> */}
        <section className="page-header-section set-bg" data-setbg="img/header-bg-1.jpg">
          <div className="container">
            <h1 className="header-title">{post.frontmatter.title}<span>.</span></h1>
          </div>
        </section>
        {/* <!-- Page header section end --> */}
        {/* <!-- Page section start -->	 */}
        <section className="page-section spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-9 col-md-12">
                {/* <!-- Blog post --> */}
                <div className="blog-post">
                  <div className="thumb">
                    <a href="#">
                      <img src="img/blog/1.jpg" alt="" />
                    </a>
                  </div>
                  <div className="blog-content">
                    <div className="post-date">
                      {post.frontmatter.date}</div>
                    <h2><a href="">This is an architecture news post</a></h2>
                    <div className="post-meta">
                      <a href="#">John Doe <i className="fa fa-star-o"></i></a>
                      <a href="#">News <i className="fa fa-newspaper-o"></i></a>
                      <a href="#">23 <i className="fa fa-heart-o"></i></a>
                      <a href="#">6 <i className="fa fa-comment-o"></i></a>
                    </div>
                    <div dangerouslySetInnerHTML={{ __html: post.html }} />
                    <hr
                      style={{
                        marginBottom: rhythm(1),
                      }}
                    />
                    <ul
                      style={{
                        display: `flex`,
                        flexWrap: `wrap`,
                        justifyContent: `space-between`,
                        listStyle: `none`,
                        padding: 0,
                      }}
                    >
                      <li>
                        {previous && (
                          <Link to={previous.fields.slug} rel="prev">
                            ← {previous.frontmatter.title}
                          </Link>
                        )}
                      </li>
                      <li>
                        {next && (
                          <Link to={next.fields.slug} rel="next">
                            {next.frontmatter.title} →
                          </Link>
                        )}
                      </li>
                    </ul>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
