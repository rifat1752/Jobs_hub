import { useEffect, useState } from "react";
import Catagory from "./Catagory";

const CatagoriesList = () => {
    const [catagories, setCatagories] = useState([])
    useEffect(()=>{
        fetch('https://api.npoint.io/76348f7113515c28b0e5')
        .then(res => res.json())
        .then(data=>setCatagories(data))
    },[])
  return (
    <div>
      <div className="my-20 ">
        <h1 className=" py-5 text-5xl font-bold text-center">
          Job Category List 
        </h1>
        <p className=" text-lg font-normal text-center">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 ">
            {catagories.map(catagory=> <Catagory key={catagory.id} catagory={catagory}></Catagory>)}
        </div>
      </div>
    </div>
  );
};

export default CatagoriesList;
