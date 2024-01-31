import './App.css';
import FormOne from './components/Bill/FormOne';
import H1 from './components/UI/H1';
import OutputBox from './components/UI/OutputBox';


function App() {
  return (
    <div className="App">
      <H1>Add Order</H1>
      <FormOne />
      <H1>Orders Detail</H1>
      <OutputBox />
    </div>
  );
}

export default App;
