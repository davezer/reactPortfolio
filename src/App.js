import React from 'react';

// import libraries

// import app.css
import './App.css';


//import components
import Navigation from './components/Nav/nav';
// import Intro from './components/Intro';
import About from './components/About/about';
import Featured from './components/Featured/featured';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div>
      <Navigation /> 
      <main>
      <>
        <About />
        <Featured />
        <Contact />
      </>
      </main>
      <Footer />
    </div>
  );
}

export default App;
