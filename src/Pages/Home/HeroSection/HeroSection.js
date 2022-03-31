import React from 'react';
import Typewriter from 'typewriter-effect';
import './HeroSection.css';
const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="container">
                <div className="row pt-5 pb-5">
                    <div className="d-flex justify-content-center align-items-center ">
                        <div>
                            <div id="home" className="row align-items-center d-flex  justify-content-start px-5 my-5 py-5">
                                <div className=" text-center my-5 py-5 ">
                                    <h1 className="text-white fw-bold  display-2">
                                        <Typewriter
                                            options={{
                                                strings: ["Question Bank Where Students can find Solution"],
                                                autoStart: true,
                                                loop: true,
                                            }}
                                        />
                                    </h1>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HeroSection;