import JobPost from "./JobPost";

const Testimonial = () => {
  return (
    <div className="container mt-4 lg:mt-0">
      <div className="flex flex-col items-center lg:flex-row lg:items-center ml-7 space-y-4 lg:space-y-0 lg:space-x-8">
        <div className="flex overflow-hidden">
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
            alt=""
          />
          <img
            className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
        </div>
        <p className="font-extrabold text-white dark:text-white lg:text-start">
          Used by Professionals
          <span className="text-blue-600 dark:text-blue-500"> 100K+</span>{" "}
          Professionals
        </p>
        <JobPost />
      </div>
    </div>
  );
};

export default Testimonial;
