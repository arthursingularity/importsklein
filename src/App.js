import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Products from './pages/products';

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/smartphones' element={<Products />} />
          <Route path='/smartphones/:brand' element={<Products />} />
          <Route path='/produtos/fones' element={<Products/>} />
          <Route path='/produtos/carregadores' element={<Products/>} />
          <Route path='/produtos/acessorios' element={<Products/>} />
          <Route path='/produtos/smartwatches' element={<Products/>} />
          <Route path='/produtos/som' element={<Products/>} />
          <Route path='/produtos/eletronicos' element={<Products/>} />
          <Route path='/produtos/chaveiros' element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;