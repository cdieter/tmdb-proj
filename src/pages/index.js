import React from "react"
import Pageheader from "../components/pageheader"
import Layout from "../components/layout"
import InputForm from "../components/inputForm"
import { graphql } from "gatsby"

export default ({data}) => (
  <Layout>
    <Pageheader headerText="New Features" />
    <p>Such wow. Very React. </p>
    <p>{data.postgres.allTmdbAds.edges[0].node.name}</p>
    <InputForm />
  </Layout>
)

export const query = graphql`
{
  postgres{
	  allTmdbAds{
      edges{
        node{
          name
        }
      }
    }
  }
}`
