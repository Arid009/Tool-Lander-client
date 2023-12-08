import { useEffect, useState } from "react";
import ServicesCard from "./ServicesCard";


const ServicesCards = ({ searchText }) => {
    const [services, setServices] = useState([]) || [];
    const [isLoading, setIsLoading] = useState(true)
    const [showAll, setShowAll] = useState(true)
    // console.log(searchText);

    console.log(services);
    useEffect(() => {
        if (searchText) {
            fetch(`https://assignment11-server-ochre.vercel.app/filterservice?text=${searchText}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setServices(Array.isArray(data) ? data : [])
                    setIsLoading(false)
                })
                .catch(err => console.error(err))
            return;
        }
        fetch('https://assignment11-server-ochre.vercel.app/serviceslimit?page=0&size=6')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setIsLoading(false)
            })
            .catch(err => console.error(err))

        if (services.length > 6) {
            setShowAll(false)
        }
        else {
            setShowAll(true)
        }

    }, [searchText])

    const handleShowAll = () => {
        fetch('https://assignment11-server-ochre.vercel.app/services')
            .then(res => res.json())
            .then(data => {
                setServices(data)
                setShowAll(false)
            })
    }


    if (isLoading) {
        return <div className="flex justify-center"><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600"></div></div>
    }

    return (
        <div className="max-w-screen-xl mx-auto">
            <div className="grid grid-cols-1  my-16 gap-3">
                {
                    services.map(service => <ServicesCard
                        service={service}
                        key={service._id}
                    ></ServicesCard>)
                }
            </div>
            <div className="text-center mb-4">
                {showAll && <button onClick={handleShowAll} className="px-8 py-3 font-semibold bg-orange-400 rounded">Show All</button>}
            </div>
        </div>
    );
};

export default ServicesCards;