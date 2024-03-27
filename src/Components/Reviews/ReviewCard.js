import React from 'react';

const ReviewCard = ({review}) => {
    return (
        <div className="review-card w-[300px] h-full  lg:w-[370px] rounded border-2 border-gray-950 p-3 cursor-pointer">
            <div className="grid grid-cols-12 gap-2 items-center">
                <div className="col-span-3">
                    <img  src={review.image} alt=""
                         className="rounded-full object-cover"
                    />
                </div>
                <div className="col-span-9">
                    <h1 className=" text-lg lg:text-2xl font-bold font-['Montserrat'] capitalize">{review.name}</h1>
                    <div className="flex  gap-5 items-center ">
                        <p className="text-base font-medium font-['Montserrat'] leading-relaxed">{review.country}</p>
                    </div>

                    <div >
                        <div className="flex  gap-2 items-center">
                            <img src="/images/star-group.svg" className="h-4" alt=""/>

                            <p
                                className=" text-sm font-medium font-['Montserrat'] leading-relaxed"> | 2
                                Days ago
                            </p>
                        </div>
                    </div>
                </div>

            </div>


            <div
                className="  text-base font-medium font-['Montserrat'] leading-relaxed pt-3">
                <p>
                    {review.message?.slice(0, 350)}{review.message.length>350?"...":""}
                </p>

            </div>

        </div>
    );
};

export default ReviewCard;