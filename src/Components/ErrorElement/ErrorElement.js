import React from 'react';
import './ErrorElement.css'
import { Link } from 'react-router-dom';

const ErrorElement = () => {
    return (
        <div>
            <section>
                <header className='error_bg_img' >
                    <h1 className='text-[#000] font-semibold font-sans  text-5xl text-center py-[158px]' >404 Page Not Found</h1>
                </header>

                <div className='w-[858px] mx-auto justify-center items-center text-center'>
                    <div className='text-[300px]  text-info error_number leading-none'>404</div>
                    <p className='text-[#000] font-semibold font-sans  text-5xl'>Oops! Page not found</p>
                    <p className='text-[#7c7c7c] font-semibold font-sans py-8 w-[685px] mx-auto '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis congue pretium faucibus leo nisl nulla pharetra nullam.</p>
                    <Link to={'/'} className='bg-[#0FE3AF] px-[53px] py-[17px] font-sans font-semibold ' >Back to Home</Link>
                </div>
            </section>
        </div >
    );
};

export default ErrorElement;