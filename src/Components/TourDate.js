import React from 'react';

const TourDate = (props) => {
    return ( 
        <li>{props.date} <span className="red">{props.spot}</span></li>
     );
}
 
export default TourDate;