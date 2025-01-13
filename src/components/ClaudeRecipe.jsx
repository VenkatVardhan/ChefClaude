import React from 'react'
import ReactMarkdown from 'react-markdown'
export default function ClaudeRecipe(props) {
            console.log(props.data)
  return (
    <section className='suggested-recipe-container ' aria-live='polite'>
        <h2>Chef Claude Recommends :</h2>
        <ReactMarkdown>{props.data}</ReactMarkdown>
</section>

  )
}

      