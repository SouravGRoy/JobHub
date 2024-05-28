import { JobData } from "@/data";
import React from "react";

interface JobFetchProps {
  data: JobData[];
  selectedRoles: string[]; // Add selectedRoles prop
  setSelectedRoles: React.Dispatch<React.SetStateAction<string[]>>; // Add setSelectedRoles prop
}

const JobFetch = ({ data, selectedRoles, setSelectedRoles }: JobFetchProps) => {
  // Change selectedRoles to selectedRole
  const uniqueRoles = Array.from(new Set(data.map((item) => item.jobRole)));

  // Handle change event on checkboxes
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const jobRole = event.target.name;
    setSelectedRoles((prevSelected) => {
      if (prevSelected.includes(jobRole)) {
        // If role is already selected, remove it
        return prevSelected.filter((item) => item !== jobRole);
      } else {
        // If role is not selected, add it
        return [...prevSelected, jobRole];
      }
    });
  };

  return (
    <div>
      <h3 className="mb-2 font-semibold text-white dark:text-white">Role</h3>
      <ul className="w-48 text-sm font-medium text-white rounded-lg dark:bg-gray-700 dark:border-gray-600">
        {uniqueRoles.map((jobRole, index) => (
          <li className="w-full rounded-t-lg dark:border-gray-600" key={index}>
            <div className="mb-1">
              <input
                type="checkbox"
                name={jobRole}
                id={jobRole}
                checked={selectedRoles.includes(jobRole)}
                onChange={handleCheckboxChange}
              />
              <label
                htmlFor={jobRole}
                className="w-full py-1 ms-2 text-sm text-white font-thin dark:text-gray-300"
              >
                {jobRole}
              </label>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 text-white">
        Selected Role: {selectedRoles.join(", ")}{" "}
        {/* Change to "Selected Role" */}
      </div>
    </div>
  );
};

export default JobFetch;
