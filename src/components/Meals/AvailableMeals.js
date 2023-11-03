import React from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card"
import MealItem from "./MealItem/MealItem";


const indianFoodMenu = [
      {
        id: 1,
        name: "Palak Paneer",
        description:
          "Creamy spinach curry with cubes of paneer (Indian cottage cheese) and aromatic spices.",
        price: 180,
      },
      {
        id: 2,
        name: "Aloo Gobi",
        description:
          "A dry dish made with potatoes (aloo) and cauliflower (gobi), cooked with onions, tomatoes, and spices.",
        price: 90,
      },
      {
        id: 3,
        name: "Dal Tadka",
        description:
          "Yellow lentils (dal) cooked and tempered with mustard seeds, cumin, garlic, onions, and tomatoes.",
        price: 8.49,
      },
      {
        id: 4,
        name: "Vegetable Biryani",
        description:
          "Fragrant rice dish cooked with mixed vegetables and biryani spices, served with raita.",
        price: 250,
      },
      {
        id: 5,
        name: "Chana Masala",
        description:
          "Spicy and tangy chickpea curry cooked with onions, tomatoes, and a blend of Indian spices.",
        price: 100,
      },
    ];
    

function AvailableMeals() {
  const mealsList = indianFoodMenu.map((meal) => (
    <MealItem
    id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
