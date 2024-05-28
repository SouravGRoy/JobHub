import { JobData } from "@/data";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface CompanyProps {
  data: JobData[];
  selectedCompany: string[];
  setSelectedCompany: React.Dispatch<React.SetStateAction<string[]>>;
}

const Companies = ({
  data,
  selectedCompany,
  setSelectedCompany,
}: CompanyProps) => {
  const uniqueCompanies = Array.from(
    new Set(data.map((item) => item.companyName))
  );

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const company = event.target.value;
    setSelectedCompany((prevSelected) => {
      if (prevSelected.includes(company)) {
        return prevSelected.filter((item) => item !== company);
      } else {
        return [...prevSelected, company];
      }
    });
  };

  return (
    <div className="border border-gray-400 hover:bg-blue-700 hover:border-blue-500 hover:shadow-lg text-gray-100 p-3 bg-blue-600 rounded-md">
      <div className="">
        <DropdownMenu>
          <DropdownMenuTrigger>Select Companies</DropdownMenuTrigger>
          <DropdownMenuContent className="max-h-60 overflow-y-auto">
            <DropdownMenuLabel> Companies</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {uniqueCompanies.map((company, index) => (
              <DropdownMenuItem key={index}>
                <input
                  type="checkbox"
                  id={`company-${index}`}
                  value={company}
                  checked={selectedCompany.includes(company)}
                  onChange={handleCheckboxChange}
                  className="mr-2"
                />
                <label htmlFor={`company-${index}`}>{company}</label>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Companies;
