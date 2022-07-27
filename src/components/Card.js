import { Link } from "react-router-dom";
import React from 'react';
import PropTypes from 'prop-types';

const Card = ({property}) => {
    const {index, picture, name, address, catagory} = property;
    return (     
        <div id={`card-${index}`} className="card">
        <Link to="/storehome">
        <img src={picture} /> 
        </Link>        
            <div className="details">
                <p className="location">
                    {name}
                    <br />   
                    <br />
                    <br />
                    <br />           
                </p>                                 
            </div>
        </div>        
    )
}

Card.propTypes = {
    property: PropTypes.object.isRequired
}

export default Card;