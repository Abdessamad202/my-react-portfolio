// Importing required CSS globally in the entry point (index.js or App.js)
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/index.css';

import { Routes, Route, useLocation } from 'react-router-dom';
import { Home } from './pages/Home.jsx';
import { Tools } from './pages/Tools.jsx';
import { Contact } from './pages/Contact.jsx';
import { Projects } from './pages/Projects.jsx';
import { useEffect } from 'react';
import { Wrapper } from './components/Content.jsx';
import { Profile } from './components/Profile.jsx';
import { Navbar } from './components/Navbar.jsx';

const App = () => {
    const location = useLocation();

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        <>
      <Navbar />
      <div className="container ">
        <div className="row ">
          <Profile />
          <Wrapper>
          <Routes>
                {/* Define the routes in a simpler structure */}
                <Route path="/" element={<Home />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
          </Wrapper>
        </div>
      </div>
    </>
    );
}

export {App};
