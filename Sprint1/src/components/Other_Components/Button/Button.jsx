import React from 'react';


const Btn = props => {
    return (
        <button className={props.class} type="submit"><img className="img-icon" src={props.image}/>{props.text}</button>
    )        
};

export default Btn;