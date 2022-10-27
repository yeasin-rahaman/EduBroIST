import React from 'react';
import './Contact.css';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
const Contact = () => {
    const { register, handleSubmit, } = useForm();
    const onSubmit = data => {
    };
    return (
        <Container>
            <Row className='mt-5'>

                <Col lg={6}>
                    <div className="contact-left">
                        <h3>Contact Us</h3>
                        <p>If you are looking for a Question-oriented approach, you can use this one from Edu-Bro's Contact Us page.</p>
                        <div className="single-contact">
                            <span>Call us</span>
                            <p>(+880)1675440454</p>
                        </div>
                        <div className="single-contact">
                            <span>EMAIL ADDRESS</span>
                            <p>edubro.ist@gmail.com</p>
                        </div>
                        <div className="single-contact">
                            <span>LOCATION</span>
                            <p>House # 54, Road # 15/A (Old-26),
                                Dhanmondi (East of Shankar Bus Stand),
                                Dhaka-1209.</p>
                        </div>
                        {/* <div className="single-contact">
                            <span>TIME:</span>
                            <p>Monday - Friday</p>
                            <p>08AM - 09PM</p>
                        </div> */}
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="contact-right">
                        <h3>Get In Touch</h3>
                        <p>Your email address will not be published. Required fields are marked *</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label htmlFor="name" >Name   *</label>
                            <input required id='name' className="rounde"{...register("name", { required: true })} />
                            <label htmlFor="email">Username or email  *</label>
                            <input required id='email' {...register("email", { required: true })} />
                            <label htmlFor="sub">Subject  *</label>
                            <input required id='sub' {...register("sub", { required: true })} />
                            <label htmlFor="mess">Message  *</label>
                            <input required id='mess'  {...register("mess")} />
                            <input className='submit-btn btn btn-danger' type="submit" value="Send Message" />
                        </form>
                    </div>
                </Col>
            </Row>
        </Container>

    );
};

export default Contact;