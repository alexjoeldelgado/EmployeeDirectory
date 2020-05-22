import React from 'react';
// import "../styles/Header.css";

function Header () {
    return (
        <div className="header" style={{marginLeft: "30%"}}>
            <h1>Employee Directory</h1>
            <p>Click on buttons to sort by category, or use the search box to narrow results by first or last name!</p>
        </div>
    )
};

export default Header;