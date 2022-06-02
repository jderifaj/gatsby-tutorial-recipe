import React from "react"

import Layout from "../components/Layout"
import {StaticImage} from 'gatsby-plugin-image'
// import FetchData from '../examples/fetchData'
import AllRecipes from "../components/AllRecipes"
import SEO from "../components/SEO"
export default function Home() {
  return(
  <Layout >
  <SEO title="Home"/>
    <main className="page">
      <header className="hero">
      <StaticImage src="../assets/images/main.jpeg"
      alt="eggs"
      className="hero-img"
      placeholder="tracedSVG"
      layout="fullWidth"
      />
      <div className="hero-container">
        <div className="hero-text">
          <h1>Simply recipes</h1>
          <h4>No Fluff, Just Recipes
          </h4>
        </div>
      </div>
      </header>
      {/* <FetchData /> */}
      <AllRecipes />
    </main>


  </Layout>
  )

}
