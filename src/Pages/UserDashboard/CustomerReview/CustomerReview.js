import React from "react";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import useFirebase from "../../../hooks/useFirebase";

const CustomerReview = () => {
    const { user } = useFirebase()

    //react hook form
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);

        fetch("https://edubroist.onrender.com/review", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire("Review Added Successfully !");
                    reset();
                }
            });
    };

    return (
        <>
            <Container>
                <Row>
                    <div className="col-12 col-lg-6 mx-auto">
                        <div className="form-container py-5">
                            <Form
                                onSubmit={handleSubmit(onSubmit)}
                                className="shadow-lg px-2 px-md-5 py-3 text-cyan"
                            >
                                <h2 className=" text-center mb-2 abril-font">
                                    Give Us An Honest Review, Please !
                                </h2>
                                <p className="text-cyan text-center mb-5">
                                    Your review helps us to improve our operating system and
                                    provide you better services.
                                </p>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridName">
                                        <Form.Label>Your Name</Form.Label>
                                        <Form.Control
                                            value={user?.displayName}
                                            className="text-secondary fw-semi-bold"
                                            readOnly
                                            {...register("name", { required: true })}
                                            {...(errors.name && <span>Name is required</span>)}
                                        />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridEmail">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            value={user?.email}
                                            className="text-secondary fw-semi-bold"
                                            readOnly
                                            {...register("email", { required: true })}
                                            {...(errors.email && <span>Email is required</span>)}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group
                                        className="mb-3 "
                                        controlId="exampleForm.ControlTextarea1"
                                    >
                                        <Form.Label>Comment</Form.Label>
                                        <Form.Control
                                            className="shadow-none"
                                            as="textarea"
                                            rows={3}
                                            placeholder="Write something here..."
                                            {...register("comment", { required: true })}
                                        />
                                    </Form.Group>
                                </Row>
                                <Row className="mb-3">
                                    <Form.Group as={Col} controlId="formGridRating">
                                        <Form.Label>
                                            Give Us A Rating (1 is the wrost , 5 is the best)
                                        </Form.Label>
                                        <select
                                            required
                                            className="form-control shadow-none"
                                            {...register("rating")}
                                        >
                                            <option>Select Rating</option>
                                            <option value="1">1</option>
                                            <option value="1.5">1.5</option>
                                            <option value="2">2</option>
                                            <option value="2.5">2.5</option>
                                            <option value="3">3</option>
                                            <option value="3.5">3.5</option>
                                            <option value="4">4</option>
                                            <option value="4.5">4.5</option>
                                            <option value="5">5</option>
                                        </select>
                                    </Form.Group>
                                </Row>

                                <div className="text-center">
                                    <Button
                                        type="submit"
                                        className="px-4 py-2 fw-bold btn-light-green shadow-none"
                                    >
                                        <i className="fas fa-clipboard-check text-warning me-2"></i>
                                        Review Us
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default CustomerReview;
