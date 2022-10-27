import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Services.css'

const Services = () => {
    return (
        <div className='py-5 service-area'>
            <Container>
                <Row>
                    <Col>
                        <div className="section-title text-center mb-5">
                            <h3>Featured Categories</h3>
                            <span></span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col md={4}>
                        <div className="single-service shadow">
                            <h3>Question Solutions</h3>
                            <p>Our vision is to make this website for the students who may find the previous year qestions solution.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="single-service shadow">
                            <h3>Books</h3>
                            <p>Get various types of free books and to make this website for the students who may find the previous year qestions solution.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="single-service shadow">
                            <h3>Notes</h3>
                            <p>Every students can find the best notes available in our website and it will be really helpful for the students who are dedicated.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="single-service shadow">
                            <h3>Lab Solutions</h3>
                            <p>You will get the solutions of lab also.Some students are facing issue with the lab solutions.So here we are to help you.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="single-service shadow">
                            <h3>Find Syllabus</h3>
                            <p>In every exam or schedule is happen syllabus is a very important thing to preprere by ourselfs.It saves our valuable time.</p>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className="single-service shadow">
                            <h3>Educational Blogs</h3>
                            <p>Also you will find blogs about many educational topics. What will be very helpfull of enrich your knowledge.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Services;