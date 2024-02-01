import React from 'react';
import './List.css';
import Button from '../UI/Button';


function List(props){
    return(
        <div className='users'>
            <ul>
                {props.users.map((user) =>(
                    <li key={user.id}>
                        Order_Id-{user.id} - Price-{user.price} - Dish_Name-{user.dish} - Table_No.-{user.table}
                        <Button btype="delete" type="delete">Delete</Button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;