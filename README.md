# PantryPal

PantryPal is an intelligent recipe assistant that helps users generate custom recipes based on available ingredients. By leveraging the OpenRouter API and the DeepSeek V3 model, the application provides creative culinary solutions efficiently and cost-effectively.

## Features

*   **AI-Powered Recipe Generation**: Utilizes advanced large language models to create recipes tailored to specific ingredients.
*   **Ingredient Management**: Allows users to input and manage their current pantry inventory.
*   **Cost-Effective Architecture**: Integrated with DeepSeek V3 via OpenRouter to minimize API usage costs while maintaining high-quality output.
*   **Responsive User Interface**: Built with React to ensure a seamless experience across devices.

## Technology Stack

*   **Frontend**: React 19, Vite
*   **AI Integration**: OpenAI SDK, OpenRouter, DeepSeek V3
*   **Styling**: CSS Modules / Standard CSS

## Getting Started

### Prerequisites

*   Node.js (v14 or higher)
*   npm or yarn

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/nanabani/pantry-pal.git
    cd pantry-pal
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Configure Environment Variables:
    *   Create a `.env` file in the root directory.
    *   Add your OpenRouter API key:
        ```
        VITE_OPENROUTER_API_KEY=your_api_key_here
        ```

4.  Start the development server:
    ```bash
    npm run dev
    ```

## License

This project is open source and available under the [MIT License](LICENSE).