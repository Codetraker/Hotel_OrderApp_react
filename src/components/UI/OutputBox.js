import React from 'react';
import './OutputBox.css';

function OutputBox(props){
    return(
        <div className='container'>
            <div className='outOne'>
                <div className='hfour'>
                    <h4>Table-1</h4>
                </div>
                <div>{props.children}</div>
            </div>
            <div className='outTwo'>
                <div className='hfour'>
                    <h4>Table-2</h4>
                </div>
                <div>{props.children}</div>
            </div>
            <div className='outThree'>
                <div className='hfour'>
                    <h4>Table-3</h4>
                </div>
                <div>{props.children}</div>
            </div>
        </div>
    );
}

export default OutputBox;