import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="flex flex-col mt-20 items-center ">
            <p className="font-bold text-4xl mt-5">Oops !!</p>
            <Link to='/'><button className="btn btn-info mt-5">Go back Home</button></Link>
        </div>
    );
};

export default ErrorPage;