import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useFirebase from "../../../hooks/useFirebase";
import Swal from 'sweetalert2/dist/sweetalert2';

const AddSyllabusDashboard = () => {
  const { user } = useFirebase();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    data.userName = user.displayName;
    data.email = user.email;
    data.status = "Pending";

    fetch(`http://localhost:5000/postSyllabus`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        Swal.fire(
          'Syllabus Added Successfully.',
        )
        reset();
      });
  };
  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <div className="login-form text-center">
            <h2 className="mb-5">Add Syllabus</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                className="w-75 mb-3"
                {...register("syllabusName", { required: true })}
                placeholder="Department"
              />{" "}
              <br />

              <input
                className="w-75 mb-3"
                {...register("year", { required: true })}
                placeholder="Year"
              />{" "}
              <br />
              <input
                className="w-75 mb-3"
                {...register("driveLink", { required: true })}
                placeholder="Syllabus Link"
              />{" "}
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AddSyllabusDashboard;
