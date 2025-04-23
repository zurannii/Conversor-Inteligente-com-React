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
      <div className="flex flex-col gap-1 mb-4">
        <label className="text-sm font-medium text-gray-700">{label}</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={value}
            onChange={handleChange}
          />
          {unit && <span className="text-gray-600">{unit}</span>}
        </div>
      </div>
    );
  };
  