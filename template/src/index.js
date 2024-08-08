import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// 앱에서 성과 측정을 시작하려면 결과를 기록하는 함수를 전달합니다(예: reportWebVitals(console.log))
// 또는 분석 엔드포인트로 전송합니다. 자세히 알아보기: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
