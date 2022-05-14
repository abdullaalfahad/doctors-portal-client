import React from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import Loading from '../Shared/Loading/Loading';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    }
    let errorMessage;

    if (loading || gLoading) {
        return <Loading></Loading>
    }

    if (error || gError) {
        errorMessage = <p className='text-red-500 mb-4'>{error?.message || gError?.message}</p>
    }

    if (user || gUser) {
        console.log(user || gUser);
    }

    return (
        <div className='flex justify-center items-center lg:h-screen'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email" class="input input-bordered w-full max-w-xs" {...register("email", {
                                pattern: {
                                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                    message: 'Invalid email address',
                                }
                            }, {
                                required: 'Provide email address',
                            })} />
                            <label class="label">
                                {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>

                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" {...register("password", {
                                minLength: {
                                    value: 6,
                                    message: 'Password must be 6 characters or longer',
                                }
                            }, {
                                required: 'Provide password',
                            })} />
                            <label className="label mb-3">
                                {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        {errorMessage}
                        <input className='btn w-full max-w-xs' type="submit" value="Login" />
                    </form>

                    <div class="divider">OR</div>
                    <button class="btn btn-outline uppercase" onClick={() => signInWithGoogle()}>Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;