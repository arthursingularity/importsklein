import { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';
import ProductComponent from './components/ProductComponent';

function App() {
  const location = useLocation();

  useEffect(() => {
    // Quando a rota mudar, o scroll será resetado para o topo
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/smartphones' element={<Products />} />
        <Route path='/smartphones/:brand' element={<Products />} />
        <Route path="/smartphones/:brand/:product" element={<Products />} />
        <Route path='/fones' element={<Products />} />
        <Route path='/fones/:brand' element={<Products />} />
        <Route path='/fones/:brand/:product' element={<Products />} />
        <Route path='/carregadores' element={<Products />} />
        <Route path='/carregadores/:brand' element={<Products />} />
        <Route path='/carregadores/:brand/:product' element={<Products />} />
        <Route path='/acessorios' element={<Products />} />
        <Route path='/acessorios/:brand' element={<Products />} />
        <Route path='/acessorios/:brand/:product' element={<Products />} />
        <Route path='/smartwatches' element={<Products />} />
        <Route path='/smartwatches/:brand' element={<Products />} />
        <Route path='/smartwatches/:brand/:product' element={<Products />} />
        <Route path='/som' element={<Products />} />
        <Route path='/som/:brand' element={<Products />} />
        <Route path='/som/:brand/:product' element={<Products />} />
        <Route path='/eletronicos' element={<Products />} />
        <Route path='/eletronicos/:brand' element={<Products />} />
        <Route path='/eletronicos/:brand/:product' element={<Products />} />
        <Route path='/chaveiros' element={<Products />} />
        <Route path='/chaveiros/:brand' element={<Products />} />
        <Route path='/chaveiros/:brand/:product' element={<Products />} />
      </Routes>
    </div>
  );
}

export default App;
