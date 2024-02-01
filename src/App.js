import React, {useState} from 'react';
import './App.css';
import FormOne from './components/Bill/FormOne';
import H1 from './components/UI/H1';
import List from './components/Bill/List';
import OutputBox from './components/UI/OutputBox';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uId,uPrice,uDish,uTable) =>{
    setUserList((prev)=>{
      return [...prev, {id:uId, price:uPrice, dish:uDish, table:uTable}];
    });
  }

  return (
    <div>
      <H1>Add Order</H1>
      <FormOne onAddUser={addUserHandler}/>
      <H1>Orders Detail</H1>
      <OutputBox>
        <List users={userList}/>
      </OutputBox>
    </div>
  );
}

export default App;
