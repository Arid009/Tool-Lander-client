import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const MySchedules = () => {
    const { user } = useContext(AuthContext)
    const [bookedService, setBookedService] = useState([])
    const [pendingService,setPendingService] = useState([])
    const [statustext,setStatus] = useState('pending')
    const [isLoading,setIsLoading] = useState(true)

    console.log(statustext);
    useEffect(() => {
        fetch(`http://localhost:5000/purchased?email=${user.email}`, {credentials:"include"})
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBookedService(data)
                setIsLoading(false)
            })

        fetch(`http://localhost:5000/purchasedown?email=${user.email}`, {credentials: "include"})
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            setPendingService(data)
            setIsLoading(false)
        })
    }, [user])

    if (isLoading) {
        return <div className="flex justify-center"><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600"></div></div>
    }

    const updateStatus =(id, statust) =>{
        console.log(id, statust);
        fetch(`http://localhost:5000/purchased/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({status: statust})
        })
        .then(res=>res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Successfully logged',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                })
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>ToolLander || My Schedules</title>
                <meta name="description" content="ToolLander" />
            </Helmet>
            <h2 className="text-3xl my-8 text-center">My Bookings</h2>
            {bookedService.length == 0 && <h2 className="text-center">No Pending Service</h2>}
            <div className="grid grid-cols-1 w-1/2 mx-auto gap-3 lg:grid-cols-2">
                {
                    bookedService.map(service => <div key={service._id} className="card card-compact  bg-base-100 shadow-xl">
                    <img className="object-cover rounded-t-lg mx-auto md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={service.image} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-500 dark:text-white">{service.name}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">{service.description.length >= 100 ? `${service.description.slice(0, 100)}...` : service.description}</p>

                        <p className='text-lg text-green-500'>Price: {service.price}</p>
                        

                    </div>
                </div>)
                }
            </div>
            <h2 className="text-3xl text-center my-8">My Pending Works</h2>
            {pendingService.length == 0 && <h2 className="text-center">No Pending Service</h2>}
            <div className="grid grid-cols-1 w-1/2 mx-auto gap-3 lg:grid-cols-2">
                {
                    pendingService.map(service => <div key={service._id} className="card card-compact  bg-base-100 shadow-xl">
                    <img className="object-cover rounded-t-lg mx-auto md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={service.image} alt="" />
                    <div className="flex flex-col justify-between p-4 leading-normal">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-500 dark:text-white">{service.name}</h5>
                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">{service.description.length >= 100 ? `${service.description.slice(0, 100)}...` : service.description}</p>

                        <p className='text-lg text-green-500'>Price: {service.price}</p>
                        
                        <select value={statustext} onChange={(event) => {
                            setStatus(event.target.value)
                            updateStatus(service._id, event.target.value)
                        }} name="" id="">
                            <option value="pending">Pending</option>
                            <option value="inprogress">In Progress</option>
                            <option value="Completed">Completed</option>
                        </select>
                        {/* <button onClick={() => console.log(service._id)}>Save</button> */}
                    </div>
                </div>)
                }
            </div>
        </div>
    );
};

export default MySchedules;