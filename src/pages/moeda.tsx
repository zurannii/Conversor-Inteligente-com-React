import { useState } from "react";
import { Card } from "../components/cards/cards";
import { Input } from "../components/inputs/inputs";

export const CurrencyConverter = () => {
  const [real, setReal] = useState(1);
  const dolar = real / 5;
  const euro = real / 6;

  return (
    <Card title="Conversor de Moedas">
      <Input label="Real (R$)" value={real} onChange={setReal} unit="R$" />
      <Input label="Dólar (US$)" value={dolar.toFixed(2)} onChange={(v) => setReal(v * 5)} unit="$" />
      <Input label="Euro (€)" value={euro.toFixed(2)} onChange={(v) => setReal(v * 6)} unit="€" />
    </Card>
  );
};
