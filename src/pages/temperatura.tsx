import { useState } from "react";
import '../styles/temperatura.css'
import { Card } from "../components/cards/cards";
import { Input } from "../components/inputs/inputs";
import Header from '../components/header/header' 


export const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState(0);
  const fahrenheit = (celsius * 9) / 5 + 32;

  return (
    <div className="temperature-container">
      <Header /> { }
    <Card title="Conversor de Temperaturas">
      <Input label="Celsius (°C)" value={celsius} onChange={setCelsius} unit="°C" />
      <Input label="Fahrenheit (°F)" value={fahrenheit.toFixed(2)} onChange={(v) => setCelsius(((v - 32) * 5) / 9)} unit="°F" />
    </Card>
    </div>
  );
};
export default TemperatureConverter;