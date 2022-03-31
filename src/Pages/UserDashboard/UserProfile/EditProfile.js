import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import useFirebase from '../../../hooks/useFirebase';
import Swal from 'sweetalert2/dist/sweetalert2';

const EditProfile = () => {
    const { user } = useFirebase()
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.complete = true
        fetch(`http://localhost:5000/updateUser`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)
                Swal.fire(
                    'Updated the profile Successfully.',
                )
                reset()
            });
    }
    return (
        <div className='py-5 edit-profile'>
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="login-form text-center">
                            <h2 className='mb-5'>Update Profile Information</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    className='w-75 mb-3' defaultValue={user.displayName}
                                    {...register("displayName", { required: true })}
                                    placeholder='Enter Full Name' />
                                <br />

                                <input
                                    className='w-75 mb-3' defaultValue={user.email}
                                    {...register("email", { required: true })} placeholder='Enter Email' />
                                <br />
                                <input
                                    className='w-75 mb-3' type='url'
                                    {...register("photoURL", { required: true })} placeholder='Your Profile photo link' />
                                <br />
                                <input
                                    className='w-75 mb-3'
                                    {...register("department", { required: true })} placeholder='Enter Department' />
                                <br />
                                <input
                                    className='w-75 mb-3'
                                    {...register("roll", { required: true })} placeholder='Enter Department' />
                                <br />
                                <input
                                    className='w-75 mb-3'
                                    {...register("university", { required: true })} placeholder='Enter Your University' />
                                <br />

                                <button type='submit'>Update Profile</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default EditProfile;