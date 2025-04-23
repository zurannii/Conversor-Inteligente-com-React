import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Sobre from './pages/Sobre';
import { CurrencyConverter } from './pages/moeda';
import { TemperatureConverter } from './pages/temperatura';
import { DistanceConverter } from './pages/medida';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/conversor-moeda" element={<CurrencyConverter />} />
        <Route path="/conversor-temperatura" element={<TemperatureConverter />} />
        <Route path="/conversor-distancia" element={<DistanceConverter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
