import React from "react"
import Pageheader from "../components/pageheader"
import Layout from "../components/layout"
import InputForm from "../components/inputForm"
import { graphql } from "gatsby"

export default ({data}) => (
  <Layout>
    <Pageheader headerText="New Features" />
    <p>Such wow. Very React. </p>
    <ul>
      {data.postgres.allTmdbAds.nodes.map((item, name) => {
        return <li>{item.name}</li>
      })}
    </ul>
    <InputForm />
  </Layout>
)

export const query = graphql`
{
  postgres{
	  allTmdbAds{
      nodes {
        name
      }      
    }
  }
}`
