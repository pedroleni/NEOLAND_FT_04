import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { UserContextProvider } from "./contexts/userContext.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Content from "./pages/Content.jsx";
import Protected from "./components/Protected.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/">
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/content"
              element={
                <Protected>
                  <Content />
                </Protected>
              }
            />
          </Route>
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
