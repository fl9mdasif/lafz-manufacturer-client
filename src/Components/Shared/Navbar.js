import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';
import '../../App.css';
import Navlogo from '../../assets/img/Lafz_logo_black.png'

const Navbar = () => {

    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth)
    }

    const dummyUserPhoto = 'https://cdn-icons-png.flaticon.com/512/149/149071.png'
    const photoUrl = user?.reloadUserInfo.photoUrl;
    // const userName = user?.displayName
    // console.log(user);
    // console.log(photoUrl)

    const menuItems =
        <>
            <li><a href='/'>Home</a></li>
            <li><Link to='/shop' >Shop</Link></li>
            <li><Link to='/blogs' >Blog</Link></li>
            {/* <li><Link to='/prac' >Practice</Link></li> */}
            {user && <li><Link to='/addshoe' >AddShoe</Link></li>}
            {user && <li><Link to='/manageshoes' >ManageShoes</Link></li>}
        </>

    return (
        <div className="navbar bg-base top-0 text-white ">

            <div className="navbar-start">
                {/* mobile dropdown  */}

                <div className="dropdown bg-base">
                    <label tabIndex="0" className="btn  btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label >
                    <ul tabIndex="0" style={{ backgroundColor: '#912059' }}
                        className="menu bg-red-300 menu-compact dropdown-content mt-3 p-2 shadow text- rounded-box w-52" >
                        {menuItems}

                    </ul >
                </div >
                {/* mobile dropdown btn   */}
                <a href="/" className="  pl-3 font-bold text-black normal-case text-xl" >
                    <img style={{
                        height: '40px',
                        // width: '100%',
                        marginLeft: '10px',
                        objectFit: 'cover'
                    }}
                        alt='' src={Navlogo} />
                </a >
            </div >
            <div className="navbar-center hidden lg:flex " >
                <ul className="menu  text-black menu-horizontal" >
                    {menuItems}
                </ul >
            </div >
            <div className="navbar-end  pr-4">
                {/* <p className="">USER</p> */}

                {/* DropDown user photo and login dropdown end   */}
                <div class="dropdown  dropdown-end">
                    <label tabindex="0" class=" m-1">
                        {
                            user ?

                                <div class="avatar online">
                                    <div class=" rounded-full hover13 column">
                                        <figure>
                                            <img className=' userImg' style={{
                                                height: '42px',
                                                width: '42px',
                                                borderRadius: '50%',
                                                padding: '2px',
                                                border: '2px solid #c5c5c5 '

                                            }}
                                                referrerpolicy="no-referrer"
                                                src={photoUrl ? photoUrl : dummyUserPhoto} alt="*" />
                                        </figure>
                                    </div>
                                </div>
                                :
                                <div className="avatar offline">
                                    <div className=' rounded-full'>
                                        <img className='userImg' style={{
                                            height: '42px',
                                            width: '42px',
                                            borderRadius: '50%',
                                        }} src={dummyUserPhoto} alt="" />
                                    </div>
                                </div>
                        }
                    </label>

                    {/* dropdown list   */}
                    <ul style={{ backgroundColor: '#912059' }} tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        {user && <li > <Link to='/myitems' >My Items</Link></li>}

                        {
                            user ?
                                <li>

                                    <span onClick={handleSignOut} className="flex items-center text-text ">
                                        Sign Out
                                        <span> <img style={{
                                            height: '42px',
                                            width: '42px',
                                            borderRadius: '50%'
                                        }}
                                            referrerpolicy="no-referrer"
                                            src={photoUrl ? photoUrl : dummyUserPhoto} alt="" />  </span>
                                    </span>

                                </li>
                                :
                                <li><Link to='/login' >Login</Link></li>
                        }
                    </ul>
                </div >

            </div >

        </div >

    );
};

export default Navbar;