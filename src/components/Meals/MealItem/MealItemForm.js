import React,{useContext} from 'react'
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../../store/cart-context';
const MealItemForm = (props) => {
  const cartCtx = useContext(CartContext);
  const addItemToCart = (event) => {
    event.preventDefault();
    const quantity = document.getElementById("amount_" + props.id).value;
    // console.log({...props.item})
    cartCtx.addItem({ ...props.item, quantity: quantity });
  };

  return (
    <>
      <form>
        <div className={classes.form}>
          <div className={classes.inputContainer}>
            <Input
              label="amount"
              input={{
                id: "amount_" + props.id,
                type: "number",
                min: "1",
                max: "5",
                defaultValue: "1",
              }}
            />
          </div>
          <button onClick={addItemToCart}>+ Add</button>
        </div>
      </form>
    </>
  );
};

export default MealItemForm;