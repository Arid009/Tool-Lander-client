import { motion } from "framer-motion"
import Lottie from "lottie-react";
import Contactus from "../../../public/Contactus.json";

const Contact = () => {
    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="container flex flex-col  mx-auto lg:flex-row">
                <div className="flex justify-center ">
                    <Lottie className="lg:w-[400px] w-[300px]" animationData={Contactus} />;
                </div>
                <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">

                    <motion.div
                        animate={{ x: 10 }}
                        transition={{ ease: "easeOut", duration: 2 }}
                        className="w-1/2 my-4 mx-auto"
                    >
                        <h2 className="text-3xl text-center text-orange-400">Contact Us</h2>
                        <div className="grid mt-3 grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <h2 className="text-3xl mb-3 font-bold">Email Address</h2>
                                <p className="text-xl">ABC@gmail.com</p>
                            </div>
                            <div>
                                <h2 className="text-3xl mb-3 font-bold">Phone number</h2>
                                <p className="text-xl">+01-2053532015</p>
                                <p className="text-xl">+01-6402654178</p>
                            </div>
                            <div>
                                <h2 className="text-3xl mb-3  font-bold">Address</h2>
                                <p className="text-xl">Chottogram, Bangladesh</p>
                            </div>
                            <div>
                                <h2 className="text-3xl mb-3  font-bold">Hours of operation</h2>
                                <p className="text-xl">7a.m. - 9p.m.</p>
                            </div>
                        </div>

                    </motion.div>

                </div>
            </div>

        </div>
    );
};

export default Contact;