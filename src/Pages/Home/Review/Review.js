import React from 'react';

const Review = ({ review }) => {
    const { name, say, location, img } = review;
    return (
        <div className="card bg-base-100 shadow-xl border">
            <div className="card-body">
                <p className=''>{say}</p>
                <div className="flex items-center mt-4">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={img} />
                        </div>
                    </div>
                    <div className=''>
                        <h2 className="card-title">{name}</h2>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;