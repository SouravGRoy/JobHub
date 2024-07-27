import React from "react";

interface PayProps {
  minPay: number;
  setMinPay: React.Dispatch<React.SetStateAction<number>>;
}

const Pay = ({ minPay, setMinPay }: PayProps) => {
  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value)) {
      setMinPay(value);
    }
  };

  return (
    <div className="flex-col p-4 border border-gray-800 hover:bg-blue-700 hover:border-blue-500 hover:shadow-lg text-gray-100 bg-blue-600 rounded-md">
      <label className="block mb-2" htmlFor="minPay">
        Minimum Salary (in INR)
      </label>
      <div className="flex space-x-4">
        <div>
          <label htmlFor="minPay" className="block mb-1">
            Min
          </label>
          <input
            type="number"
            id="minPay"
            value={minPay}
            onChange={handleMinChange}
            className="w-full px-2 py-1 text-black rounded"
            min="0"
          />
        </div>
      </div>
    </div>
  );
};

export default Pay;
