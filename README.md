NutriAI

Overview

NutriAI is a web application that provides personalized diet recipes based on user-inputted ingredients and dietary preferences. The system leverages the Edamam API for recipe recommendations, YouTube Data API v3 for fetching Strength and cardio training video content, and Firebase Authentication for user management.

Features

Recipe Recommendations: Fetches recipes based on user-specified ingredients and dietary restrictions.

Ingredient-Based Search: Users can input available ingredients to receive relevant recipes.

Nutritional Analysis: Provides nutritional details for each recipe via the Edamam API.

Video Integration: Uses YouTube Data API v3 to suggest related recipe videos.

User Authentication: Firebase Authentication for secure login and personalized experience.

User-Friendly UI: Built with React.js for a seamless experience.

Tech Stack

Frontend: React.js for an interactive user interface.

Backend: Node.js with Express.js for handling API requests.

APIs:

Edamam API: Fetching recipe data and nutritional information.

YouTube Data API v3: Providing video recommendations.

Authentication & Database: Firebase Authentication.

Deployment: AWS for hosting and storage.

Installation & Setup

Prerequisites

Node.js & npm installed

API keys for Edamam and YouTube Data API v3

Firebase project setup for authentication

Steps

Clone the repository:

git clone https://github.com/Aafreen2203/NutriAI_dep.git
cd NutriAI_dep

Install dependencies: npm install

Configure environment variables: Set up Edamam API, YouTube Data API v3 keys, and Firebase credentials.

Create a .env file and add:

1. REACT_APP_EDAMAM_API_KEY=your_edamam_api_key

2. REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key

3. REACT_APP_FIREBASE_API_KEY=your_firebase_api_key

Start the development server: npm start

Deployment

1. Deploy frontend using AWS Amplify or Vercel.

2. Set up API keys securely in the deployment environment.

3. Ensure backend endpoints are accessible if required.

Future Enhancements

  User-Based AI/ML Filtering: Factorization using SVD for collaborative filtering.

  Content-Based Filtering using TF-IDF.

  Hybrid Recommendation System combining both approaches.

  Advanced Filtering for dietary needs.

  User Authentication Enhancements to save preferences.

  Meal Planning Feature for personalized diet tracking.

