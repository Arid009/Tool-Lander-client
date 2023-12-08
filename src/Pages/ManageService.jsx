import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const ManageService = () => {
    const { user } = useContext(AuthContext)
    const [services, setServices] = useState([])
    const [isLoading,setIsLoading] = useState(true)

    useEffect(() => {
        fetch(`https://assignment11-server-ochre.vercel.app/emailService?email=${user.email}`, {credentials: "include"})
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data)
                setIsLoading(false)
            })
    }, [user])

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment11-server-ochre.vercel.app/services/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const remaining = services.filter(service => service._id !== id)
                            setServices(remaining)
                        }
                    })

            }
        });

    }

    if (isLoading) {
        return <div className="flex justify-center"><div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600"></div></div>
    }

    return (
        <div>
            <Helmet>
                <title>ToolLander || Manage Service</title>
                <meta name="description" content="ToolLander" />
            </Helmet>

            <h1 className="text-3xl my-8 text-center">Manage Services</h1>
            <div className="grid grid-cols-1 w-1/2 mx-auto gap-3 lg:grid-cols-2">
                {
                    services.map(service => <div key={service._id} className="card card-compact  bg-base-100 shadow-xl">
                        <img className="object-cover rounded-t-lg mx-auto md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={service.image} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-500 dark:text-white">{service.name}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">{service.shortDescription}</p>

                            <p className='text-lg text-green-500'>Price: {service.price}</p>
                            <Link to={`/updatepage/${service._id}`}><button className='btn w-full text-orange-400 bg-green-700 hover:bg-green-950'>Update</button></Link>
                            <button onClick={() => handleDelete(service._id)} className='btn  text-orange-400 bg-green-700 hover:bg-green-950'>Delete</button>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ManageService;