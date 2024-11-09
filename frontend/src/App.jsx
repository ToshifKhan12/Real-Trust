import React from 'react'
import './App.css'
import Navbar from './Home/Navbar'
import HeroSection from './Home/HeroSection'
// import ConsultationForm from './Home/ConsultationForm'
import Average from './components/Average'
import WhyChooseUs from './components/WhyChooseUs'
import AboutUs from './components/AboutUs'
import ProjectsSection from './components/ProjectsSection'
import ClientSection from './components/ClientSection'
import NewsletterSubscription from './components/NewsletterSubscription'

function App() {
   
  return (
    <>
      <Navbar/>
      {/* <ConsultationForm/> */}
      <HeroSection/>
      <Average/>
      <WhyChooseUs/>
      <AboutUs/>
      <ProjectsSection/>
      <ClientSection/>
      <NewsletterSubscription/>
    </>
  )
}

export default App
