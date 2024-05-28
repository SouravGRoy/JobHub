import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { JobData } from "@/data";
interface HomeCardProps {
  data: JobData;
}

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
const JobDetails = ({ data }: HomeCardProps) => {
  return (
    <div>
      <Dialog>
        <DialogTrigger className="bg-gradient-to-b absolute left-1/2 -translate-x-1/2 p-2 bottom-0 w-full py-1  from-transparent to-white ">
          View
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <Card className="w-full bg-[#d9e0ef71] items-center md:w-full sm:h-auto">
              <CardHeader>
                <div className="flex justify-between">
                  <div className="flex space-x-2">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={data.logoUrl}
                      alt=""
                    />
                    <div>
                      <CardTitle className="text-lg text-zinc-900">
                        {data.companyName}
                      </CardTitle>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <h1 className="text-2xl uppercase font-bold">
                    {data.jobRole}
                  </h1>
                  <CardTitle className="text-sm uppercase text-slate-400">
                    🇮🇳 {data.location}
                  </CardTitle>
                  <h1 className="text-xl mt-4 text-gray-800 font-bold">
                    Job Details
                  </h1>
                  <p className="text-xs flex gap-1 -mt-1 text-slate-400">
                    Review the given details{" "}
                    <a href="/">
                      <span className="underline flex underline-offset-1">
                        below{" "}
                        <svg
                          className="w-5 h-4 px-1 text-gray-800 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M18 14v4.833A1.166 1.166 0 0 1 16.833 20H5.167A1.167 1.167 0 0 1 4 18.833V7.167A1.166 1.166 0 0 1 5.167 6h4.618m4.447-2H20v5.768m-7.889 2.121 7.778-7.778"
                          />
                        </svg>
                      </span>
                    </a>
                  </p>
                  <div className="flex gap-4 mt-4">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2"
                        d="M8 7V6a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1M3 18v-7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
                      />
                    </svg>
                    <div className="flex flex-col">
                      <h1 className="text-sm font-bold text-start">Pay</h1>
                      <div className="text-xs text-start font-['Arial_Black'] font-bold text-gray-500 bg-gray-100 p-1 rounded-sm">
                        {data.minJdSalary && data.maxJdSalary
                          ? data.minJdSalary + " - " + data.maxJdSalary
                          : data.minJdSalary ?? data.maxJdSalary ?? 0}{" "}
                        LPA
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 mt-2">
                    <svg
                      className="w-5 h-5 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 2a3 3 0 0 0-3 3v1H5a3 3 0 0 0-3 3v2.382l1.447.723.005.003.027.013.12.056c.108.05.272.123.486.212.429.177 1.056.416 1.834.655C7.481 13.524 9.63 14 12 14c2.372 0 4.52-.475 6.08-.956.78-.24 1.406-.478 1.835-.655a14.028 14.028 0 0 0 .606-.268l.027-.013.005-.002L22 11.381V9a3 3 0 0 0-3-3h-2V5a3 3 0 0 0-3-3h-4Zm5 4V5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v1h6Zm6.447 7.894.553-.276V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5.382l.553.276.002.002.004.002.013.006.041.02.151.07c.13.06.318.144.557.242.478.198 1.163.46 2.01.72C7.019 15.476 9.37 16 12 16c2.628 0 4.98-.525 6.67-1.044a22.95 22.95 0 0 0 2.01-.72 15.994 15.994 0 0 0 .707-.312l.041-.02.013-.006.004-.002.001-.001-.431-.866.432.865ZM12 10a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2H12Z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <div className="flex flex-col">
                      <h1 className="text-sm font-bold text-start">
                        Exp Required
                      </h1>
                      <div className="text-xs text-start font-['Arial_Black'] font-bold text-gray-500 bg-gray-100 p-1 uppercase rounded-sm">
                        {data.minExp
                          ? data.minExp + " years"
                          : data.minExp ?? "Not Required"}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 mt-2 mb-5">
                    <svg
                      className="w-6 h-6 text-gray-800 dark:text-white"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                      />
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
                      />
                    </svg>
                    <div className="flex flex-col">
                      <h1 className="text-sm font-bold text-start">Location</h1>
                      <div className="text-xs text-start font-['Arial_Black'] font-bold text-gray-500 bg-gray-100 p-1 uppercase rounded-sm">
                        {data.location}
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="w-full border-[1px] bg-black"></hr>
                <div>
                  <h1 className="font-bold text-2xl text-slate-700 mt-5 text-start">
                    Full job description
                  </h1>
                  <div className="text-start">
                    <h1 className="text-sm font-light leading-2">
                      {data.jobDetailsFromCompany}
                    </h1>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default JobDetails;
