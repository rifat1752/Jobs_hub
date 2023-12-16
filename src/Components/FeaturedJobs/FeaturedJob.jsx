/* eslint-disable react/prop-types */

import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from 'react-router-dom';

const FeaturedJob = ({job}) => {
    const {id, logo,job_title,company_name,remote_or_onsite,location,job_type,salary} = job;
    return (
        <div className="flex justify-center">
            <div className=" my-5 pl-7 bg-white border shadow-lg w-96 h-64 rounded flex flex-col   justify-evenly">
                <figure className="w-28  my-4"><img src={logo}  alt="" /></figure>
                <h1 className="text-xl font-bold text-slate-700 ">{job_title}</h1>
                <h3 className="font-bold text-slate-600">{company_name}</h3>
                <div className="job-type flex gap-2">
                    <p className="px-1 rounded border-solid border-2 border-blue-400 text-sm text-center text-blue-900">{remote_or_onsite}</p>
                    <p className="px-1 rounded border-solid border-2 border-blue-400 text-sm text-center text-blue-900">{job_type}</p>
                </div>
                <div className="location flex  text-slate-500">
                    <p className="flex items-center "><IoLocationOutline />{location}</p>
                    <p className="flex items-center ml-6"><AiOutlineDollar />{salary}</p>
                </div>
                {/* to={`/jobs/${id}`} */}
            <Link to={`/job/${id}`}><button  className="btn text-white  btn-info bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-green-300 hover:to-blue-400">View Details</button></Link>
            </div>
        </div>
    );
};

export default FeaturedJob;