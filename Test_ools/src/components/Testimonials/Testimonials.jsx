import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/right-arrow.png'
import back_icon from '../../assets/left-arrow.png'
import user1 from '../../assets/appadam.png'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
        
    }

    return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
        <div className="slider">
            <ul ref={slider}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt="" />
                            <div>
                                <h3>Mohan Patro</h3>
                                <span>UWorld</span>
                            </div>
                        </div>
                        <p>
                            kdiugyfxbgfnhmpswhr fx g fxuvwbkqdhifxvsquygfx qwbgiuxf vj
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt="" />
                            <div>
                                <h3>Prasanthi Kimidi</h3>
                                <span>Accenture</span>
                            </div>
                        </div>
                        <p>
                            kdiugyfxbgfnhmpswhr fx g fxuvwbkqdhifxvsquygfx qwbgiuxf vj
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt="" />
                            <div>
                                <h3>Venkatesh Ganisetti</h3>
                                <span>APCFSS</span>
                            </div>
                        </div>
                        <p>
                            kdiugyfxbgfnhmpswhr fx g fxuvwbkqdhifxvsquygfx qwbgiuxf vj
                        </p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user1} alt="" />
                            <div>
                                <h3>Vinay Sriram Gavara</h3>
                                <span>IUDX</span>
                            </div>
                        </div>
                        <p>
                            kdiugyfxbgfnhmpswhr fx g fxuvwbkqdhifxvsquygfx qwbgiuxf vj
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    )
}

export default Testimonials
