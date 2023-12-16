
import { useEffect, useState } from "react";
import AppliedJob from "./AppliedJob";



const AppliedJobs = () => {
  const[noFound,setNoFound] = useState(false)
const [appliedJobs, setAppliedJobs] = useState([]);

useEffect(()=>{
  const appliedItems = JSON.parse(localStorage.getItem('Applied Jobs'));
  if(appliedItems){
  setAppliedJobs(appliedItems);
  }
  else{
    setNoFound('No data found.');
  }
},[]);
  console.log(appliedJobs);
    return (
        <div>
           <div className="hero min-h-screen " style={{backgroundImage: 'url(https://www.jobvector.com/_nuxt/img/startpageHeader.704c9a2.svg)'}}>
  <div className="hero-overlay bg-opacity-10"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
   
      
    </div>
  </div>
</div>

            <div className="  mt-24 mb-16 ">
                <h1 className="text-4xl font-bold text-center mb-15  text-slate-600 ">You Have Applied : {appliedJobs.length} Jobs</h1>
                <p className="text-xl font-semibold my-20 text-center text-red-500">{noFound?'You Have not applied any Job': ''}</p>
                {
                    appliedJobs.map(appliedJob=> <AppliedJob key={appliedJob.id} appliedJob={appliedJob}> </AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;