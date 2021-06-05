import React from 'react';

const Datetime = (props)=>{

    return(
        <>
            <div className="date-time">
                <h2 className="date">{props.currentDate}</h2>
            </div>
        </>
    );
};

export default Datetime;