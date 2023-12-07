import React from "react";

const LogRegWrapper = ({ children }) => {
    return <div className="pageContainer">
        <div className="left-section">
            <div className="grad"></div>
            <img src="/logo.png"></img>
        </div>{children}</div>;
};
export default LogRegWrapper;