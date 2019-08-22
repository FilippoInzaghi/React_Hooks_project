import React, {useState} from 'react';

import IngredientForm from './IngredientForm';
import IngredientList from './IngredientList';
import Search from './Search';

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);

  const addIngedientHandler = ingredient => {
    setUserIngredients(prevIngredients => [...prevIngredients, {id: Math.random().toString(), ...ingredient}]);
  }

  return (
    <div className="App">
      <IngredientForm onAddIngredient={addIngedientHandler}/>

      <section>
        <Search />
        <IngredientList ingredients={userIngredients}/>
      </section>
    </div>
  );
}

export default Ingredients;
