# Simple Starter create-react-app Template

A very simple starter template for [create-react-app](https://create-react-app.dev).  
이 템플릿은 매우 심플한 프로젝트를 만들어 줍니다.

Use this template if you want to try something out quickly and profit from the `create-react-app` ecosystem.  
`create-react-app` 을 사용하여 빠르게 프로젝트를 시작하려면 이 템플릿을 사용하세요.

## Usage : 프로젝트 생성

```sh
npx create-react-app myproject --template starter
cd myproject
npm start
```

The template creates the following code structure  
이 템플릿은 다음의 파일들을 자동생성합니다.

`public/index.html`:

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <title>Hello React</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

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
