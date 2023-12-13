import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="  hero-content flex-col lg:flex-row-reverse">
    <img src="https://i.ibb.co/GFmK83j/user.png" className=" rounded-lg -mb-4" />
    <div className="mt-4 lg:mt-0">
      <h1 className="text-5xl font-bold">One Step Closer To Your <span className="text-sky-600">Dream Job</span></h1>
      <p className="py-6">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
      <Link to='/Jobs'><button className="btn  btn-info bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-green-300 hover:to-blue-400">Get Started</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;