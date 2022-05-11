import React from 'react';

const InfoCard = ({ img, title, description, bgClass }) => {
    return (
        <div class={`card lg:card-side bg-accent shadow-xl text-white ${bgClass}`} >
            <figure className='pl-5'><img src={img} alt="Album" /></figure>
            <div class="card-body ">
                <h2 class="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div >
    );
};

export default InfoCard;