import React, { Component } from "react"
import Link from "gatsby-link"
import PropTypes from "prop-types"
import Layout from "../components/layout"



class HomeTemplate extends Component {
    render() {
        const data = this.props.data

        return(
          <Layout>
            <div>
                <h1>Pages</h1>

                {data.allWordpressPage.edges.map(({node}) => (
                    <div key={node.slug} className={"post"} style={{ marginBottom: 50 }}>
                        <Link to={'post/' + node.slug}>
                            <h3>{node.title}</h3>
                        </Link>

                        <div className={"post-content"} dangerouslySetInnerHTML={{__html: node.excerpt}} />

                        {node.date}
                    </div>
                ))}

            </div>
            </Layout>
        )
    }
}

HomeTemplate.propTypes = {
    data: PropTypes.object.isRequired,
    edges: PropTypes.array,
}

export default HomeTemplate

export const pageQuery = graphql`
    query pagesQuery{
        allWordpressPage{
            edges{
                node{
                    id
                    title
                    excerpt
                    slug
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
`
