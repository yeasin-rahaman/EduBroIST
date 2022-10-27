import React from 'react';
import Yeasin from '../../../Assets/Images/TeamMember/Yeasin.png'

import rakib from '../../../Assets/Images/TeamMember/rakib.jpg'
import './Team.css'
import { FaArrowRight, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaPinterest } from 'react-icons/fa';
const Team = () => {
    return (

        <section id="team" class="team section-bg">
            <div class="container">

                <div className="section-title text-center mb-5">
                    <h3>Our Team</h3>
                    <span></span>
                </div>

                <div class="row justify-content-center ">




                    <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div class="member" data-aos="fade-up" data-aos-delay="400">
                            <div class="member-img">
                                <img src={Yeasin} class="img-fluid" alt="" />
                                <div class="social">
                                    <FaFacebook className='social-icon' />
                                    <FaInstagram className='social-icon' />
                                    <FaTwitter className='social-icon' />
                                    <FaYoutube className='social-icon' />
                                    <FaTwitter className='social-icon' />
                                    <FaLinkedin className='social-icon' />
                                    <FaPinterest className='social-icon' />
                                </div>
                            </div>
                            <div class="member-info">
                                <h4>Yeasin Rahaman</h4>
                                <span>ECE</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div class="member" data-aos="fade-up" data-aos-delay="400">
                            <div class="member-img">
                                <img src={rakib} class="img-fluid" alt="" />
                                <div class="social">
                                    <FaFacebook className='social-icon' />
                                    <FaInstagram className='social-icon' />
                                    <FaTwitter className='social-icon' />
                                    <FaYoutube className='social-icon' />
                                    <FaTwitter className='social-icon' />
                                    <FaLinkedin className='social-icon' />
                                    <FaPinterest className='social-icon' />
                                </div>
                            </div>
                            <div class="member-info">
                                <h4>Rakib Hassan Shanto</h4>
                                <span>ECE</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default Team;