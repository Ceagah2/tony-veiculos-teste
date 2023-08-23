import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarDetails from './pages/CarDetails';
import Home from './pages/Home';
import PageNotFound from './pages/NotFoundError';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id" element={<CarDetails />} />
        <Route path="/404Error" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
