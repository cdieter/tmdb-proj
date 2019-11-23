import React from "react"
import Pageheader from "../components/pageheader.js/index.js"
import Layout from "../components/layout"
import InputForm from "../components/inputForm"

const title = "Hello World"

export default () => (
  <Layout>
    <Pageheader headerText="New Features" />
    <p>Such wow. Very React. </p>
    <InputForm />
  </Layout>
)
