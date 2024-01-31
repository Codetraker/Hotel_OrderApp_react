import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import './FormOne.css';

function FormOne(){
    const addBillHandler = (event) =>{
        event.preventDefault();
        
    };
    return(
        <Card className='input'>
            <form onSubmit={addBillHandler}>
                <label htmlFor="uid">Unique Order Id:</label>
                <input type="number" id="uid"/>
                <label htmlFor="price">Enter Price:</label>
                <input type="number" id="price" />
                <label htmlFor="dname">Enter Dish:</label>
                <input type="name" id="dname" />
                <label htmlFor="table">Choose a Table:</label>
                <select id="table">
                    <option value="one">Table-1</option>
                    <option value="two">Table-2</option>
                    <option value="three">Table-3</option>
                </select>
                <Button type="submit">Add to Bill</Button>
            </form>
        </Card>
    );
}

export default FormOne;