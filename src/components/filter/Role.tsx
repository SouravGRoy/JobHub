import { Checkbox } from "@/components/ui/checkbox";
import { JobData } from "@/data";

interface HomeCardProps {
  data: JobData[];
}
const JobType = ({ data }: HomeCardProps) => {
  const uniqueRoles: Set<string> = new Set();
  const filteredData = data.filter((item) => {
    if (!uniqueRoles.has(item.jobRole)) {
      uniqueRoles.add(item.jobRole);
      return true;
    }
    return false;
  });

  return (
    <>
      <div className="container">
        <h3 className="mb-2 font-semibold text-white dark:text-white"></h3>
        <ul className="w-48 text-sm font-medium text-white rounded-lg dark:bg-gray-700 dark:border-gray-600">
          {filteredData.map((x) => (
            <li
              className="w-full  rounded-t-lg dark:border-gray-600"
              key={x.jdUid}
            >
              <div className="mb-1">
                <Checkbox id={x.jdUid} />
                <label
                  htmlFor={x.jdUid}
                  className="w-full py-1 ms-2 text-sm  text-white font-thin dark:text-gray-300"
                >
                  {x.jobRole}
                </label>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default JobType;
