import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import JobFetch from "../filter/FilterFetch";
import Location from "../filter/Location";
import Companies from "../filter/Companies";
import Pay from "../filter/Pay";
import Experience from "../filter/Experience";
import { JobData } from "@/data";

interface FilterProps {
  data: JobData[];
  selectedLocations: string[];
  setSelectedLocations: React.Dispatch<React.SetStateAction<string[]>>;
  selectedRoles: string[];
  setSelectedRoles: React.Dispatch<React.SetStateAction<string[]>>;
  selectedCompany: string[];
  setSelectedCompany: React.Dispatch<React.SetStateAction<string[]>>;
  minPay: number;
  setMinPay: React.Dispatch<React.SetStateAction<number>>;
  minExp: number;
  setMinExp: React.Dispatch<React.SetStateAction<number>>;
  onSubmit: () => void; // Add this line
}

const Filter = ({
  data,
  selectedLocations,
  setSelectedLocations,
  selectedRoles,
  setSelectedRoles,
  selectedCompany,
  setSelectedCompany,
  minPay,
  setMinPay,
  minExp,
  setMinExp,
  onSubmit, // Use the onSubmit prop
}: FilterProps) => {
  return (
    <div className="container flex justify-center">
      <div className="p-1 bg-blue-800 w-full rounded-md hover:shadow-lg transition duration-300">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1" className="w-full">
            <AccordionTrigger className="text-white w-full">
              <div className="flex space-x-3">
                <h1>Filter</h1>
                <svg
                  className="w-4 h-6 text-white dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"
                  />
                </svg>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="container">
                <div className="flex flex-wrap lg:flex-nowrap justify-around space-y-4 lg:space-y-0 ">
                  <div className="flex justify-around md:space-x-12  px-3 md:px-0 ">
                    <div>
                      <JobFetch
                        data={data}
                        selectedRoles={selectedRoles}
                        setSelectedRoles={setSelectedRoles}
                      />
                    </div>
                    <div>
                      <Location
                        data={data}
                        selectedLocations={selectedLocations}
                        setSelectedLocations={setSelectedLocations}
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <Pay minPay={minPay} setMinPay={setMinPay} />
                    <div className="flex flex-row space-x-2">
                      <Experience minExp={minExp} setMinExp={setMinExp} />
                      <Companies
                        data={data}
                        selectedCompany={selectedCompany}
                        setSelectedCompany={setSelectedCompany}
                      />
                    </div>
                    <button
                      onClick={() => {
                        console.log("Filter button clicked"); // Debug log
                        onSubmit();
                      }}
                      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                    >
                      Apply Filters
                    </button>
                  </div>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default Filter;
