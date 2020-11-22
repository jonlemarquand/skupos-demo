import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p className="scan-data">Scan Data</p>
    <div className="hero">
      <div className="hero-text">
        <h1>Transform your bottom line with every scan</h1>
        <p>Increase your revenue through scan data programs with brands and by offering multi-item discount deals at checkout.</p>
        <Link to="/" className="start-button-large">Get started</Link>
      </div>
    </div>
    <div className="join-us">
      <div className="join-us-content">
        Join the 14,000+ retailers already connected to Skupos
        <Link to="/" className="start-button-large-green">Get started</Link>
      </div>
    </div>
  </Layout>
)

export default IndexPage
