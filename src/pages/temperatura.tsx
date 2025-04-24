import { useState } from "react";
import { Card } from "../components/cards/cards";
import { Input } from "../components/inputs/inputs";

export const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState(0);
  const fahrenheit = (celsius * 9) / 5 + 32;

  return (
    <Card title="Conversor de Temperaturas">
      <Input label="Celsius (°C)" value={celsius} onChange={setCelsius} unit="°C" />
      <Input label="Fahrenheit (°F)" value={fahrenheit.toFixed(2)} onChange={(v) => setCelsius(((v - 32) * 5) / 9)} unit="°F" />
    </Card>
  );
};

