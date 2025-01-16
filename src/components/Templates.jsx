import {projects} from "../data/projectData.js";
const Templates = () => {
    return (
        <div className="templates__content">
            <h1 className="header">My Design Templates</h1>
            <div className="row g-4">
                {projects.map((project, index) => (
                    <div key={index} className="col-lg-6">
                        <div className="card">
                            <div className={`preview-window ${project.className}`}></div>
                            <div className="card-body">
                                <h2 className="card-title">{project.title}</h2>
                                <p className="card-subtitle">{project.subtitle}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export {Templates};
