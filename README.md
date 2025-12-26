# PantryPal 🍳

**PantryPal** is an intelligent recipe assistant that helps you cook with what you have. Simply enter the ingredients in your pantry, and our AI chef (powered by **DeepSeek V3**) will generate a custom recipe just for you.

## Features ✨

*   **AI-Powered Recipes**: Generates creative and delicious recipes based on your available ingredients.
*   **Smart Ingredient Management**: Easy-to-use list to track what you have on hand.
*   **Fast & Cost-Effective**: Uses the OpenRouter API with the DeepSeek V3 model for high performance at a low cost.
*   **Modern UI**: Built with React and tailored for a clean user experience.

## Tech Stack 🛠️

*   **React 19**
*   **Vite**
*   **OpenAI SDK** (configured for OpenRouter)
*   **DeepSeek V3 Model**

## Getting Started 🚀

1.  **Clone the repository**
2.  **Install dependencies**:
    ```bash
    npm install
    ```
3.  **Set up your API Key**:
    *   Create a `.env` file in the root directory.
    *   Add your OpenRouter key: `VITE_OPENROUTER_API_KEY=your_key_here`
4.  **Run the app**:
    ```bash
    npm run dev
    ```

## License

This project is open source and available under the [MIT License](LICENSE).