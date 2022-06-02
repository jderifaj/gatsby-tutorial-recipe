import React from 'react'
import { graphql } from "gatsby"
import Layout from '../components/Layout'
import Gallery from '../examples/Gallery'
const Testing = () => {
    // const author = data.site.info.author;
    return (

    <Layout>
        <main className="page">
      <Gallery />
      </main>
    </Layout>
  )
}

export default Testing