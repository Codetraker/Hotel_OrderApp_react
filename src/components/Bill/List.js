import React from 'react';
import './List.css';
import Button from '../UI/Button';


function List(props){
    return(
            <ul>
                {props.users.map((user) =>(
                    <li key={user.id}>
                        <strong>ID-</strong>{user.id} - <strong>Price-</strong>Rs.{user.price}.00 - <strong>Dish-</strong>{user.dish} - <strong>Table-</strong>{user.table}
                        <Button btype="delete" type="delete">Delete</Button>
                    </li>
                ))}
            </ul>
    );
};

export default List;