import {Navbar} from "../components/Navbar.jsx";
import {Profile} from "../components/Profile.jsx";
import {ToolsSection} from "../components/ToolsSection.jsx";
import {CollaborateCard} from "../components/CollaborateCard.jsx";

const Tools = () => {
    return (
        <>
            <Navbar/>
            <div className="container ">
                <div className="row ">
                    <Profile />
                    <div className="col-lg-8 absolute cln mt-100 mt-lg-120">
                        <ToolsSection />
                        <CollaborateCard />
                    </div>
                </div>
            </div>
        </>
    )
}
export  {Tools};