import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
import { FaArrowRight, FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaPinterest } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [email, setEmail] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        if (email) {
            alert("Thanks for Subscribing our newsletter")
        }
    }
    return (
        <footer className='footer-area pt-5 pb-3 mt-5'>
            <div className="footer-top">
                <Container>
                    <Row>
                        <Col md={3}>
                            <div className="footer-box">
                                <h4>Get In Touch</h4>
                                <div className="links mt-4">
                                    <ul>
                                        <Link to={'/contact'}>
                                            <li> <FaArrowRight className='link-icon' />Contact</li>
                                        </Link>
                                        <Link to={'/'}>
                                            <li> <FaArrowRight className='link-icon' />Go to Home</li>
                                        </Link>
                                        <Link to='/dashboard/welcome'>
                                            <li> <FaArrowRight className='link-icon' />Dashboard</li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="footer-box">
                                <h4>Useful Category</h4>
                                <div className="links mt-4">
                                    <ul>
                                        <Link to={'/allQuestions'}><li> <FaArrowRight className='link-icon' />All Questions</li></Link>
                                        <Link to={'/allSyllabus'}><li> <FaArrowRight className='link-icon' />All Syllabus</li></Link>
                                        <Link to={'/allBlogs'}><li> <FaArrowRight className='link-icon' />All Blogs</li></Link>
                                        <Link to={'/allNotes'}><li> <FaArrowRight className='link-icon' />All Notes</li></Link>
                                        <Link to={'/allLabs'}><li> <FaArrowRight className='link-icon' />All Labs</li></Link>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="footer-box">
                                <h4>Important Links</h4>
                                <div className="links mt-4">
                                    <ul>
                                        <Link to={'/allBooks'}>
                                            <li> <FaArrowRight className='link-icon' />All Books</li>
                                        </Link>
                                        <Link to='/dashboard/welcome'>
                                            <li> <FaArrowRight className='link-icon' />Dashboard</li>
                                        </Link>
                                        <Link to='/dashboard/user-profile'>
                                            <li> <FaArrowRight className='link-icon' />User Profile</li>
                                        </Link>
                                        <Link to='/dashboard/my-questions'>
                                            <li> <FaArrowRight className='link-icon' />My Questions</li>
                                        </Link>
                                        <Link to='/dashboard/my-notes'>
                                            <li> <FaArrowRight className='link-icon' />My Notes</li>
                                        </Link>
                                    </ul>
                                </div>
                            </div>
                        </Col>
                        <Col md={3}>
                            <div className="footer-box">
                                <h4>Social Media</h4>
                                {/* <div className="subscribe-form mt-4">
                                    <form onSubmit={handleSubmit}>
                                        <input onChange={(e) => setEmail(e.target.value)} type="email" required placeholder='Enter Email' />
                                        <button type='submit'>Subscribe <FaArrowRight className='link-icon' /></button>
                                    </form>
                                </div> */}
                                <div className="footer-social mt-3">
                                    {/* <h5>Social Media</h5> */}
                                    <FaFacebook className='social-icon' />
                                    <FaInstagram className='social-icon' />
                                    <FaTwitter className='social-icon' />
                                    <FaYoutube className='social-icon' />
                                    <FaTwitter className='social-icon' />
                                    <FaLinkedin className='social-icon' />
                                    <FaPinterest className='social-icon' />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <hr className='horizontal-line' />
            <div className="footer-bottom">
                <Container>
                    <Row>
                        <Col>
                            <p className="copyright-text text-center mt-2">
                                All right reserved &copy; Edu Bro. 2022
                            </p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    );
};

export default Footer;