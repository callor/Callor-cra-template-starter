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
import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const root
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

`src/App.jsx`:

```js
export default function App() {
  return <>React</>;
}
```
