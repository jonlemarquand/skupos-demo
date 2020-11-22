import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import ESImage from "../components/images/expertSupportImg"
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
    <div className="get-started-grid">
      <div class="yellow gs-text">Hour set-up</div>
      <div class="orange gs-text">No long-term commitments</div>
      <div class="black gs-text">Skupos integrates with most popular POS systems and requires no long-term commitment, making it quick and easy to try with real customers today.</div>
      <div class="purple gs-text">Remote setup</div>
      <div class="mint gs-text">An internet connection</div>
      <div class="skyblue gs-text">A Clover device or MNSP*</div>
      <div class="gs-other">
        Got an MNSP? <span class="fake-link">We're compatible.</span>
      </div>
    </div>
    <div className="sell-smarter">
      <h2>Everything you need to sell smarter</h2>
      <p>Skupos simplifies every part of the process so all you have to do is run your store the same as before.</p>
      <div className="sell-smarter-grid">
        <div className="sell-smarter-grid-text">
          <h3>Secure &amp; Reliable</h3>
          <p>Skupos protects transaction data with bank-grade security.</p>
        </div>
        <div className="sell-smarter-img"></div>
        <div className="sell-smarter-grid-text">
          <h3>Easy to integrate</h3>
          <p>Skupos protects transaction data with bank-grade security.</p>
        </div>
        <div className="sell-smarter-img"></div>
        <div className="sell-smarter-grid-text">
          <h3>Quick to get started</h3>
          <p>Skupos protects transaction data with bank-grade security.</p>
        </div>
        <div className="sell-smarter-img"></div>
        <div className="sell-smarter-grid-text">
          <h3>Contract-free</h3>
          <p>Skupos protects transaction data with bank-grade security.</p>
        </div>
        <div className="sell-smarter-img"></div>
      </div>
    </div>
    <div className="expert-support">
      <div className="expert-support-text">
        <h2>Expert support when you need it</h2>
        <div>Get help whenever you’re curious. Speak to us on the phone or on chat 5 days a week. In the mood to DIY? Skip right to our comprehensive Help Center.</div>
      </div>
      <ESImage />
    </div>
    <div className="customer-story">
      <hr />
      <div className="customer-story-content">
        <div className="grey-rectangle"></div>
        <div className="customer-story-text">Nisi suspendisse curabitur pharetra vehicula nibh odio et mauris, sed. Porttitor libero est malesuada sed nec morbi feugiat</div>
        <Link to="/" className="customer-story-link">Read customer story</Link>
      </div>
      <hr />
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
