import React from 'react'
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import WrapperContainer from '../WrapperContainer/WrapperContainer'
import MidFilterSection from '../MidSection/MidFilterSection'
import MidComponentParent from '../MidSection/MidComponentParent'
import TabsComponent from '../MidSection/TabsComponent'
import FurnitureFlow from '../MidSection/FurnitureFlow'
import NewsLetter from '../MidSection/NewsLetter'
import Cards from '../MidSection/Cards'
import Footer from '../Footer/Footer'

function Home() {
  return (
  <>
  <WrapperContainer navHead>
    <Navbar></Navbar>
    <Header></Header>
  </WrapperContainer>
  <WrapperContainer>
    <div id='news'>
      <MidFilterSection ></MidFilterSection>
    </div>
    <MidComponentParent></MidComponentParent>
    <TabsComponent></TabsComponent>
    <FurnitureFlow></FurnitureFlow>
    <Cards></Cards>
    <NewsLetter></NewsLetter>
  </WrapperContainer>  
  <Footer></Footer>
  </>
  )
}

export default Home