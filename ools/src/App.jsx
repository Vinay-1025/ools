import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Programs from './components/Programs/Programs';
import Title from './components/Title/Title';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Videoplayer from './components/Videoplayer/Videoplayer';
import Outmodel from './components/Outmodel/Outmodel';
import Leavemodel from './components/Leavemodel/Leavemodel';

const App = () => {
  const [playState, setPlayState] = useState(false);
  const [openModel, setOpenModel] = useState(false);
  const [openModell, setOpenModell] = useState(false);

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='About University' title='RGUKT - SKLM' />
        <About setPlayState={setPlayState} />
        <Title subTitle='student space' title='What We Offer' />
        <Programs setOpenModel={setOpenModel} setOpenModell={setOpenModell} />
        <Title subTitle='gallery' title='Campus Memories' />
        <Gallery />
        <Title subTitle='contact us' title='Get In Touch' />
        <Contact />
        <Title subTitle='Testimonials' title='Students View' />
        <Testimonials />
        <Footer />
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState} />
      <Outmodel openModel={openModel} setOpenModel={setOpenModel} />
      <Leavemodel openModell={openModell} setOpenModell={setOpenModell} />
    </div>
  );
}

export default App;
