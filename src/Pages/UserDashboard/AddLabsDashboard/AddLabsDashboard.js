import React from 'react';
import Swal from 'sweetalert2/dist/sweetalert2';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useFirebase from '../../../hooks/useFirebase';

const AddLabsDashboard = () => {
    const { user } = useFirebase()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.userName = user.displayName
        data.email = user.email
        data.status = 'Pending'

        fetch(`https://edubro.herokuapp.com/postLabs`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                Swal.fire(
                    'Lab Added Successfully.',
                )
                reset()
            });
    };
    return (
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <div className="login-form text-center">
                        <h2 className='mb-5'>Add Labs Report</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='w-75 mb-3'  {...register("labName", { required: true })} placeholder='Note Topic' /> <br />
                            <input className='w-75 mb-3'  {...register("department", { required: true })} placeholder='Department' /> <br />
                            <input className='w-75 mb-3'  {...register("subject", { required: true })} placeholder='Subject Name' /> <br />
                            <input className='w-75 mb-3'  {...register("year", { required: true })} placeholder='Year' /> <br />
                            <input className='w-75 mb-3' {...register("driveLink", { required: true })} placeholder='Lab Report  Link' /> <br />
                            <button type='submit'>Submit</button>
                        </form>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AddLabsDashboard;  
