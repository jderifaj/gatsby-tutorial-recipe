import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
query{
  site {
    info:siteMetadata {
      title
      description
      author
      complexData {
        name
        age
      }
      simpleData
      person {
        name
        age
      }
    }
  }
}`
const FetchData = () => {

    // const data = useStaticQuery(getData)
    // use destructuring instead
    const{
        site: {
            info: {title},
            info: {description},
        },
    } = useStaticQuery(getData)
  return (
    <div>
      {/* <h1>{data.site.siteMetadata.person.name}</h1> */}
        <h2>{title}</h2>
        <h3>{description}</h3>
    </div>
  )
}

export default FetchData
