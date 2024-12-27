
import React from 'react'
export default function Main() {
    const [ingredients,setIngredients] = React.useState([])
  
    const items=ingredients.map((item)=>{
        return <li key={item}>{item}</li>})
    function handleSubmit(formData){
        const newIngredient= formData.get("ingredient")
        setIngredients(prevIngredients=>[...prevIngredients,
            newIngredient

        ])
    }
    
  return (
    <main>
    <form className="form-ingredients" action={handleSubmit}>
            <input aria-label="new ingredients" name ="ingredient" className="text-box" type="text" placeholder="e.g pepper"/>
            <button className="add" type="submit">Add Ingredient</button>

    </form>
    <section>
        <h2>Ingredients on Hand :</h2>
        <ul className="ingredients-list">{items}</ul>
        <div className='get-recipe-container'>
            <div>
                <h3>Ready for Recipe ?</h3>
                <p>Generate Recipe from your list of ingredients</p>
            </div>
            <button>
                Get a recipe
            </button>
        </div>
    </section>

      
    </main>
  )
}
