import React from "react";

interface ExperienceProps {
  minExp: number;
  setMinExp: React.Dispatch<React.SetStateAction<number>>;
}

const Experience = ({ minExp, setMinExp }: ExperienceProps) => {
  const handleExpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setMinExp(value);
    }
  };

  return (
    <div className="border border-gray-400 hover:bg-blue-700 hover:border-blue-500 hover:shadow-lg p-2 text-gray-100 bg-blue-600 rounded-md">
      <label htmlFor="minExp" className="block mb-1">
        Minimum Experience
      </label>
      <input
        type="number"
        id="minExp"
        value={minExp}
        onChange={handleExpChange}
        className="w-full px-2 py-1 text-black rounded"
        min="0"
      />
    </div>
  );
};

export default Experience;
