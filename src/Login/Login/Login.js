
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../../hooks/useAuth';


const Login = () => {

    const { loginWithGoogle, loginWithOwnEmailAndPass } = useAuth()

    //Location & navigate
    const location = useLocation()
    const navigate = useNavigate()

    //handle google login here
    const handleGoogleLogin = () => {
        loginWithGoogle(location, navigate);
    };



    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        // console.log(data.email)
        loginWithOwnEmailAndPass(data.email, data.password, location, navigate)
    }
    return (
        <div className='py-5'>
            <Container>
                <Row>
                    <Col md={{ span: 8, offset: 2 }}>
                        <div className="login-form text-center">
                            <h2 className='mb-5'>Login to Edu Bro</h2>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input
                                    className='w-75 mb-3'
                                    {...register("email", { required: true })}
                                    placeholder='Enter Email' />
                                <br />

                                <input
                                    className='w-75 mb-3'
                                    {...register("password", { required: true })} placeholder='Enter Password' />
                                <br />

                                <button type='submit'>Login</button>
                            </form>
                            <div className='login-meta mt-4'>
                                <p>New to Edu Bro? <Link to={'/register'}><span className='login-links'>Create a free Account</span></Link></p>
                                <span style={{ cursor: "pointer" }} onClick={handleGoogleLogin} className='fs-4'>Continue with <FcGoogle className='fs-2 google' /></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;