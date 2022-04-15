import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
    }
    const handleRegister = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const name = event.target.name.value;
        const password = event.target.password.value;
    }
    return (
        <div className='register-form'>
            <h2 className='text-primary text-center pb-2'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' required /><br />
                <input type="email" name="email" id="" placeholder=' Your Email' required /><br />
                <input type="password" name="password" id="" placeholder='Your password' required /><br />
                <input type="submit" value="Register" />
            </form>
            <p>Already have an account ?<Link to="/login" className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;