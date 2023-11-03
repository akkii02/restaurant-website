
import { useState } from 'react';
import './App.css';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CardProvider from './store/CartProvider';

function App() {
  const [cartIsShow,setCartIsShow] = useState(false);
  const showCartHandler = () => {
    setCartIsShow(true);
  };
  const hideCartHandler = () => {
    setCartIsShow(false);
  };
  return (
    <CardProvider>
      {cartIsShow && <Cart onClose={hideCartHandler}/>}
    <Header onShowCart={showCartHandler}/>
    <main>
      <Meals/>
    </main>
    </CardProvider>
  );
}

export default App;
