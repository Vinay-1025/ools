import React, { useState } from 'react';
import './Content.css';
import ContentHeader from '../ContentHeader/ContentHeader'; // Corrected import
import Hero from '../Hero/Hero';
import About from '../About/About';
import Programs from '../Programs/Programs';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import Testimonials from '../Testimonials/Testimonials';
import Card from '../Card/Card';
import Videoplayer from '../Videoplayer/Videoplayer';
import Outmodel from '../Outmodel/Outmodel';
import Leavemodel from '../Leavemodel/Leavemodel';
import Title from '../Title/Title';


const Content = () => {


    const [playState, setPlayState] = useState(false);
    const [openModel, setOpenModel] = useState(false);
    const [openModell, setOpenModell] = useState(false);

    return (
        <div className="content">
            <ContentHeader />
            <Hero />
            <Card />
            <Title subTitle='About University' title='RGUKT - SKLM' />
            <About setPlayState={setPlayState} />
            <Title subTitle='student space' title='What We Offer' />
            <Programs setOpenModel={setOpenModel} setOpenModell={setOpenModell} />
            <Title subTitle='gallery' title='Campus Memories' />
            <Gallery />
            <Contact />
            <Videoplayer playState={playState} setPlayState={setPlayState} />
            <Outmodel openModel={openModel} setOpenModel={setOpenModel} />
            <Leavemodel openModell={openModell} setOpenModell={setOpenModell} />
        </div>
    );
}

export default Content;
