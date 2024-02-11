import React from "react";

export default function HeaderBar() {

    const todayDate = new Date()
    todayDate.setFullYear(1983);

    return (
        <div className="header-bar">
            New York Times - 
        {` ${todayDate.toDateString()}`}
        </div>
    )
}