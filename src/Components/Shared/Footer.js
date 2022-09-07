import React from 'react';
import Navlogo from '../../assets/img/Lafz_logo_black.png'
import '../../App.css'
const Footer = () => {
    return (
        <>
            <footer class="bg-base body-font mt-3">
                <div class=" flex gap-x-1 justify-around px-5 pt-5   md:items-center lg:items-star md:flex-row md:flex-nowrap flex-wrap flex-col ">

                    <div class="w-80 pl-6 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a href='/' class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <a href='/' className=" bg- pl-3 font-bold text-head normal-case text-xl" >
                                <img style={{
                                    height: '35px',
                                    width: '75px',
                                    objectFit: 'contain',
                                    marginLeft: '10px',
                                    // objectFit: 'cover'
                                }} alt=''
                                    src={Navlogo} />
                            </a >
                            <span class="ml-3 text-xl">

                            </span>

                        </a>
                        <p class="mt-2  px-6 text-sm text-gray-500">
                            Good shoes take you places - Give a shoe, Shoes provide access to education and an end to poverty.
                            <br />
                            shop: Banani, 1213 Dhaka, Bangladesh
                            Dedicated Support: +8801707525010
                        </p>
                    </div>

                    {/* Links  */}
                    <div class=" flex flex-grow justify-center lg:pl-10 flex-wrap md -mb-10 md:mt-0 mt-10 md:text-left text-center">

                        <div class="lg:w-1/4 md:w-1/3 w-full px-4">
                            <h2 class="title-font inline-block font-medium text-gray-900 tracking-widest text-sm mb-3">MENUS</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a href='/' class="text-gray-600 hover:text-gray-800">Home</a>
                                </li>
                                <li>
                                    <a href='/' class="text-gray-600 hover:text-gray-800">Shop</a>
                                </li>
                                <li>
                                    <a href='/' class="text-gray-600 hover:text-gray-800">Add Shoe</a>
                                </li>
                                <li>
                                    <a href='/' class="text-gray-600 hover:text-gray-800">My Items</a>
                                </li>
                            </nav>
                        </div>

                        <div class="lg:w-1/4 fhidden md:w-1/3 w-full px-4">
                            <h2 class="title-font inline-block font-medium text-gray-900 tracking-widest text-sm mb-3">MENUS</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a href='/' class="text-gray-600 hover:text-gray-800">Home</a>
                                </li>
                                <li>
                                    <a href='/' class="text-gray-600 hover:text-gray-800">Shop</a>
                                </li>
                                <li>
                                    <a href='/' class="text-gray-600 hover:text-gray-800">Add Shoe</a>
                                </li>
                                <li>
                                    <a href='/' class="text-gray-600 hover:text-gray-800">My Items</a>
                                </li>
                            </nav>
                        </div>

                        <div class="lg:w-1/4 fhidden md:w-1/3 w-full px-4">
                            <h2 class="title-font inline-block font-medium text-gray-900 tracking-widest text-sm mb-3">MENUS</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a href='/' class="text-gray-600 hover:text-gray-800">Home</a>
                                </li>
                                <li>
                                    <a href='/' class="text-gray-600 hover:text-gray-800">Shop</a>
                                </li>
                                <li>
                                    <a href='/' class="text-gray-600 hover:text-gray-800">Add Shoe</a>
                                </li>
                                <li>
                                    <a href='/' class="text-gray-600 hover:text-gray-800">My Items</a>
                                </li>
                            </nav>
                        </div>


                    </div>

                </div>

                {/* bottom footer  */}
                <div class="bg-base1">
                    <div class="container mx-auto py-2 mt-2 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p class="text-white text-sm text-center sm:text-left"> Copyright © 2022 | developed by
                            <a target="blank" href="https://md-asifs-portfolio.web.app/"
                                class=" font-bold  pl-2"
                                style={{ color: "#6e6eff", textDecoration: "underline" }}>fl9mdasif</a>

                        </p>
                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a target='blank' href='https://www.facebook.com/devmdasifofficial' class="text-white">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a target='blank' href='https://www.facebook.com/devmdasifofficial' class="ml-3 text-white">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a href='https://www.github.com/fl9mdasif' class="ml-3 text-white">
                                <box-icon type='logo' color='white' name='github'></box-icon>
                            </a>
                            <a target='blank' href='/' class="ml-3 text-white">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div >
            </footer >
        </ >
    );
};

export default Footer;