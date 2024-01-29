import React from "react";

function FormOne(){
    const submitHandler = (event) =>{
        event.preventDefault();
        console.log(event);
        const userdata = 
    };
    return(
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="uid">Unique Order Id:</label>
                <input type="number" id="uid" />
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
                <input type="submit" value="Add to bill"/>
            </form>
        </div>
    );
}

export default FormOne;