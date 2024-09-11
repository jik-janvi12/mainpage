import React from 'react'
import  './App.css';
import ResponsiveAppBar from './componets/Nav'
import Section from './componets/Section'
import Nav from './componets/Nav';

const App = () => {
  return (
    <div>
      {/* <ResponsiveAppBar></ResponsiveAppBar> */}
      <Nav></Nav>
      <Section></Section>
    </div>
  )
}

export default App
