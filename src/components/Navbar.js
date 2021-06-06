import React from 'react';

const Navbar = (props)=>{

    return(
        <>
            <div className="navbar">
                <div className="nav-item">
                    <h1 className="logo">Weather App</h1>
                    <div className="from-item">
                        <input type="text" placeholder="Enter City Name" className="input-field" value={props.inputVaue} onChange={props.searchfunc}/>
                        <button className="search-button" onClick={props.buttonFunc}>Search</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;