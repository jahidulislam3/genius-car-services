import React from 'react';
import google from '../../../picture/social/google.png';
import facebook from '../../../picture/social/facebook.png';
import github from '../../../picture/social/github.png';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const Sociallogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if (loading || loading1) {
        return <Loading></Loading>
    }
    if (error || error1) {
        errorElement = <div>
            <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
        </div>
    }

    if (user || user1) {
        navigate('/home');
    }

    return (
        <div>
            <div className='d-flex align-item-center'>
                <div style={{ height: '1px', marginRight: '10px' }} className='bg-primary w-50 mt-4'></div>
                <p className='mt-2'>or</p>
                <div style={{ height: '1px', marginLeft: '10px' }} className='bg-primary w-50 mt-4'></div>
            </div>
            {errorElement}
            <div>
                <button
                    onClick={() => signInWithGoogle()}
                    className='btn btn-info w-50 mx-auto d-block my-2'>
                    <img src={google} alt="" /> <span className='px-2'>Google Sign In</span></button>
                <button className='btn btn-info w-50 mx-auto d-block my-2'>
                    <img src={facebook} alt="" /> <span className='px-2'>Facebook Sign In</span></button>
                <button
                    onClick={() => signInWithGithub()} className='btn btn-info w-50 mx-auto d-block my-2'>
                    <img src={github} alt="" /> <span className='px-2'>Github Sign In</span></button>
            </div>
        </div>
    );
};

export default Sociallogin;