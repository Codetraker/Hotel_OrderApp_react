import React from 'react';
import './H1.css';

function H1(props){
    return(
        <div className='hOne'>
            <h2>{props.children}</h2>
        </div>
    );
};

export default H1;