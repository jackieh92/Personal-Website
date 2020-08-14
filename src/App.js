import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar';
import Header from './components/header';
import About from './components/about';
import Experience from './components/experience';
import Characteristics from './components/characteristics';
import Timeline from './components/timeline';




function App() {
  return (
<div>
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>
<meta name="viewport" content="width=device-width, initial-scale=1"></meta>
  <Header/>
  <About/>
  <Experience/>
  <Characteristics/>
  <Timeline/>
</div>
  );
}


  
export default App;
