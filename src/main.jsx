import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

/*
React's Strict Mode can cause components to render twice in development mode.
This is intentional and helps to highlight potential problems in an application during development.
It does not impact production builds.

Here's an excerpt from the [React documentation](https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects):

> Strict mode can’t automatically detect side effects for you, but it can help you spot them by making them a little more deterministic.
This is done by intentionally double-invoking the following functions:
>
> * Class component constructor, render, and shouldComponentUpdate methods
> * Class component static getDerivedStateFromProps method
> * Function component bodies
>
> !!!! Note that this only applies to development mode.
       Lifecycles will not be double-invoked in production mode !!!!

So, if you're seeing the "App Component Rendered" message twice in your console,
it's likely because you're running your app in development mode with Strict Mode enabled.
This is expected behavior and not something to worry about.
*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

//This is variant without <React.StrictMode> will not render twice

//If you want to start measuring performance in your app, pass a function
//to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
