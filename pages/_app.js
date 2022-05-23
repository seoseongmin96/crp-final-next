import React from "react";
import {Header, Footer, Nav} from "../components/index";

const App = ({ Component}) => {
  return <>
    <Header/>
    <Nav/><div className='CRP'>
      <Component/>
      </div>
      <Footer/>   
      </>
    
    
  
}

export default App