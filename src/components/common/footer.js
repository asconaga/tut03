import React from 'react'
import { BackTop, Tooltip } from 'antd'
import { FaArrowAltCircleUp, FaBolt, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa'

const AppFooter = () => {
  return (
      <div className="container-fluid">
          <div className="footer">
              <div className="logo">
                  <a href="./"><FaBolt />lijidea</a>
              </div>
              <h2>Making a place in the sun...</h2>
              <ul className="socials">
                  <Tooltip title="Facebook">
                      <li><a href="https://www.facebook.com/"><FaFacebook /></a></li>
                  </Tooltip>
                  <Tooltip title="Twitter">
                      <li><a href="https://www.twitter.com/"><FaTwitter /></a></li>
                  </Tooltip>
                  <Tooltip title="LinkedIn">
                      <li><a href="https://www.linkedin.com/"><FaLinkedin /></a></li>
                  </Tooltip>
                  <Tooltip title="Tick-Tock">
                      <li><a href="https://www.tiktok.com/"><FaTiktok /></a></li>
                  </Tooltip>
                  <Tooltip title="Instagram">
                      <li><a href="https://www.instagram.com/"><FaInstagram /></a></li>
                  </Tooltip>
              </ul>
              <div className="copyright">Copyright &copy; 2022 lijidea</div>
              <BackTop>
                  <div className="goTop"><FaArrowAltCircleUp/></div>
              </BackTop>
          </div>
      </div>
  )
}

export default AppFooter
