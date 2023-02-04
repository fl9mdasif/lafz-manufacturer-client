import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
// import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../Firebase.init';

const AddReviews = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [user] = useAuthState(auth);
    const { displayName, email } = user;
    // const navigate = useNavigate();

    // submit form handle


    const onSubmit = (reviewData) => {
        const { rate, name, review } = reviewData;
        console.log(reviewData);
        const photoUrl = user?.reloadUserInfo.photoUrl;

        // console.log('img bb link add', result.data.display_url);
        const data = {
            name: name,
            reviewDetails: review,
            ratings: rate,
            image: photoUrl

        }
        // send data to server
        const url = `https://lafz-server.onrender.com/userReview`;
        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast('Your review added to Reviews Page')
            })
        // navigate('/review');

    }
    return (

        <div className="flex h-screen justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <h4 className=" text-center text-4xl text-base1 font-bold">ADD A REVIEW</h4>

                <div className="card-body">
                    {/* input form */}
                    <form className='' onSubmit={handleSubmit(onSubmit)}>
                        {/* Input Name */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                defaultValue={displayName}
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>

                        {/* Input Email */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={email}
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Rate US</span>
                            </label>
                            <select {...register("rate")}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>


                        {/* Input review */}
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Review</span>
                            </label>
                            <textarea placeholder="Share your review" className=" h-42 border-4 "
                                {...register("review", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    }
                                })} />
                            <label className="label">
                                {errors.review?.type === 'required' && <span className="label-text-alt text-red">{errors.review.message}</span>}
                            </label>
                        </div>

                        <div className='items-start'>
                            <input className='  btn w-full max-w-xs bg-base1  text-white' type="submit" value="Submit Review" />

                        </div>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReviews;