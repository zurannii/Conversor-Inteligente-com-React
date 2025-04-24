import { useState } from "react";
import '../styles/moeda.css'
import { Card } from "../components/cards/cards";
import { Input } from "../components/inputs/inputs";
import Header from '../components/header/header' 


export const CurrencyConverter = () => {
  const [real, setReal] = useState(1);
  const dolar = real / 5;
  const euro = real / 6;

  return (
    <div className="currency-container">
      <Header /> { }
    <Card title="Conversor de Moedas">
      <Input label="Real (R$)" value={real} onChange={setReal} unit="R$" />
      <Input label="Dólar (US$)" value={dolar.toFixed(2)} onChange={(v) => setReal(v * 5)} unit="$" />
      <Input label="Euro (€)" value={euro.toFixed(2)} onChange={(v) => setReal(v * 6)} unit="€" />
    </Card>
    </div>
    
  );
};
