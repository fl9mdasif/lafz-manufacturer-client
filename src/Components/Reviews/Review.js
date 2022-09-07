import React from 'react';
import { DynamicStar } from 'react-dynamic-star';

const Review = ({ review }) => {
    const { name, reviewDetails, image, ratings } = review;
    // console.log('reviewpage', review)
    return (
        <div class="container w-72 px-5 py-2 mx-auto">
            <div class="flex flex-wrap -m-4">
                <div class="mb-6 p-4">
                    <div class="h-full text-center">
                        <p class="leading-relaxed">{reviewDetails}</p>
                        <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-1 mb-2"></span>
                        <div className='flex justify-center item-center'>
                            <div className=''>
                                <img alt="testimonial"
                                    class="w-12 h-12  object-cover object-center rounded-full ring ring-base1 ring-offset-base1 inline-block"
                                    src={image} />
                            </div>
                            <div className="ml-3">
                                <DynamicStar
                                    height={25}
                                    width={25}
                                    rating={ratings} />
                                <h2 class="text-gray-900 text-start font-medium title-font r text-sm">{name}</h2>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Review;