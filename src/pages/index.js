import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import ESImage from "../components/images/expertSupportImg"

/* InfoBlock Images */

import InfoBoxImgOne from "../components/images/infoBoxImgOne"
import InfoBoxImgTwo from "../components/images/infoBoxImgTwo"
import InfoBoxImgThree from "../components/images/infoBoxImgThree"

/* Grid Images */

import GridYellowImg from "../components/images/gridYellowImg"
import GridOrangeImg from "../components/images/gridOrangeImg"
import GridPurpleImg from "../components/images/gridPurpleImg"
import GridGreenImg from "../components/images/gridGreenImg"
import GridBlueImgOne from "../components/images/gridBlueImgOne"
import GridBlueImgTwo from "../components/images/gridBlueImgTwo"


import OneSupport from "../components/images/oneSupport"
import TwoIntegrate from "../components/images/twoIntegrate"
import ThreeQuick from "../components/images/threeQuick"
import FourContract from "../components/images/fourContract"
import SEO from "../components/seo"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query {
    wpPage(slug: {eq: "home"}) {
      id
      infoblock {
        __typename
        infoblockHeader
        infoblockContent
        infoblockImage {
          sourceUrl
        }
        infoblockHeader2
        infoblockContent2
        infoblockImage2 {
          sourceUrl
        }
        infoblockHeader3
        infoblockContent3
        infoblockImage3 {
          sourceUrl
        }
      }
      heroSection {
        heroHeader
        heroContent
        heroButton {
          url
          title
        }
      }
      get_started_grid {
        blackText
        blueText1
        blueText2
        greenText
        header
        orangeText
        purpleText
        yellowText
        blueImage1 {
          sourceUrl
        }
        blueImage2 {
          sourceUrl
        }
      }
      sellSmarter {
        header
        introText
        subheader1
        subheader2
        subheader3
        subheader4
        subtext1
        subtext2
        subtext3
        subtext4
      }
      adverts {
        advertText1
        advertText2
        boxAdvert1
        boxAdvert1Text
        customerStory1Text
        customerStory1Link {
          title
          url
        }
        advertLink2 {
          title
          url
        }
        advertLink1 {
          title
          url
        }
      }
    }
  }
`)

return (
  <Layout>
    <SEO title="Home" />
    <p className="scan-data">Scan Data</p>
    <div className="hero">
      <div className="hero-text">
        <h1>{ data.wpPage.heroSection.heroHeader }</h1>
        <p>{ data.wpPage.heroSection.heroContent }</p>
        <Link to="/" className="start-button-large">{ data.wpPage.heroSection.heroButton.title }</Link>
      </div>
    </div>
    <div className="infobox">
      <InfoBoxImgOne />
      <div className="infobox-text left">
        <h2>{ data.wpPage.infoblock.infoblockHeader }</h2>
        <p>{ data.wpPage.infoblock.infoblockContent }</p>
      </div>
    </div>
    <div className="sell-national">
      <div className="sell-national-content">
        <div>Sell just like the leading national chains starting at <span class="highlight">$20 per month</span></div>
        <Link to="/" className="sell-national-link">{ data.wpPage.adverts.advertLink1.title }</Link>
      </div>
    </div>
    <div className="infobox">
      <div className="infobox-text right">
        <h2>{ data.wpPage.infoblock.infoblockHeader2 }</h2>
        <p>{ data.wpPage.infoblock.infoblockContent2 }</p>
      </div>
      <InfoBoxImgTwo />
    </div>
    <div className="infobox">
      <InfoBoxImgThree />
      <div className="infobox-text left">
        <h2>{ data.wpPage.infoblock.infoblockHeader3 }</h2>
        <p>{ data.wpPage.infoblock.infoblockContent3 }</p>
      </div>
    </div>
    <div className="get-started-grid">
      <div class="yellow gs-text">
        <GridYellowImg />
        <div class="gs-content">{ data.wpPage.get_started_grid.yellowText }</div>
      </div>
      <div class="orange gs-text">
        <div class="white-circle">
          <GridOrangeImg />
        </div>
        <div class="gs-content">{ data.wpPage.get_started_grid.orangeText }</div>
      </div>
      <div class="black gs-text">
        <h2>{ data.wpPage.get_started_grid.header }</h2>
        <div class="gs-content">{ data.wpPage.get_started_grid.blackText }</div>
      </div>
      <div class="purple gs-text">
        <GridPurpleImg />
        <div class="gs-content">{ data.wpPage.get_started_grid.purpleText }</div>
      </div>
      <div class="mint gs-text">
        <GridGreenImg />
        <div class="gs-content">{ data.wpPage.get_started_grid.greenText }</div>
      </div>
      <div class="skyblue gs-text">
        <div class="skyblue-box">
          <GridBlueImgOne />
          { data.wpPage.get_started_grid.blueText1 }
        </div>
        <div class="or-text">
          <hr />
          <div>or</div>
          <hr />
        </div>
        <div class="skyblue-box">
          <GridBlueImgTwo />
          <div class="skyblue-text">{ data.wpPage.get_started_grid.blueText2 }</div>
        </div>      </div>
      <div class="gs-other">
        Got an MNSP? <span class="fake-link">We're compatible.</span>
      </div>
    </div>
    <div className="sell-smarter">
      <h2>{ data.wpPage.sellSmarter.header }</h2>
      <p>{ data.wpPage.sellSmarter.introText }</p>
      <div className="sell-smarter-grid">
        <div className="sell-smarter-grid-text two">
          <h3>{ data.wpPage.sellSmarter.subheader1 }</h3>
          <p>{ data.wpPage.sellSmarter.subtext1 }</p>
        </div>
        <OneSupport />
        <div className="sell-smarter-grid-text four">
          <h3>{ data.wpPage.sellSmarter.subheader2 }</h3>
          <p>{ data.wpPage.sellSmarter.subtext2 }</p>
        </div>
        <TwoIntegrate />
        <div className="sell-smarter-grid-text six">
          <h3>{ data.wpPage.sellSmarter.subheader3 }</h3>
          <p>{ data.wpPage.sellSmarter.subtext3 }</p>
        </div>
        <ThreeQuick />
        <div className="sell-smarter-grid-text eight">
          <h3>{ data.wpPage.sellSmarter.subheader4 }</h3>
          <p>{ data.wpPage.sellSmarter.subtext4 }</p>
        </div>
        <FourContract />
      </div>
    </div>
    <div className="expert-support">
      <div className="expert-support-text">
        <h2>{ data.wpPage.adverts.boxAdvert1 }</h2>
        <div>{ data.wpPage.adverts.boxAdvert1Text }</div>
      </div>
      <ESImage />
    </div>
    <div className="customer-story">
      <hr />
      <div className="customer-story-content">
        <div className="grey-rectangle"></div>
        <div className="customer-story-text">{ data.wpPage.adverts.customerStory1Text }</div>
        <Link to={data.wpPage.adverts.customerStory1Link.url} className="customer-story-link">{ data.wpPage.adverts.customerStory1Link.title }</Link>
      </div>
      <hr />
    </div>
    <div className="join-us">
      <div className="join-us-content">
      { data.wpPage.adverts.advertText2 }
        <Link to={data.wpPage.adverts.advertLink2.link} className="start-button-large-green">{ data.wpPage.adverts.advertLink2.title }</Link>
      </div>
    </div>
  </Layout>
)}

export default IndexPage