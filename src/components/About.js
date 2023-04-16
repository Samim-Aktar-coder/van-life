import React from 'react';
import { Link } from 'react-router-dom';

function About() {
    return (
        <div className='about'>
            <div className="about__content">
                <div className="about__img">
                    <img src="https://c0.wallpaperflare.com/preview/651/520/11/nature-outdoors-truck-vehicle.jpg" alt="" />
                </div>

                <div className="about__data">
                    <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
                    <p>Our misson is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off  without a  hitch. <br /> (Hitch costs extra 😅)</p>
                    <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on four wheel</p>
                </div>
                <div className="about__box">
                   <p> Your destination is wating. <br />
                        Your van is ready.</p>
                    <Link to='/vans' className="about__btn" >Explore ours van</Link>
                </div>
            </div>
        </div>
    );
}

export default About;