import React from 'react';

const InfoCard = ({img, cardTitle, bgClass, CardText , ...otherProps}) => {
    return (
        <div className={`card lg:card-side pt-4 bg-base-100 shadow-xl ${bgClass} sm:items-center lg:pt-0` }>
            <figure className='md:pl-5 sm:w-[80px] lg:w-[100px]'>
                <img className='' src={img} alt="Album" />
            </figure>
            <div className="card-body pt-4 text-white text-center sm:px-2 lg:text-left lg:pl-4">
                <h2 className="text-[25px] font-bold">{cardTitle}</h2>
                <p className='text-[18px]'>{CardText}</p>
            </div>
        </div>
    );
};

export default InfoCard;