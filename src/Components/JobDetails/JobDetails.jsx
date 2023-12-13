import { useLoaderData } from "react-router-dom";
import JobDetailBanner from "./JobDetailBanner";
import { LuCircleDollarSign } from "react-icons/lu";
import { IoBagCheckOutline } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";

const JobDetails = () => {
  const job = useLoaderData();
  const {
    logo,
    salary,
    job_title,
    experiences,
    job_description,
    job_responsibility,
    contact_information,
    educational_requirements,
  } = job;

  return (
    <div>
      <JobDetailBanner logo={logo}></JobDetailBanner>
      <div className=" my-20 ">
        <div className="mt-5 flex flex-col lg:flex-row justify-around">
          <div className="b lg:w-1/2 mx-10 mb-14 text-justify">
            <p className="mb-6">
              <span className="text-lg font-bold">Job Description :</span>
              <span className="text-gray-600"> {job_description}</span>lki
            </p>
            <p className="mb-6">
              <span className="text-lg font-bold">Job Responsibility</span>
              <span className="text-gray-600">{job_responsibility}</span>
            </p>
            <p className="mb-4">
              <span className="text-lg font-bold mb-6">
                Educational Requirements:
              </span>
              <span className="text-gray-600">
                {" "}
                <br /> {educational_requirements}
              </span>
            </p>
            <p className="mb-4">
              <span className="text-lg font-bold mb-6">Experiences:</span>
              <span className="text-gray-600">
                {" "}
                <br /> {experiences}
              </span>
            </p>
          </div>
          <div className="w-80  h-96 flex flex-col justify-between rounded bg-slate-200 ">
            <div className="grid ml-3 mt-1  gap-2">
              <h1 className="text-lg font-bold ">Job Details</h1>
              <hr className="w-11/12 " />
              <h3 className="flex items-center">
                <LuCircleDollarSign />
                <span className=" pl-2 font-semibold">Salary :</span>{" "}
                <span className="text-gray-600"> {salary}</span>
              </h3>
              <h3 className="flex items-center">
                <IoBagCheckOutline />
                <span className=" pl-2 font-semibold">Job Title :</span>{" "}
                <span className="text-gray-600">{job_title}</span>
              </h3>
            </div>
            <div className="grid gap-2 ml-3">
              <h1 className="text-lg font-bold"> Contact Information</h1>
              <hr className="w-11/12 " />
              <p className="flex items-center">
                <FaPhoneAlt />{" "}
                <span className=" pl-2 font-semibold">Phone :</span>{" "}
                <span className="text-gray-600">
                  {contact_information.phone}
                </span>
              </p>
              <p className="flex items-center">
                <MdOutlineMailOutline />{" "}
                <span className=" pl-2 font-semibold">Email :</span>{" "}
                <span className="text-gray-600">
                  {contact_information.email}
                </span>
              </p>
              <div className="flex justify-between">
                <p className="w-36 flex items-center ">
                  <CiLocationOn />{" "}
                  <span className=" pl-2 font-semibold">Address :</span>{" "}
                </p>
                <span className="h-4">{contact_information.address}</span>
              </div>
            </div>
            <button className="btn  btn-info bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-green-300 hover:to-blue-400">Appply</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
