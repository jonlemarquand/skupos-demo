import React from 'react';

import LogoWhite from "./logos/logo-white"

import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div className="footer-top">
                <div className="footer-tl">
                    <LogoWhite />
                    <div class="button-box-container">
                        <div className="button-box">
                            <p>Et etiam cursus sit et et fringilla curabitur nisl ultrices.</p>
                            <span class="button-box-arrow">&gt;</span>
                        </div>
                        <div className="button-box">
                            <p>Et etiam cursus sit et et fringilla curabitur nisl ultrices.</p>
                            <span class="button-box-arrow">&gt;</span>
                        </div>
                    </div>
                </div>
                <div className="footer-columns">
                    <ul>
                        <p>Convenience Retail</p>
                        <li>Overview</li>
                        <li>Scan Data</li>
                        <li>Engage</li>
                        <li>Pricing</li>
                    </ul>
                    <ul>
                        <p>Enterprise Brands</p>
                        <li>Overview</li>
                        <li>Insights</li>
                        <li>Engage for Brands</li>
                        <li>Predict</li>
                    </ul>
                    <ul>
                        <p>Resources</p>
                        <li>Customer Stories</li>
                        <li>Blog</li>
                        <li>Product Updates</li>
                        <li>Events</li>
                        <li>Videos</li>
                        <li>Downloads</li>
                    </ul>
                    <ul>
                        <p>Company</p>
                        <li>About Us</li>
                        <li>Press</li>
                        <li>Careers</li>
                        <li>Contact</li>
                        <li>Referral Program</li>
                        <li>Support</li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-bl">
                    <p>© 2020 Skupos. All Rights Reserved.</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                </div>
                <div className="footer-socials"></div>
            </div>
        </footer>
    )
}

export default Footer;