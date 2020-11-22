//import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Logo from "../components/logo"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <ul className="left-header">
      <li>Products</li>
      <li>Resources</li>
      <li>Support</li>
    </ul>
    <Logo />
    <ul>
      <li>Log in</li>
      <li>Get started</li>
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
