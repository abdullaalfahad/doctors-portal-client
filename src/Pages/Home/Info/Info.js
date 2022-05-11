import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import clock from '../../../assets/icons/clock.svg'

const Info = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
            <InfoCard img={clock}></InfoCard>
            <InfoCard></InfoCard>
            <InfoCard></InfoCard>
        </div>
    );
};

export default Info;