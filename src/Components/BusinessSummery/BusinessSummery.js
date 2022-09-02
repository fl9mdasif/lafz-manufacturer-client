import React from 'react';
import './BusinessSummery.styles.css'

const BusinessSummery = () => {
    return (
        <div className="BusinessSummery relative ">
            <div className="flex absoluteBS  justify-center">
                <div className="summery-container flex flex-col justify-center ">
                    <div className="flex justify-center"><box-icon type='solid' color='#912059' size='' name='gift'></box-icon></div>
                    <div><p className="bs-p text-center uppercase">Products</p></div>
                    <div><h1 className='bs-h1 text-center block'>100<span>+</span></h1></div>
                </div>
                <div className="summery-container flex flex-col justify-center ">
                    <div className="flex justify-center"><box-icon type='solid' color='#912059' size='' name='user'></box-icon></div>
                    <div><p className="bs-p text-center uppercase">Users</p></div>
                    <div><h1 className='bs-h1 text-center block'>100<span>+</span></h1></div>
                </div>
                <div className="summery-container flex flex-col justify-center ">
                    <div className="flex justify-center"><box-icon type='solid' color='#912059' size='' name='truck'></box-icon></div>
                    <div><p className="bs-p text-center uppercase">Deliveries</p></div>
                    <div><h1 className='bs-h1 text-center block'>100<span>+</span></h1></div>
                </div>
                <div className="summery-container flex flex-col justify-center ">
                    <div className="flex justify-center"><box-icon type='solid' color='#912059' size='' name='star'></box-icon></div>
                    <div><p className="bs-p text-center uppercase">Review</p></div>
                    <div><h1 className='bs-h1 text-center block'>100<span>+</span></h1></div>
                </div>
            </div>

        </div>
    );
};

export default BusinessSummery;