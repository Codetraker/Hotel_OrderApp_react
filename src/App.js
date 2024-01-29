import logo from './logo.svg';
import './App.css';
import FormOne from './components/FormOne';
import OrderList from './components/OrderList';

function App() {
  return (
    <div className="App">
      <FormOne />
      <h1>Orders</h1>
      <OrderList />
    </div>
  );
}

export default App;
