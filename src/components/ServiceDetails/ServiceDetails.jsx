import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";


const ServiceDetails = () => {
    const serviceData = useLoaderData()
    const { user } = useContext(AuthContext)
    const [otherServices, setOtherServices] = useState([])
    const [hide,setHide] = useState(false)

    const {name, image, description, providerName, providerImage, location, price, providerEmail, shortDescription } = serviceData

    useEffect(() => {
        fetch(`https://assignment11-server-ochre.vercel.app/servicedetail?email=${providerEmail}`, { credentials: "include" })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setOtherServices(data)
            })
    }, [providerEmail])

    const handlePurchase = (e) => {
        e.preventDefault()
        const form = e.target;
        const date = form.date.value;
        const address = form.address.value;
        const email = user.email
        const status = 'pending';

        const data = {
            name,
            image,
            description,
            providerName,
            providerImage,
            location,
            price,
            providerEmail,
            shortDescription,
            date,
            address,
            email,
            status
        }



        fetch('https://assignment11-server-ochre.vercel.app/purchased', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setHide(true)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Successfully Purchased',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    })
                }
            })
        // console.log(date, address);
    }


    return (
        <div>
            <Helmet>
                <title>ToolLander || {name}</title>
                <meta name="description" content="ToolLander" />
            </Helmet>
            <h2 className="text-center text-3xl font-bold text-green-400">{name}</h2>
            <div>
                <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-300 bg-gray-50 text-gray-800">
                    <div className="flex justify-between p-4">
                        <div className="flex space-x-4">
                            <div>
                                <img src={providerImage} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                            </div>
                            <div>
                                <h4 className="font-bold">{providerName}</h4>
                                <span className="text-xs text-gray-600">{location}</span>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 space-y-2 text-lg font-semibold text-gray-600">
                        {shortDescription}
                    </div>
                </div>
                <div>
                    <div className="flex w-3/4 mx-auto flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-500 dark:text-white">{name}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">{description?.length >= 100 ? `${description.slice(0, 100)}...` : description}</p>
                            <div className='flex items-center'>
                                <img className="w-10 h-10 rounded-full" src={providerImage} alt="Rounded avatar"></img>
                                <p className='text-base ml-3 font-semibold'>{providerName}</p>
                            </div>
                            <p className='text-lg text-green-500'>Price: {price}</p>

                            <div className="">
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                <button className="btn w-full bg-orange-500 hover:bg-orange-600 text-white" onClick={() => {
                                    document.getElementById('my_modal_5').showModal()
                                    setHide(false)
                                }}>Purchase</button>

                                {!hide && <dialog id="my_modal_5"  className={`modal modal-bottom sm:modal-middle `}>
                                    <div className="modal-box">

                                        <form onSubmit={handlePurchase}>
                                            <div className="mb-6">
                                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Service name</label>
                                                <input type="text" id="disabled-input" aria-label="disabled input" className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={name} disabled />

                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="image" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Image</label>
                                                <input type="text" id="disabled-input" aria-label="disabled input" className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={image} disabled />

                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Provider Email</label>
                                                <input type="text" id="disabled-input" aria-label="disabled input" className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={providerEmail} disabled />

                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User email</label>
                                                <input type="text" id="disabled-input" aria-label="disabled input" className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={user.email} disabled />

                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
                                                <input type="date" id="email" name="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="date" required />
                                            </div>
                                            <div className="mb-6">
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Address</label>
                                                <input type="text" id="email" name="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Address" required />

                                            </div>


                                            <div className="mb-6">
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
                                                <input type="text" id="disabled-input" aria-label="disabled input" className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" value={price} disabled />

                                            </div>
                                            <button type="submit" className="text-white bg-green-400 hover:bg-green-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Purchase</button>
                                        </form>
                                    </div>
                                </dialog>}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <h2 className="text-center my-6 text-3xl font-bold text-green-400">Other Services of this provider</h2>
            <div className="grid grid-cols-1 gap-4">
                {
                    otherServices.map(service => <div key={service._id} className="flex w-3/4 mx-auto flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                        <img className="object-cover rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={service.image} alt="" />
                        <div className="flex flex-col justify-between p-4 leading-normal">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-500 dark:text-white">{service.name}</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">{service.description?.length >= 100 ? `${service.description.slice(0, 100)}...` : service.description}</p>
                            <div className='flex items-center'>
                                <img className="w-10 h-10 rounded-full" src={service.providerImage} alt="Rounded avatar"></img>
                                <p className='text-base ml-3 font-semibold'>{service.providerName}</p>
                            </div>
                            <p className='text-lg text-green-500'>Price: {service.price}</p>
                            <p className='text-lg text-green-500'>Service Area: {service.area}</p>

                            <Link to={`/servicedetail/${service._id}`}><button className='btn w-full text-orange-400 bg-green-700 hover:bg-green-950'>View Details</button></Link>

                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ServiceDetails;