import React from 'react'
import AppAbout from '../components/home/about'
import AppFeature from '../components/home/feature'
import AppHero from '../components/home/hero'

const AppHome = () => {
  return (
    <div>
      <div className="main">
        <AppHero/>
        <AppAbout/>
        <AppFeature/>
      {/* <AppAbout/>
      <AppFeature/>
      <AppWorks/>
      <AppFaq/>
      <AppPricing/>
      <AppContact/> */}
        </div>    
    </div>
  )
}

export default AppHome
