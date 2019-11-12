import React from "react"
import Header from "../components/header.js"
import Layout from "../components/layout"
import InputForm from "../components/inputForm"

const title = "Hello World"

export default () => (
  <Layout>
    <Header headerText="New Features" />
    <p>Such wow. Very React. </p>
    <InputForm />
  </Layout>
)
