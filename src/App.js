import React, {useState} from 'react';
import './App.css';
import FormOne from './components/Bill/FormOne';
import H1 from './components/UI/H1';
import List from './components/Bill/List';
import OutputBox from './components/UI/OutputBox';

function App() {
  const [tableOne, setTableOne] = useState([]);
  const [tableTwo, setTableTwo] = useState([]);
  const [tableThree, setTableThree] = useState([]);

  const addUserHandler = (uId,uPrice,uDish,uTable) =>{ 
    const newUser = {id:uId, price:uPrice, dish:uDish, table:uTable};

    switch (uTable) {
        case '1':
        setTableOne((prev)=>[...prev, newUser]);
        break;
        case '2':
        setTableTwo((prev)=>[...prev, newUser]);
        break;
        case '3':
        setTableThree((prev)=>[...prev, newUser]);
        break;
    
        default:
        break;
      }
    };

  return (
    <div>
      <H1>Add Order</H1>
      <FormOne onAddUser={addUserHandler}/>
      <H1>Orders Detail</H1>
      <OutputBox >
        <List users={tableOne}/>
      </OutputBox>
      {/* <OutputBox table='2'>
        <List users={tableTwo}/>
      </OutputBox>
      <OutputBox table='3'>
        <List users={tableThree}/>
      </OutputBox> */}
    </div>
  );
};

export default App;
