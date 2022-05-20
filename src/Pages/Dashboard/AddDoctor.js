import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <div>
            <h1>Add Doctor</h1>
            <div className=''>
                <form onSubmit={handleSubmit(onSubmit)} className="">
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Doctor Name" className="input input-bordered w-full max-w-xs" {...register("name", {
                            required: 'Provide doctor name',
                        })} />
                        <label className="label">
                            {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="Doctor Email" className="input input-bordered w-full max-w-xs" {...register("email", {
                            required: 'Provide doctor email address',
                        }, {
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'Invalid email address',
                            }
                        })} />
                        <label className="label">
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        </label>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Specialty</span>
                        </label>
                        <select {...register("specialty")} required class="select w-full max-w-xs">
                            {services.map(service => <option key={service._id} value={service.name}>{service.name}</option>)}
                        </select>
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="file" className="input input-bordered w-full max-w-xs" {...register("image", {
                            required: 'Provide image',
                        })} />
                        <label className="label">
                            {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                        </label>
                    </div>

                    <input className='btn w-full max-w-xs' type="submit" value="Add" />
                </form>
            </div>
        </div>
    );
};

export default AddDoctor;