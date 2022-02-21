
import './App.css';
import AddProducts from './components/AddProducts';
import Cart from './components/Cart';
import Products from './components/Products';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import HomeComponent from './components/HomeComponent';
import SignInComponent from './components/SignInComponent';
import SignUpComponent from './components/SignUpComponent';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <AddProducts />
        <Products />
        <br />
        <br />
        <br />
        <Cart /> */}
        <Route exact path='/home' component={HomeComponent} />
        <Route exact path='/' component={SignInComponent} />
        <Route exact path='/sign_up' component={SignUpComponent} />
        <Route exact path='/add_product' component={AddProducts}/>
        <Route exact path='/products' component={Products} />
        <Route exact path='/cart' component={Cart} />
      </div>

    </Router>
  );
}

export default App;
