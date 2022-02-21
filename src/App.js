
import './App.css';
import AddProducts from './components/AddProducts';
import Cart from './components/Cart';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
     <AddProducts/>
     <Products/>
     <br/>
     <br/>
     <br/>
     <Cart/>
    </div>
  );
}

export default App;
