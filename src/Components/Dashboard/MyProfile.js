import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { useQuery } from '@tanstack/react-query'
import Loading from '../Shared/Loading';


const MyProfile = () => {
    const [user] = useAuthState(auth);
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const onSubmit = formInfo => {
        const { education, phone, profile_link, district } = formInfo

        const userDetails = {
            email: user.email,
            education: education,
            phone: phone,
            district: district,
            profile_link: profile_link

        }
        console.log('userDetails', userDetails);

        const url = `http://localhost:5000/userCollection`;

        fetch(url, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(userDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data) {
                    toast.success(`Profile updated successfully`)
                }
                else {
                    toast.error(`Already have and with same Name!`)
                }
            });
        reset()
    }


    const { isLoading, error, data: userData } = useQuery(['usersData'], () =>
        fetch(`http://localhost:5000/userCollection`).then(res =>
            res.json())
    )
    if (isLoading) return <Loading />
    if (error) return 'An error has occurred: ' + error.message
    // const { education, phone, profile_link, district } = userData;
    // console.log(user.email);


    let userDetails = [];
    console.log('userDetails', userDetails);


    userData.map(userD => {
        if (userD.email === user.email) {
            // console.log(userD.email, user.email)
            userDetails.push(userD)
        }
        else {
            // eslint-disable-next-line array-callback-return
            return;
        }
    });
    return (
        <div className="container mx-2 flex flex-col justify-center item-center">
            <h1 className="p-3 font-bold text-center text-base1
            sm:text-xl 
            md:text-3xl 
            lg:text-4xl">My Profile</h1>

            <p className='text-center'>Name: {user.displayName}</p>
            <p className='text-center'>Email: {user.email}</p>
            <p className='text-center'>Education: {userDetails[0]?.education}</p>
            <p className='text-center'>Phone: {userDetails[0]?.phone}</p>
            <p className='text-center'>Linkedin: {userDetails[0]?.profile_link}</p>



            {/* modal   */}
            {/* <!-- The button to open modal --> */}
            <div className="flex justify-center">
                <label for="my-modal-3" class="btn  modal-button w-72 bg-base1">Add profile Information</label>
            </div>
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="my-modal-3" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box relative">
                    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h1 className="p-3 font-bold text-center text-base1 sm:text-xl md:text-3xl lg:text-4xl">Add other details</h1>
                    <div className="flex justify-center">
                        <form onSubmit={handleSubmit(onSubmit)}>

                            {/* Input education */}
                            <div className="form-control w-full max-w-xs">
                                <input
                                    // defaultValue={userDetails[0].education}
                                    type="text"
                                    placeholder=" Enter education "
                                    className="input input-bordered w-64 max-w-xs"
                                    {...register("education", {
                                        required: {
                                            value: true,
                                            message: 'Education is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.education?.type === 'required' && <span className="label-text-alt text-red">{errors.education.message}</span>}
                                </label>
                            </div>

                            {/* Input district */}
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="text"
                                    placeholder=" Enter district name"
                                    className="input input-bordered w-64 max-w-xs"
                                    {...register("district", {
                                        required: {
                                            value: true,
                                            message: 'District is Required'
                                        },
                                        pattern: {
                                            value: true,
                                            message: 'Provide Product Description'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.district?.type === 'required' && <span className="label-text-alt text-red">{errors.district.message}</span>}
                                    {errors.district?.type === 'pattern' && <span className="label-text-alt text-red">{errors.district.message}</span>}
                                </label>
                            </div>

                            {/* Input phone Number */}
                            <div className="form-control w-full max-w-xs">
                                <input
                                    type="number"
                                    placeholder=" Enter phone number"
                                    className="input input-bordered w-64 max-w-xs"
                                    {...register("phone", {
                                        required: {
                                            value: true,
                                            message: 'Phone Number is Required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.phone?.type === 'required' && <span className="label-text-alt text-red">{errors.phone.message}</span>}
                                </label>
                            </div>

                            {/* Input Linkedin profile_link */}
                            <div className="form-control w-full max-w-xs">

                                <input
                                    type="text"
                                    placeholder=" Enter linkedin profile_link"
                                    className="input input-bordered w-64 max-w-xs"
                                    {...register("profile_link", {
                                        required: {
                                            value: true,
                                            message: 'profile link is Required'
                                        },
                                        pattern: {
                                            value: true,
                                            message: 'profile link is required'
                                        }
                                    })}
                                />
                                <label className="label">
                                    {errors.profile_link?.type === 'required' && <span className="label-text-alt text-red">{errors.profile_link.message}</span>}
                                    {errors.profile_link?.type === 'pattern' && <span className="label-text-alt text-red">{errors.profile_link.message}</span>}
                                </label>
                            </div>

                            {/* Sbmit Button */}
                            <input className='btn bg-base border-none w-full max-w-xs text-white' type="submit" value="Update profile" />
                        </form>

                    </div>
                </div>
            </div>

        </div >
    );
};

export default MyProfile;