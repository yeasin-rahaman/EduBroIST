import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useFirebase from '../../../hooks/useFirebase';
import Swal from 'sweetalert2/dist/sweetalert2';

const AddBlogsDashboard = () => {

    const [previewSource, setPreviewSource] = useState('')

    const { user } = useFirebase()

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {


        if (!previewSource) return;



        data.blogImg = previewSource
        data.userName = user.displayName
        data.email = user.email
        data.status = 'Pending'


        fetch(`http://localhost:5000/postBlogs`, {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                Swal.fire(
                    'Blog Posted Successfully.',
                )
                reset()
            });
    };




    const handleFineInputChange = (e) => {
        const file = e.target.files[0];
        previewFile(file);

    };


    const previewFile = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setPreviewSource(reader.result);

        };
    };

    return (
        <Container>
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <div className="login-form text-center">
                        <h2 className='mb-5'>Add Blogs</h2>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <input className='w-75 mb-3' {...register("topic", { required: true })} placeholder='Your Topic' /> <br />
                            <input className='w-75  mb-3' {...register("blog", { required: true })} placeholder='Blog' /> <br />
                            <input className='w-75 mb-3 form-input'
                                type='file' onChange={handleFineInputChange} />  <br />
                            <button type='submit'>Submit</button>
                        </form>

                    </div>
                    {
                        previewSource && (
                            <img src={previewSource} style={{ height: '300px' }} alt="" />
                        )
                    }
                </Col>
            </Row>
        </Container>
    );
};

export default AddBlogsDashboard;