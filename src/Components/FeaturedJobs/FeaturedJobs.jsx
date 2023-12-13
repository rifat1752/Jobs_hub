import  { useEffect, useState } from "react";
import FeaturedJob from "./FeaturedJob";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength,setDataLength] = useState(4)
    useEffect(() =>{
        fetch('https://api.npoint.io/23dcad6ad92d352d9a0a')
        .then(res => res.json())
        .then(data => setJobs(data));
    }, [])

    
  return (
    <div>
      <div className="my-20 ">
        <h1 className=" py-5 text-5xl font-bold text-center">
        Featured Jobs
        </h1>
        <p className=" text-lg font-normal text-center">
        Explore thousands of job opportunities with all the information you need. Its your future
        </p>
        <div className=" grid grid-cols-1 lg:grid-cols-2 mt-10">
            {
                jobs.slice(0,dataLength).map(job => <FeaturedJob key={job.id} job={job}></FeaturedJob>)
            }
        </div>
        <div className={dataLength===jobs.length?'hidden':'flex'}>
        <button onClick={()=>setDataLength(jobs.length)} className="btn  w-32 mx-auto mt-10 text-white  btn-info bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-green-300 hover:to-blue-400">Show All</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedJobs;
