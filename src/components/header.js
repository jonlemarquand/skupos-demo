import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "./logos/logo"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <ul className="left-header">
      <li>Products</li>
      <li>Resources</li>
      <li>Support</li>
    </ul>
    <Logo />
    <ul className="right-header">
      <li>Log in</li>
      <Link to="/" className="start-button-small"><li>Get started</li></Link>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
