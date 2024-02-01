import React from 'react';
import './List.css';

function List(props){
    return(
        <div className='users'>
            <ul>
                {props.users.map((user) =>(
                    <li key={user.id}>
                        {user.uid}-{user.price}-{user.dish}-{user.table}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;