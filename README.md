# React Challenge #001 for Jungle Devs

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

**Challenge goal**: The aim of this challenge is to give a general idea of how React works and how you can use it to create simple responsive applications. You'll be implementing a simplified version of Hapu’s ‘Become a Nanny Share Host’ view. The elements that you will apply include:

-   JSX
-   Components, props, and state
-   Lifecycle Methods
-   Responsive design with CSS media-queries
-   API calls
-   Error handling
-   Loading states
-   SEO & accessibility
-   A/B tests
-   Production builds

**Final accomplishment**: By the end of this challenge, you'll have a production-ready build.

## Resources

**Design**: [Figma](https://www.figma.com/file/iBxoiuoSXy3SiOAnwXo2Np/Frontend-%E2%80%93-Challenge-1)

## A/B tests

Mix panel service has been used for a/b tests, but the existing structure can be conveniently integrated with other services.

It is required to have an environment variable:

```javascript
REACT_APP_MIXPANEL_TOKEN;
```

The variable below can be used:

```javascript
REACT_APP_MIXPANEL_TOKEN = b9eec9d315c9fcc93bfcce5b7865f9f7;
```

## Available Scripts

### After cloning the repository with

```bash
git clone git@github.com:juniorlob/Hapu-Challenge.git
```

In the project directory, you can run:

```bash
 yarn start
```

This runs the app in development mode. To view it in the browser, open [http://localhost:3000](http://localhost:3000).

The page will reload if you make edits and you will also see any lint errors in the console.

```bash
yarn build
```

This command builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes. Your app is ready to be deployed!

## 🧐 What's inside?

A quick look at the top libraries used in this standout project.

-   ReactJS
-   Redux
-   Redux Saga
-   Axios
-   TypeScript
-   Styled components
-   Eslint

## Challenge requirements

✅ Components, props, and state\
✅ Lifecycle Methods\
✅ Responsive design with CSS media-queries\
✅ API calls\
✅ Error handling\
✅ Loading states\
✅ SEO & accessibility\
✅ A/B tests\
✅ Production builds\
✅ Have a build ready for production.

## Dependencies

The project uses these dependencies:

```json
{
  "dependencies": {
    "@marvelapp/react-ab-test": "^3.1.0",
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^12.1.0",
    "@testing-library/user-event": "^13.2.1",
    "@types/remote-redux-devtools": "^0.5.5",
    "axios": "^0.21.4",
    "dotenv": "^10.0.0",
    "eslint-plugin-json": "^3.1.0",
    "immer": "^9.0.6",
    "jest-styled-components": "^7.0.5",
    "mixpanel": "^0.13.0",
    "polished": "^4.1.3",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-markdown": "^7.0.1",
    "react-redux": "^7.2.5",
    "react-router-dom": "^5.3.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.1",
    "redux-saga": "^1.1.3",
    "remove": "^0.1.5",
    "styled-components": "^5.3.1",
    "styled-tools": "^1.7.2",
    "typescript": "^4.1.2",
    "web-vitals": "^1.0.1"
  }
}
```
