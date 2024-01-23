import React from 'react';

const Review = ({ review }) => {
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p className='text-[18px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, voluptates quo incidunt harum minus mollitia!</p>
                <div className="flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-secondary ring-offset-base-100 mr-5">
                            <img src={review.img} alt=""/>
                        </div>
                    </div>
                    <div>
                        <h4 className='text-xl font-semibold'>{review.name}</h4>
                        <p >{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;