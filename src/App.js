import React from 'react';

import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import ContactUs from './containers/ContactUs';
import Posts from './containers/posts';
import AboutMe from './containers/AboutMe';
import Footer from './containers/Footer';
import TopArrow from './components/TopArrow';

function App(){
  return(
    <Router>
      <div className="App">
        <Header />
        <Hero />

        <Route path="/Home" exact component={Home} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/posts" component={Posts} />
        <Route path="/about-me" component={AboutMe} />
        <TopArrow/>
        <Footer/>

        
      </div>
    </Router>
  )
}

export default App;
