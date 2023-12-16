/* eslint-disable react/prop-types */
const JobDetailBanner = ({logo}) => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="flex   relative  h-full w-full lg:flex-row">
          <img className="w-52 h-44 absolute bottom-0" src="https://i.ibb.co/Ss7mH4B/bg1.png" />
          <div className="mx-auto my-auto flex  flex-col items-center h-56 w-64">
          <h1 className=" mx-auto my-auto text-5xl text-center font-bold">Job Details from</h1>
          <img className="w-40 h-20" src={logo} alt="" />
          </div>
          
          <img className="w-52 h-44 absolute right-0 " src="https://i.ibb.co/d4jtrdq/bg2.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default JobDetailBanner;
