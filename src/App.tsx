import { useState } from "react";
import Navbar from "./components/base/Navbar";
import Filter from "./components/home/filter";
import Home from "./components/home/home";
import Jobs from "./components/jobs/jobs";
import { JobData, data } from "@/data";

const App = () => {
  const [filteredData, setFilteredData] = useState<JobData[]>(data);

  const handleFilterSubmit = (
    selectedLocations: string[],
    selectedRoles: string[],
    selectedCompany: string[],
    minPay: number,
    minExp: number
  ) => {
    const newFilteredData = data.filter((job) => {
      const isLocationMatch =
        selectedLocations.length === 0 ||
        selectedLocations.includes(job.location);
      const isRoleMatch =
        selectedRoles.length === 0 || selectedRoles.includes(job.jobRole);
      const isCompanyMatch =
        selectedCompany.length === 0 ||
        selectedCompany.includes(job.companyName);
      const isPayMatch =
        minPay === 0 || (job.minJdSalary !== null && job.minJdSalary >= minPay);
      const isExpMatch =
        minExp === 0 || (job.minExp !== null && job.minExp <= minExp);

      return (
        isLocationMatch &&
        isRoleMatch &&
        isCompanyMatch &&
        isPayMatch &&
        isExpMatch
      );
    });
    setFilteredData(newFilteredData);
  };

  return (
    <div className="mb-4">
      <Navbar />
      <Home />

      <Filter data={data} onFilterSubmit={handleFilterSubmit} />
      <div className="md:items-center items-center">
        <Jobs data={filteredData} />
      </div>
    </div>
  );
};

export default App;
