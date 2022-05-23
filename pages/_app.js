import React from "react";
import {Header, Footer, Nav} from "../components/index";

export default function App ({ Component}) {
  return <>
    <Header/>
    <Nav/><div className='CRP'>
      <Component/>
      </div>
      <Footer/>   
      </>
    
    
  
}

