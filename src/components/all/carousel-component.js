import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import slide1 from '../images/slide1.png';
import slide2 from '../images/slide2.png';
import slide3 from '../images/slide3.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";

function CarouselComponent() {
 
    return (
        
        <div className="carousel-wrapper">
            <Carousel infiniteLoop autoPlay stopOnHover interval={2000}>
                <div>
                    <img src={slide3} alt="slide3" className='carouselimg'/>
                        <div className="carousel-content">
                            <h2>MFA for all accounts</h2>
                            <p className='carouseltxt'>Secure online accounts with OneAuth 2FA. Back up OTP secrets and never lose access to your accounts.</p>
                            <button className='carouselbtn'>show more</button>
                        </div>
                </div>
                <div>
                    <img src={slide1} alt="slide1" className='carouselimg'/>
                        <div className="carousel-content">
                                <h2>Easy recovery modes</h2>
                                <p className='carouseltxt'>Lost access to OneAuth? Worry not. Set up passphrase and backup number to recover OneAuth easily.</p>
                                <button className='carouselbtn'>show more</button>
                        </div>
                </div>
                <div>
                    <img src={slide2} alt="slide2" className='carouselimg'/>
                        <div className="carousel-content">
                                <h2>Passwordless sign-in</h2>
                                <p className='carouseltxt'>Move away from risky passwords and experience one-tap access to Zoho. Download and Install OneAuth.</p>
                                <button className='carouselbtn'>show more</button>
                        </div>
                </div>
               
            </Carousel>
           
        </div>
    );
    
}
export default CarouselComponent;