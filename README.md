# NutriAI 🥗🤖

## **Overview**
NutriAI is an intelligent web application that provides personalized diet recipes and fitness content based on user preferences and ingredients.

## **Project Links**
- **GitHub Repository**: https://github.com/Aafreen2203/NutriAI_dep
- **Live Demo**: [Your Deployment Link](https://nutriai.aafreen.live/)

## **Key Features**
- **Recipe Recommendations**: Generate personalized recipes
- **Ingredient-Based Search**: Find recipes using available ingredients
- **Nutritional Analysis**: Detailed nutritional information
- **Video Integration**: Fitness and recipe tutorial videos
- **User Authentication**: Secure Firebase login
- **Responsive Design**: Seamless experience across devices

## **Tech Stack**
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **APIs**: 
  - **Edamam API**: Recipe and nutrition data
  - **YouTube Data API v3**: Fitness and recipe videos
- **Authentication**: Firebase
- **Deployment**: AWS

## **Prerequisites**
```bash
# Required Installations
- Node.js (v14+ recommended)
- npm (v6+)
- Git
-API keys for Edamam and YouTube Data API v3
-Firebase project setup for authentication
```
## **Steps**

**Clone the repository:**
```bash
git clone https://github.com/Aafreen2203/NutriAI_dep.git
cd NutriAI_dep
```
**Install dependencies:**
```bash
npm install
```
**Configure environment variables:** Set up Edamam API, YouTube Data API v3 keys, and Firebase credentials.

## **Create a .env file and add:**
```bash
1. REACT_APP_EDAMAM_API_KEY=your_edamam_api_key

2. REACT_APP_YOUTUBE_API_KEY=your_youtube_api_key

3. REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
```

## **Start the development server:**
```bash
npm start
```
## **Deployment**

1. Deploy frontend using AWS Amplify or Vercel.

2. Set up API keys securely in the deployment environment.

3. Ensure backend endpoints are accessible if required.

## **Future Enhancements**

  - User-Based AI/ML Filtering: Factorization using SVD for collaborative filtering.

  - Content-Based Filtering using TF-IDF.

  - Hybrid Recommendation System combining both approaches.

  - Advanced Filtering for dietary needs.

  - User Authentication Enhancements to save preferences.

  - Meal Planning Feature for personalized diet tracking.

