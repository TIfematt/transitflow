import React from 'react';
import {Contact, Footer, Header, Blog, Testimonial, Work, Team, WhyChoose, Hero} from './containers';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Work />
      <Testimonial />
      <WhyChoose />
      <Team />
      <Contact />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
