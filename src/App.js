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
          <Route path='/fones' element={<Products/>} />
          <Route path='/carregadores' element={<Products/>} />
          <Route path='/acessorios' element={<Products/>} />
          <Route path='/smartwatches' element={<Products/>} />
          <Route path='/som' element={<Products/>} />
          <Route path='/eletronicos' element={<Products/>} />
          <Route path='/chaveiros' element={<Products/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;