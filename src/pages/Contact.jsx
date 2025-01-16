import {Navbar} from "../components/Navbar.jsx";
import {Profile} from "../components/Profile.jsx";
import ContactMe from "../components/ContactMe.jsx";

const Contact = () => {
    return (
        <>
            <Navbar/>
            <div className="container ">
                <div className="row ">
                    <Profile />
                    <div className="col-lg-8 absolute cln mt-100 mt-lg-120">
                        <ContactMe />
                    </div>
                </div>
            </div>
        </>
    )
}
export  {Contact};