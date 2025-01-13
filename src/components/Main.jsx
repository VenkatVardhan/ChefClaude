import ClaudeRecipe from './ClaudeRecipe'
import IngredientsList from './IngredientsList'
import React from 'react'
import {getRecipeFromMistral} from '../ai'
export default function Main() {
    const [ingredients,setIngredients] = React.useState([])

    const [recipe,setRecipe]=React.useState("");
    const recipeSection =React.useRef(null)
    console.log(recipeSection.current)
    React.useEffect(()=>{
      if(recipe!=="" && recipeSection.current!==null){
        recipeSection.current.scrollIntoView({behavior:"smooth"})}

    },[recipe])

  

    function handleSubmit(formData){
        const newIngredient= formData.get("ingredient")
        setIngredients(prevIngredients=>[...prevIngredients,
            newIngredient

        ])
    }
    async function handleGetRecipe(){

        const recipeData=await (getRecipeFromMistral(ingredients))
        setRecipe(recipeData)
    }
    
  return (
    <main>
    <form className="form-ingredients" action={handleSubmit}>
            <input aria-label="new ingredients" name ="ingredient" className="text-box" type="text" placeholder="e.g pepper"/>
            <button className="add" type="submit">Add Ingredient</button>

    </form>
    {ingredients.length>0 && <IngredientsList  ingredients={ingredients} handleGetRecipe={handleGetRecipe} ref={recipeSection}/>}
    {recipe && <ClaudeRecipe data={recipe} />}
    </main>
  )
}
