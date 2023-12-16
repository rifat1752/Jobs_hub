/* eslint-disable react/prop-types */

import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineDollar } from "react-icons/ai";
import { Link } from 'react-router-dom';


const AppliedJob = ({appliedJob}) => {
    const {id,logo,job_title,company_name,job_type,remote_or_onsite,location,salary} = appliedJob
    return (
        <div className=" flex flex-col justify-center items-center mx-auto">
            <div className="border flex flex-col md:flex-row items-center justify- md:justify-between  my-10 h-[400px] md:h-52 w-[250px] md:w-[600px] lg:w-[800px] bg-slate-50 rounded shadow-xl">
              <figure className="bg-slate-200 h-40 md:h-full w-[200px] flex items-center justify-center rounded"><img className="px-4 " src={logo} alt="Movie"/></figure>
              <div className=" ml-2 h-full flex  flex-col gap-4 py-6">
                 <h1 className=" text-xl font-bold text-slate-700 ">{job_title}</h1>
                 <h3 className="font-bold text-slate-600">{company_name}</h3>
                 <div className="job-type flex gap-2">
                    <p className="px-1 rounded border-solid border-2 border-blue-400 text-sm text-center text-blue-900">{remote_or_onsite}</p>
                    <p className="px-1 rounded border-solid border-2 border-blue-400 text-sm text-center text-blue-900">{job_type}</p>
                </div>
                <div className="location flex flex-col md:flex-row  text-slate-500">
                    <p className="flex items-center "><IoLocationOutline />{location}</p>
                    <p className="flex items-center md:ml-3    "><AiOutlineDollar />{salary}</p>
                </div>
              </div>
              <Link className=" mr-4 mb-4 md:mb-0" to={`/job/${id}`}><button  className="btn  text-white  btn-info bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-green-300 hover:to-blue-400">View Details</button></Link>

            </div>
        </div>
    );
};

export default AppliedJob;