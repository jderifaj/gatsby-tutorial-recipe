import React from 'react'
import Layout from '../components/Layout'
import {StaticImage} from 'gatsby-plugin-image'
import {Link, graphql} from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from "../components/SEO"
const About = ({ data:{allContentfulRecipe:{nodes:recipes}}} ) => {
  return (
    <Layout>
      <SEO title="About Page" />
    <main className="page">
      <section className="about-page">
        <article>
          <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, magni adipisci exercitationem expedita omnis atque error? Nisi officia at dolore. Nam atque voluptates totam sequi itaque reprehenderit iure similique nihil.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, magni adipisci exercitationem expedita omnis atque error? Nisi officia at dolore. Nam atque voluptates totam sequi itaque reprehenderit iure similique nihil.</p>
          <Link to='/contact' className='btn'>contact</Link>

        </article>

        <StaticImage
        src="../assets/images/about.jpeg"
        className='about-img'
        placeholder='blurred'
        height='400'
        alt="Salt here"/>

      </section>
      <section className="featured-recipes">
          <h5>Take a look at this awesome Sauce</h5>
          <RecipesList  recipes={recipes}/>
      </section>
    </main>

    </Layout>
  )
}
export const query = graphql`
  {
    allContentfulRecipe(
      sort: {fields: title, order: ASC}
      filter: {featured: {eq: true}}
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          title
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`
export default About
