import React from "react";

const NotFound = () => (
    <div className="page row expanded">
        <div className="content small-12 row">
            <div className="small-12 space-4 columns"/>
            <div className="small-0 medium-2 large-3 space-4 columns"/>
            <img alt="pic" src={require("../media/images/404.png")} className="small-12 medium-8 large-6 columns"/>
            <div className="small-0 medium-2 large-3 space-4 columns"/>
        </div>
    </div>
);

export default NotFound;