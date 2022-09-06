import React from 'react';
import { DynamicStar } from 'react-dynamic-star';

const Review = ({ review }) => {
    const { name, reviewDetails, image, ratings } = review;
    console.log('reviewpage', review)
    return (
        <div className="card lg:max-w-lg bg-body shadow-xl" >
            <div className="card-body" >
                <p style={{
                    fontWeight: '200'
                }} >{reviewDetails}</p>
                <div className="flex items-center m-2" >
                    <div className="avatar" >
                        <div className="w-12 rounded-full ring ring-base1 ring-offset-base1 mr-5" >
                            <img src={image} alt="" />
                        </div >
                    </div >

                    <div>
                        <div className='w-10 grid grid-cols-2'>
                            <div>
                                <DynamicStar
                                    height={25}
                                    width={25}
                                    rating={ratings} />
                            </div>

                            {/* <div className='text-xl'>{review.ratings}</div> */}
                        </div>
                        <h4 className='text-xl'>{name}</h4>
                    </div >
                </div >
            </div >
        </div >
    );
};

export default Review;