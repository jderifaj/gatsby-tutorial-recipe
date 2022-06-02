import React from 'react'
import Layout from '../components/Layout'
import {graphql} from 'gatsby'
import RecipesList from '../components/RecipesList'
import SEO from "../components/SEO"
const Contact = ({data}) => {
  // different way to pass data
  const recipes = data.allContentfulRecipe.nodes;
  return (
    <Layout>
    <SEO title="Contact" />
    <main className="page">
      <section className="contact-page">
        <article className="contact-info">
          <h1>Want to Get in Touch?
        </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem consectetur adipisci unde, temporibus quo veniam? Excepturi, error totam dicta esse saepe, ducimus nesciunt modi enim qui officia quo ratione non!</p>
        <p>Lorem, ipsum dolor sit amet consectetur </p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem consectetur adipisci unde, temporibus quo veniam? Excepturi, error totam dicta esse saepe, ducimus nesciunt modi enim qui officia quo ratione non!</p>
        </article>
      <article>
        <form action="" className="form contact-form" action="https://formspree.io/f/mjvllzzz"
  method="POST">
          <div className="form-row">
            <label htmlFor="name">your name</label>
            <input type="text" id='name' name='name'/>
            </div>
            <div className="form-row">
            <label htmlFor="email">your email</label>
            <input type="text" id='email' name='email'/>
            </div>
            <div className="form-row">
              <label htmlFor="message">message</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>

                </div>
                <button className="btn block" type='submit'>Submit</button>
        </form>
      </article>
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
export default Contact
