import React from 'react';

const Review = ({ review }) => {
    const { name, say, location, img } = review;
    return (
        <div class="card bg-base-100 shadow-xl border">
            <div class="card-body">
                <p className=''>{say}</p>
                <div class="flex items-center mt-4">
                    <div class="avatar">
                        <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={img} />
                        </div>
                    </div>
                    <div className=''>
                        <h2 class="card-title">{name}</h2>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;