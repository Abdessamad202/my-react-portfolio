import {Navbar} from "../components/Navbar.jsx";
import {Profile} from "../components/Profile.jsx";
import {HeroSection} from "../components/HeroSection.jsx";
import {ToolsSection} from "../components/ToolsSection.jsx";
import {CollaborateCard} from "../components/CollaborateCard.jsx";

const Home = () => {
    return (
        <>
            <Navbar/>
            <div className="container ">
                <div className="row ">
                    <Profile />
                    <div className="col-lg-8 absolute cln mt-100 mt-lg-120">
                        <HeroSection/>
                        <ToolsSection />
                        <CollaborateCard />
                    </div>
                </div>
            </div>
        </>
    )
}
export {Home}