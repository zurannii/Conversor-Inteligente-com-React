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
        <Route path="/moedas" element={<CurrencyConverter />} />
        <Route path="/temperaturas" element={<TemperatureConverter />} />
        <Route path="/DistanceConverter" element={<DistanceConverter />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
