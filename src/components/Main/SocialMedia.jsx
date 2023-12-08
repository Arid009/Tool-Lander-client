import Lottie from "lottie-react";
import groovyWalkAnimation from "../../../public/Animation - 1699295161415.json";

const SocialMedia = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <section className="bg-gray-100 text-gray-800">
                <div className="container flex flex-col  mx-auto lg:flex-row">
                    <div className="flex justify-center ">
                        <Lottie className="lg:w-[400px] w-[300px]" animationData={groovyWalkAnimation} />;
                    </div>
                    <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                        
                        <h2 className="text-3xl text-center font-semibold leadi">Follow us on:</h2>
                        <div className="text-center text-lg mt-4 font-bold">
                            <p>Facebook <i className="bi bi-facebook"></i></p>
                            <p>Youtube <i className="bi bi-youtube"></i></p>
                            <p>Instagram <i className="bi bi-instagram"></i></p>
                            <p>Twitter <i className="bi bi-twitter-x"></i></p>
                            <p>Discord <i className="bi bi-discord"></i></p>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SocialMedia;