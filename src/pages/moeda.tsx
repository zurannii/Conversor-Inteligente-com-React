import { useState, useEffect } from "react";
import { Card } from "../components/cards/cards";
import { Input } from "../components/inputs";
import "../styles/moeda.css"; 

export const CurrencyConverter = () => {
  const exchangeRate = 5.12; 
  const [real, setReal] = useState(0);
  const [dollar, setDollar] = useState(0);
  const [updating, setUpdating] = useState<"real" | "dollar" | null>(null);

  useEffect(() => {
    if (updating === "real") {
      setDollar(parseFloat((real / exchangeRate).toFixed(2)));
    } else if (updating === "dollar") {
      setReal(parseFloat((dollar * exchangeRate).toFixed(2)));
    }
  }, [real, dollar, updating]);

  return (
    <div className="currency-page">
      <Card title="Conversor de Moeda">
        <div className="inputs-wrapper">
          <Input
            label="Reais (R$)"
            value={real}
            unit="BRL"
            onChange={(value) => {
              setUpdating("real");
              setReal(value);
            }}
          />
          <Input
            label="Dólares (US$)"
            value={dollar}
            unit="USD"
            onChange={(value) => {
              setUpdating("dollar");
              setDollar(value);
            }}
          />
        </div>
      </Card>
    </div>
  );
};

