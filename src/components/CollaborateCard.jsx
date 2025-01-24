import { useState } from 'react';
import {Link} from "react-router-dom";

const CollaborateCard = () => {
    const [isArrowVisible, setIsArrowVisible] = useState(true);

    const toggleArrow = () => {
        setIsArrowVisible(!isArrowVisible);
    };

    return (
        <Link to={"/contact"}>
            <div className="collaborate-card mt-4 mb-4">
                <div className="arrow-icon" onClick={toggleArrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" className={'hidden'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className={'showing'} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="7" y1="17" x2="17" y2="7"></line>
                        <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                </div>
                <h1>{"Let's"}<br /><span className="accent-text">collaborate</span></h1>
                <p className="mt-3">
                    Unlock the potential of your product with expert design and development services.
                    {"Let's"} collaborate to create user-centered solutions that not only meet your goals but also delight your users.
                </p>
            </div>
        </Link>
    );
}

export {CollaborateCard};
