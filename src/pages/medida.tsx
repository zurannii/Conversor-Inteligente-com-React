import { useState, useEffect } from "react";
import { Card } from "../components/cards/cards";
import { Input } from "../components/inputs";

export const DistanceConverter = () => {
  const [meters, setMeters] = useState(0);
  const [feet, setFeet] = useState(0);
  const [inches, setInches] = useState(0);
  const [updating, setUpdating] = useState<"meters" | "feet_inches" | null>(null);

  useEffect(() => {
    if (updating === "meters") {
      const totalInches = meters * 39.3701;
      setFeet(Math.floor(totalInches / 12));
      setInches(parseFloat((totalInches % 12).toFixed(2)));
    } else if (updating === "feet_inches") {
      const totalInches = feet * 12 + inches;
      setMeters(parseFloat((totalInches / 39.3701).toFixed(2)));
    }
  }, [meters, feet, inches, updating]);

  return (
    <Card title="Conversor de Distância">
      <Input
        label="Metros (m)"
        value={meters}
        unit="m"
        onChange={(value) => {
          setUpdating("meters");
          setMeters(value);
        }}
      />
      <div className="flex gap-4">
        <div className="w-1/2">
          <Input
            label="Pés (ft)"
            value={feet}
            unit="ft"
            onChange={(value) => {
              setUpdating("feet_inches");
              setFeet(value);
            }}
          />
        </div>
        <div className="w-1/2">
          <Input
            label="Polegadas (in)"
            value={inches}
            unit="in"
            onChange={(value) => {
              setUpdating("feet_inches");
              setInches(value);
            }}
          />
        </div>
      </div>
    </Card>
  );
};
