//1) Import the React  And ReactDOM Libraries

import React from "react"; // Library that defines what a component is and how multiple components work together
import ReactDOM from "react-dom/client"; // Library that knows how to get a component to show up in the browser
import App from './App';
// 2) Get references to the div with root ID root
const element = document.getElementById('root');

// 3) Tell React to take control of the root element
const root = ReactDOM.createRoot(element);

// 4) Render the App component to the root element
root.render(<App />)

