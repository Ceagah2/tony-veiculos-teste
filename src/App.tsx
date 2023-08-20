import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CarDetails from './pages/CarDetails';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car/:id" element={<CarDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
