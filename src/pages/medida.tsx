import { useState } from "react";
import { Card } from "../components/cards/cards";
import { Input } from "../components/inputs/inputs";

export const DistanceConverter = () => {
  const [metro, setMetro] = useState(1);
  const centimetro = metro * 100;
  const milimetro = metro * 1000;

  return (
    <Card title="Conversor de Medidas">
      <Input label="Metro (m)" value={metro} onChange={setMetro} unit="m" />
      <Input label="Centímetro (cm)" value={centimetro.toFixed(2)} onChange={(v) => setMetro(v / 100)} unit="cm" />
      <Input label="Milímetro (mm)" value={milimetro.toFixed(2)} onChange={(v) => setMetro(v / 1000)} unit="mm" />
    </Card>
  );
};
