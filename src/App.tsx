import { useState } from "react";
import Navbar from "./components/base/Navbar";
import Filter from "./components/home/filter";
import Home from "./components/home/home";
import Jobs from "./components/jobs/jobs";
import { JobData, data } from "@/data";

const App = () => {
  const [filteredData, setFilteredData] = useState<JobData[]>(data);

  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedRoles, setSelectedRoles] = useState<string[]>([]);
  const [selectedCompany, setSelectedCompany] = useState<string[]>([]);
  const [minPay, setMinPay] = useState<number>(0);
  const [minExp, setMinExp] = useState<number>(0);

  const handleFilterSubmit = () => {
    console.log("Applying filters...");
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

    console.log("Filtered data:", newFilteredData); // Log the filtered data
    setFilteredData(newFilteredData); // Update state with filtered data
  };

  return (
    <div className="mb-4">
      <Navbar />
      <Home />
      <Filter
        data={data}
        selectedLocations={selectedLocations}
        setSelectedLocations={setSelectedLocations}
        selectedRoles={selectedRoles}
        setSelectedRoles={setSelectedRoles}
        selectedCompany={selectedCompany}
        setSelectedCompany={setSelectedCompany}
        minPay={minPay}
        setMinPay={setMinPay}
        minExp={minExp}
        setMinExp={setMinExp}
        onSubmit={handleFilterSubmit} // Pass the onSubmit function
      />

      <div className="md:items-center items-center">
        <Jobs data={filteredData} />
      </div>
    </div>
  );
};

export default App;
