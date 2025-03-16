import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Products from "./pages/products";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const categories = [
    "smartphones",
    "tablets",
    "musica",
    "carregadores",
    "acessorios",
    "smartwatches",
    "eletronicos",
    "chaveiros",
  ];

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {categories.map((category) => (
          <Route key={category} path={`/${category}`} element={<Products />} />
        ))}
        {categories.map((category) => (
          <Route key={`${category}-brand`} path={`/${category}/:brand`} element={<Products />} />
        ))}
        {categories.map((category) => (
          <Route key={`${category}-product`} path={`/${category}/:brand/:product`} element={<Products />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
