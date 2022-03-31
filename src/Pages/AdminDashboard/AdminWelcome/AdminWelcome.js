import React from 'react';
import { Col, Row } from 'react-bootstrap';
import useFirebase from '../../../hooks/useFirebase';

const AdminWelcome = () => {
    const { user } = useFirebase()
    console.log(user);
    return (
        <div className='dashboard-welcome'>
            <Row>
                <Col md={6}>
                    <h2>Hello, <span className='fs-1'>{user.displayName}</span></h2>
                    <p className='fs-4'>Welcome to Edu Bro. Admin Panel</p>
                </Col>
                <Col md={6}>
                    <div className="dashboard-image">
                        <img src={user.displayName ? user.photoURL : 'https://i.ibb.co/Xsnkx3L/user.png'} alt="user" />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AdminWelcome;