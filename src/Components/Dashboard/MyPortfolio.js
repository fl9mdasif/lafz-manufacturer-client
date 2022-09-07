import React from 'react';
import todo from '../../assets/img/portfolio/To-Do-app.png';
import devPortfolio from '../../assets/img/portfolio/Developer-Md-Asif.png';
import famous_footweart from '../../assets/img/portfolio/1.Hero02.png';


const MyPortfolio = () => {
    return (
        <div className=' '>
            <h1 className="py-10 font-bold text-center text-primary sm:text-2xl md:text-4xl lg:text-5xl">MD ASIF AL AZAD</h1>

            <h1>Email: asifalazadami2021@gmail.com</h1>
            <h1>Educational Background: B.Sc. Engineering in CSE - 2st year</h1>

            <div className=" container mx-auto grid lg:grid-cols-2  py-20  sm:grid-cols-1 gap-3 ">
                <div className="ml-10">
                    <div class="card w-96 bg-base-100  shadow-xl">
                        <div class="card-body">
                            <h2 class="text-neutral card-title">MREN STACK DEVELOPMENT</h2>
                            <p>Html, Css, Bootstrap, Tailwind, React, daisiUi, react-router, firebase-authentication, rest API's expressJs, node.js, MongoDD, Github, Heroku </p>
                        </div>
                    </div>
                </div>
                <div className="ml-10 w-75">
                    <div class="mb-1  text-start text-base text-stone-400 font-medium">HTML 95%</div>
                    <div class="mb-1 text-base font-medium text-stone-400">VANILLA CSS 90%</div>
                    <div class="mb-1 text-base font-medium text-stone-400">BOOTSTRAP 96%</div>
                    <div class="mb-1 text-base font-medium text-stone-400">TAILWIND CSS 97%</div>
                    <div class="mb-1 text-base font-medium text-stone-400">VANILLA JAVASCRIPT 89%</div>
                    <div class="mb-1 text-base font-medium text-stone-400">REACT 92%</div>
                    <div class="mb-1 text-base font-medium text-stone-400">NODE JS 85%</div>
                    <div class="mb-1 text-base font-medium text-stone-400">EXPRESSjs 85%</div>
                    <div class="mb-1 text-base font-medium text-stone-400">MongoDB 85%</div>
                </div>
            </div>

            <div className=" grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">

                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={famous_footweart} alt="doctor" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Famous_footweart
                            <div class="badge hover:bg-neutral badge-secondary">NEW</div>
                        </h2>
                        <p> MERN_STACK Based on react js, user can book a appointment, set appoint </p>
                        <div class="card-actions justify-end">
                            <div class="badge hover:bg-neutral badge-outline">React.js</div>
                            <div class="badge hover:bg-neutral badge-outline">React-router</div>
                            <div class="badge hover:bg-neutral badge-outline">daisyUi</div>
                            <div class="badge hover:bg-neutral badge-outline">firebase</div>
                            <div class="badge hover:bg-neutral badge-outline">node.js</div>
                            <div class="badge hover:bg-neutral badge-outline">expressJs</div>
                            <div class="badge hover:bg-neutral badge-outline">mongoDB</div>
                        </div>
                        <button className='btn btn-neutral'>
                            <a href="https://famous-footwear-warehouse.web.app/">Famous_footweart</a></button>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={devPortfolio} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            Developers portfolio
                            <div class="badge hover:bg-neutral badge-secondary">NEW</div>
                        </h2>
                        <p>Developers portfolio MERN_STACK</p>
                        <div class="card-actions justify-end">
                            <div class="badge hover:bg-neutral badge-outline">React.js</div>
                            <div class="badge hover:bg-neutral badge-outline">React-router</div>
                            <div class="badge hover:bg-neutral badge-outline">daisyUi</div>
                            <div class="badge hover:bg-neutral badge-outline">firebase</div>
                            <div class="badge hover:bg-neutral badge-outline">node.js</div>
                            <div class="badge hover:bg-neutral badge-outline">expressJs</div>
                            <div class="badge hover:bg-neutral badge-outline">mongoDB</div>
                        </div>

                        <button className='btn btn-neutral'>
                            <a target='blank' href="https://md-asifs-portfolio.web.app/">Developer Portfolio</a>
                        </button>
                    </div>
                </div>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure><img src={todo} alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">
                            To-do web application
                            <div class="badge hover:bg-neutral badge-secondary">NEW</div>
                        </h2>
                        <p>MERN_STACK mi store is developed by react, responsive, add product, manage product</p>
                        <div class="card-actions justify-end">
                            <div class="badge hover:bg-neutral badge-outline">React.js</div>
                            <div class="badge hover:bg-neutral badge-outline">React-router</div>
                            <div class="badge hover:bg-neutral badge-outline">daisyUi</div>
                            <div class="badge hover:bg-neutral badge-outline">firebase</div>
                            <div class="badge hover:bg-neutral badge-outline">node.js</div>
                            <div class="badge hover:bg-neutral badge-outline">expressJs</div>
                            <div class="badge hover:bg-neutral badge-outline">mongoDB</div>
                        </div>
                        <button className='btn btn-neutral'>
                            <a target='blank' href="https://to-do-app-d4647.web.app/">To-do</a>
                        </button>


                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyPortfolio;