import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {
        console.log(user);
    }

    return (
        <div style={{ height: '80vh' }} className='flex justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>

                    <div class="divider">OR</div>
                    <button class="btn btn-outline uppercase" onClick={() => signInWithGoogle()}>Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;