/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      twitter: file(absolutePath: { regex: "/twitter.png/" }) {
        childImageSharp {
          fixed(width: 32, height: 32, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      linkedin: file(absolutePath: { regex: "/linkedin.png/" }) {
        childImageSharp {
          fixed(width: 32, height: 32, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed
  const twitter = data?.twitter?.childImageSharp?.fixed
  const linkedin = data?.linkedin?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <p>
          <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <div>
            <a href={`https://twitter.com/${social?.twitter || ``}`}>
              {twitter && (
                <Image
                    fixed={twitter}
                    className="social"
                />
              )}
            </a>
            <a href={`https://www.linkedin.com/in/ericeiswerth/`}>
              {linkedin && (
                <Image
                    fixed={linkedin}
                    className="social"
                />
              )}
            </a>
          </div>
        </p>
      )}
    </div>
  )
}

export default Bio
