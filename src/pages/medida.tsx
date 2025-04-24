import { useState } from "react";
import '../styles/medida.css';
import { Card } from "../components/cards/cards";
import { Input } from "../components/inputs/inputs";
import Header from '../components/header/header';

export const DistanceConverter = () => {
  const [metro, setMetro] = useState(1);
  const pe = metro * 3.28084;
  const polegada = metro * 39.3701;

  return (
    <div className="page-container">
      <Header />
      <Card title="Conversor de Medidas">
        <Input label="Metro (m)" value={metro} onChange={setMetro} unit="m" />
        <Input
          label="Pé (ft)"
          value={pe.toFixed(2)}
          onChange={(v) => setMetro(v / 3.28084)}
          unit="ft"
        />
        <Input
          label="Polegada (in)"
          value={polegada.toFixed(2)}
          onChange={(v) => setMetro(v / 39.3701)}
          unit="in"
        />
      </Card>
    </div>
  );
};
