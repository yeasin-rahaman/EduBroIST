import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FaBookmark, FaUserAlt, FaGlobeAsia, FaCommentDots } from 'react-icons/fa';
import './Counter.css';

const Counter = () => {
    return (
        <div className='counter-area'>
            <Container>
                <Row></Row>
                <Col>
                    <div className="section-title text-center mb-5">
                        <h3>Find Our Achievements</h3>
                        <span></span>
                    </div>
                </Col>
                <Row>
                    <Col md={3}>
                        <div className="single-counter text-center shadow py-5">
                            <div className="counter-icon">
                                <FaBookmark className='icon' />
                            </div>
                            <div className="counter-text">
                                <h3>170</h3>
                                <p>Total Question</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="single-counter counter-active text-center shadow py-5">
                            <div className="counter-icon">
                                <FaUserAlt className='icon' />
                            </div>
                            <div className="counter-text">
                                <h3>539</h3>
                                <p>Users</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="single-counter text-center shadow py-5">
                            <div className="counter-icon">
                                <FaGlobeAsia className='icon' />
                            </div>
                            <div className="counter-text">
                                <h3>40</h3>
                                <p>International Books</p>
                            </div>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className="single-counter text-center shadow py-5">
                            <div className="counter-icon">
                                <FaCommentDots className='icon' />
                            </div>
                            <div className="counter-text">
                                <h3>60</h3>
                                <p>Question Asked</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Counter;