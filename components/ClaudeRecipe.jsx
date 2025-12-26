import { forwardRef } from "react"
import ReactMarkdown from "react-markdown"

const ClaudeRecipe = forwardRef((props, ref) => {
    return (
        <section className="suggested-recipe-container" aria-live="polite" ref={ref}>
            <h2>PantryPal Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
})

export default ClaudeRecipe