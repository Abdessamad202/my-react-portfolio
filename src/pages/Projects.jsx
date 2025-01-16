import {Navbar} from "../components/Navbar.jsx";
import {Profile} from "../components/Profile.jsx";
import {CollaborateCard} from "../components/CollaborateCard.jsx";
import {Templates} from "../components/Templates.jsx";

const Projects = () => {
    return (
        <>
            <Navbar/>
            <div className="container ">
                <div className="row ">
                    <Profile />
                    <div className="col-lg-8 absolute cln mt-100 mt-lg-120">
                        <Templates />
                        <CollaborateCard />
                    </div>
                </div>
            </div>
        </>
    )
}
export  {Projects};