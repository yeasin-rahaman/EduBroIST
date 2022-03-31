import React from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2/dist/sweetalert2';

const MakeAdmin = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        // console.log(data)
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Admin Added Successfully!',
                        showConfirmButton: false,
                        timer: 4000
                    })
                } else {
                    alert('Oops! Not working')
                }
            })

        reset()
    }
    return (
        <div className="login-form text-center">
            <h2 className='mb-5'>Make Admin Role</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    className='w-75 mb-3'
                    {...register("email", { required: true })}
                    placeholder='Enter Email to make admin' />
                <br />

                <button type='submit'>Make Admin</button>
            </form>
        </div>
    );
};

export default MakeAdmin;