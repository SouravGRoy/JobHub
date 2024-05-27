const JobPost = () => {
  return (
    <div className="flex hover:bg-blue-600 bg-blue-700 rounded-full p-2 cursor-pointer text-sm pl-2 ">
      <a className="text-white" href="">
        Post a Job
      </a>
      <svg
        className="w-5 mx-1 h-5 text-white dark:text-black"
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
          d="M5 12h14m-7 7V5"
        />
      </svg>
    </div>
  );
};

export default JobPost;
