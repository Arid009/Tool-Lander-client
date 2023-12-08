import Lottie from "lottie-react";
import contactanime from "../../public/Animation - 1699362236564.json";
import { Link } from "react-router-dom";
import Navbar from "../components/Header/Navbar";

const ErrorPage = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex justify-center ">
                <Lottie className="lg:w-[600px] w-[300px]" animationData={contactanime} />;
            </div>
            <div className="text-center">
                <Link to='/'><button className="btn bg-orange-400 hover:bg-orange-500">Go Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;