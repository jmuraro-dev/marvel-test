import './Loading.scss'
import React from "react";

function Loading() {
    return (
        <div className="container" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div className="loading__container">
                <div className="loading loading__full__height"></div>
            </div>
        </div>
    )
}

export default Loading