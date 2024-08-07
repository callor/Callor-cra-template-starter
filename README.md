# Simple create-react-app Template

A very simple starter template for [create-react-app](https://create-react-app.dev).

Use this template if you want to try something out quickly and profit from the `create-react-app` ecosystem.

## Usage

```sh
npx create-react-app myproject --template @callor/cra-template-simple
cd myproject
npm start
```

The template creates the following code structure

`src/index.js`:

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals(console.log);
```

`src/App.jsx`:

```js
const App = () => <h1>Hello React Start App</h1>;
export default App;
```
