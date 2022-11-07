import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2/dist/sweetalert2';
import useFirebase from '../../../hooks/useFirebase';

const AddNotesDashboard = () => {
    const { user } = useFirebase()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.userName = user.displayName
        data.email = user.email
        data.status = 'Pending'

        fetch(`https://edubro.herokuapp.com/postNotes`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                console.log(result)

                Swal.fire({
                    position: 'top-center',
                    icon: 'Success',
                    title: 'Question Added Successfully',
                    showConfirmButton: true,
                    timer: 4000
                })

                reset()
            });
    };

    return (
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <div className="login-form text-center">
                        <h2 className='mb-5'>Add Notes</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <input className='w-75 mb-3'  {...register("topic", { required: true })} placeholder='Note Topic' /> <br />
                            <input className='w-75 mb-3'  {...register("department", { required: true })} placeholder='Department' /> <br />
                            <input className='w-75 mb-3'  {...register("subject", { required: true })} placeholder='Subject Name' /> <br />
                            <input className='w-75 mb-3' {...register("driveLink", { required: true })} placeholder='Notes Link' /> <br />
                            <button type='submit'>Submit</button>
                        </form>

                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default AddNotesDashboard;