import React,{useState} from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import './FormOne.css';

function FormOne(props){

    const [enteredUId, setEnteredUId] = useState('');
    const [enteredPrice, setEnteredPrice] = useState('');
    const [enteredDish, setEnteredDish] = useState('');
    const [selectedTable, setSelectedTable] = useState('0');

    const addBillHandler = (event) =>{
        event.preventDefault();
        if(enteredDish.trim().length === 0 || enteredUId.trim().length === 0 || enteredPrice.trim().length === 0){
            return;
        }
        if(+enteredUId<1){
            return;
        }
        if(+enteredPrice<1){
            return;
        }
        if(selectedTable==='0'){
            return;
        }

        props.onAddUser(enteredUId, enteredPrice, enteredDish, selectedTable);

        setEnteredUId('');
        setEnteredPrice('');
        setEnteredDish('');
        setSelectedTable('0');
    };

    const uidChangeHandler = (event) =>{
        setEnteredUId(event.target.value);
    };
    const priceChangeHandler = (event) =>{
        setEnteredPrice(event.target.value);
    };
    const dishChangeHandler = (event) =>{
        setEnteredDish(event.target.value);
    };
    const tableChangeHandler = (event) =>{
        setSelectedTable(event.target.value);
    };

    return(
        <Card className='input'>
            <form onSubmit={addBillHandler}>
                <label htmlFor="uid">Unique Order Id:</label>
                <input type="number" id="uid" value={enteredUId} onChange={uidChangeHandler}/>
                <label htmlFor="price">Enter Price:</label>
                <input type="number" id="price" value={enteredPrice} onChange={priceChangeHandler}/>
                <label htmlFor="dname">Enter Dish:</label>
                <input type="name" id="dname" value={enteredDish} onChange={dishChangeHandler}/>
                <label htmlFor="table">Choose a Table:</label>
                <select id="table" value={selectedTable} onChange={tableChangeHandler}>
                    <option value='0'>--Choose a Table--</option>
                    <option value='1'>Table-1</option>
                    <option value='2'>Table-2</option>
                    <option value='3'>Table-3</option>
                </select>
                <Button type="submit">Add to Bill</Button>
            </form>
        </Card>
    );
}

export default FormOne;