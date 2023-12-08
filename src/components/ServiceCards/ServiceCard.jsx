import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { name, image, description, providerName, providerImage, price, _id } = service



    return (
        <div>

            <div className="flex w-3/4 mx-auto flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img className="object-cover rounded-t-lg  md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={image} alt="" />
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-500 dark:text-white">{name}</h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 ">{description.length >= 100 ? `${description.slice(0, 100)}...` : description}</p>
                    <div className='flex items-center'>
                        <img className="w-10 h-10 rounded-full" src={providerImage} alt="Rounded avatar"></img>
                        <p className='text-base ml-3 font-semibold'>{providerName}</p>
                    </div>
                    <p className='text-lg text-green-500'>Price: {price}</p>
                    <Link to={`/servicedetail/${_id}`}><button className='btn w-full text-orange-400 bg-green-700 hover:bg-green-950'>View Details</button></Link>

                </div>
            </div>
            <div>

            </div>

        </div>
    );
};

ServiceCard.propTypes = {
    service: PropTypes.object
}

export default ServiceCard;