import React from 'react'

export default function IngredientsList({ingredients,handleGetRecipe,ref}) {
        const ingredientsList=ingredients.map((item)=>{
        return <li key={item}>{item}</li>})
  return (
<section>
        <div className='ingredients-list-container'>
        <h2>Ingredients on Hand :</h2>
        <ul className="ingredients-list">{ingredientsList}</ul>
        </div>
        {ingredients.length>3?<div className='get-recipe-container'>
            <div ref={ref}>
                <h3>Ready for Recipe ?</h3>
                <p>Generate Recipe from your list of ingredients</p>
            </div>
            <button onClick={handleGetRecipe}>
                Get a recipe
            </button>
        </div>:null}
    </section>
  )
}
