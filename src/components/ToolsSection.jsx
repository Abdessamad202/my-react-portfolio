import {tools} from "../data/toolsData.js";
const ToolsSection = () => {
    return (
        <div className="tools_content">
            <h1 className="header">My Developer Toolkit</h1>
            <div className="row">
                {tools.map((tool, index) => (
                    <div key={index} className="col-md-4 col-6">
                        <div className="card">
                            <img src={tool.imgSrc} alt={tool.alt} className="img-fluid" />
                            <h3>{tool.title}</h3>
                            <p>{tool.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export { ToolsSection };
