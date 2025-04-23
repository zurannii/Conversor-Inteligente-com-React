import { useState, useEffect } from "react";
import { Card } from "../components/cards/cards";
import { Input } from "../components/inputs";

export const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState(0);
  const [fahrenheit, setFahrenheit] = useState(32);
  const [updating, setUpdating] = useState<"celsius" | "fahrenheit" | null>(null);

  useEffect(() => {
    if (updating === "celsius") {
      setFahrenheit(parseFloat(((celsius * 9) / 5 + 32).toFixed(2)));
    } else if (updating === "fahrenheit") {
      setCelsius(parseFloat((((fahrenheit - 32) * 5) / 9).toFixed(2)));
    }
  }, [celsius, fahrenheit, updating]);

  return (
    <Card title="Conversor de Temperatura">
      <Input
        label="Celsius (°C)"
        value={celsius}
        unit="°C"
        onChange={(value) => {
          setUpdating("celsius");
          setCelsius(value);
        }}
      />
      <Input
        label="Fahrenheit (°F)"
        value={fahrenheit}
        unit="°F"
        onChange={(value) => {
          setUpdating("fahrenheit");
          setFahrenheit(value);
        }}
      />
    </Card>
  );
};
