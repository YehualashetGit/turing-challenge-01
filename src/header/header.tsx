import React from 'react';
import './header.css';

const Header = () =>{

    return(
        <header x-data="{ isOpen: false }">
            <section className="header-section bg-blue p-20 flex items-center" >
                <div>
                    <p className="header-title text-xl text-white tracking-wider text-white-300">Juniors Make IT work.</p>
                    <p className="header-main mt-1 text-white">Hire and invest in highly skilled juniors now. </p>
        
                    <div className="header-button post-offer-button flex justify-center mt-4 w-auto shadow-md">
                        <button className="px-8 py-2 text-lg font-medium text-white transition-colors duration-300 transform rounded hover:bg-blue-500">Post Offer Now</button>
                    </div>
                </div>
            </section>
        </header>
    
    )
}


export default Header;