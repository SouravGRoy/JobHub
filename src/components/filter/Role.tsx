import React from "react";
import { JobData } from "@/data";

interface LocationProps {
  data: JobData[];
  selectedLocations: string[];
  setSelectedLocations: React.Dispatch<React.SetStateAction<string[]>>;
}

const Location = ({
  data,
  selectedLocations,
  setSelectedLocations,
}: LocationProps) => {
  const uniqueLocations = Array.from(
    new Set(data.map((item) => item.location))
  );

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const location = event.target.name;
    setSelectedLocations((prevSelected) => {
      if (prevSelected.includes(location)) {
        return prevSelected.filter((item) => item !== location);
      } else {
        return [...prevSelected, location];
      }
    });
  };

  return (
    <div>
      <h3 className="mb-2 font-semibold text-white">Location</h3>
      <ul className="w-48 text-sm font-medium text-white rounded-lg dark:bg-gray-700 dark:border-gray-600">
        {uniqueLocations.map((location, index) => (
          <li className="w-full rounded-t-lg dark:border-gray-600" key={index}>
            <div className="mb-1">
              <input
                type="checkbox"
                name={location}
                id={location}
                checked={selectedLocations.includes(location)}
                onChange={handleCheckboxChange}
              />
              <label
                htmlFor={location}
                className="w-full py-1 ms-2 text-sm text-white font-thin dark:text-gray-300"
              >
                {location}
              </label>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-white">
        Selected Locations: {selectedLocations.join(", ")}
      </div>
    </div>
  );
};

export default Location;
