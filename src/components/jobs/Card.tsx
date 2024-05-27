import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { JobData } from "@/data";
import { cn } from "@/lib/utils";
import JobDetails from "./jobDetails";

interface HomeCardProps {
  data: JobData;
}

const HomeCard = ({ data }: HomeCardProps) => {
  return (
    <Card className="w-80 items-center md:w-full sm:h-auto md:h-auto">
      <CardHeader>
        <div className="flex justify-between ">
          <div className="flex space-x-2 ">
            <img className="w-10" src={data.logoUrl} alt="" />
            <div>
              <CardTitle className="text-sm text-slate-400">
                {data.companyName}
              </CardTitle>
              <p>{data.jobRole}</p>
            </div>
          </div>
          <CardTitle className="text-sm">{data.location}</CardTitle>
        </div>
        <h1 className="text-md font-light">
          Estimated Salary :{" "}
          {data.minJdSalary && data.maxJdSalary
            ? data.minJdSalary + " - " + data.maxJdSalary
            : data.minJdSalary ?? data.maxJdSalary ?? 0}{" "}
          LPA✅
        </h1>

        <div className="relative">
          <h1 className="font-semibold">About Company :</h1>
          <p className="text-sm text-red-950 font-bold">About Us</p>
          <div className={cn("overflow-hidden h-24 md:h-40")}>
            <CardDescription>{data.jobDetailsFromCompany}</CardDescription>
          </div>
          <JobDetails data={data} />
        </div>
      </CardHeader>
      <CardContent className="flex-col">
        <div className="mb-3">
          <p className="text-sm text-slate-400 font-bold">Minimum Experience</p>
          <p className="font-semibold">
            {data.minExp
              ? data.minExp + " years"
              : data.minExp ?? "Not Required"}
          </p>
        </div>
        <div className="flex flex-row md:flex-col ">
          <button
            className="bg-grad-2 w-full h-12 rounded-lg mb-2 hover:shadow-lg transition duration-300
         bg-teal-400 hover:bg-teal-500 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium px-5 py-3 me-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          >
            Easy Apply⚡️
          </button>
          <button className=" bg-grad-2 w-full h-12 text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 rounded-lg dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30">
            Unlock Referral
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default HomeCard;
