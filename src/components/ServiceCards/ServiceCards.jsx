import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";


const ServiceCards = () => {
    const [services,setServices] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    console.log(services);
    useEffect(() => {
        fetch('https://assignment11-server-ochre.vercel.app/serviceslimit?page=0&size=4')
        .then(res => res.json())
        .then(data => {
            setServices(data)
            setIsLoading(false)
        })
    },[])

    if (isLoading) {
        return <div className="flex justify-center"><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600"></div></div>
    }

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1  my-16 gap-3">
                {
                    services.map(service => <ServiceCard 
                        service={service}
                        key={service.name}
                        ></ServiceCard>)
                }
            </div>
            <div className="text-center mb-4">
                <Link to='/services'><button className="px-8 py-3 font-semibold bg-orange-400 rounded">Show All</button></Link>
            </div>
        </div>
    );
};

export default ServiceCards;