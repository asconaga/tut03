import React from 'react'
import { BackTop } from 'antd'
import { FaArrowAltCircleUp, FaBolt, FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from 'react-icons/fa'

const AppFooter = () => {
  return (
      <div className="container-fluid">
          <div className="footer">
              <div className="logo">
                  <a href="./"><FaBolt />lijidea</a>
              </div>
              <h2>Makeing a place in the sun...</h2>
              <ul className="socials">
                  <li><a href="https://www.facebook.com/"><FaFacebook/></a></li>
                  <li><a href="https://www.twitter.com/"><FaTwitter/></a></li>
                  <li><a href="https://www.linkedin.com/"><FaLinkedin/></a></li>
                  <li><a href="https://www.tiktok.com/"><FaTiktok/></a></li>
                  <li><a href="https://www.instagram.com/"><FaInstagram/></a></li>
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
