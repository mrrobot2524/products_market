import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Team from "./pages/Team.jsx";
import Posts from "./pages/Posts.jsx";
import Reports from "./pages/Reports.jsx";
import Products from "./pages/Products.jsx";
import ProductDeteils from "./components/ProductDeteils/ProductDeteils.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/posts" element={<Posts />} />
        <Route path="/team" element={<Team />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDeteils />} />
        <Route path="/reports" element={<Reports />} />
      </Route>
    </Routes>
  </BrowserRouter>,
);
