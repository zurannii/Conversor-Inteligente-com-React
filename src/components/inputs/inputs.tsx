import './inputs.css';

type InputProps = {
  label: string;
  value: number | string;
  onChange: (value: number) => void;
  unit?: string;
};

export const Input = ({ label, value, onChange, unit }: InputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    onChange(isNaN(newValue) ? 0 : newValue);
  };

  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <div className="input-wrapper">
        <input
          type="number"
          className="input-field"
          value={value}
          onChange={handleChange}
        />
        {unit && <span className="input-unit">{unit}</span>}
      </div>
    </div>
  );
};

  