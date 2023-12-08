
import { Helmet } from "react-helmet";
import ServicesCards from "../components/ServiceCards/ServicesCards";
import { useState } from "react";


const ServicesPage = () => {
    const [searchText, setSearchText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const search = e.target.search.value;
        setSearchText(search)
        
    }

    return (
        <div>
            <Helmet>
                <title>ToolLander || Services</title>
                <meta name="description" content="Services" />
            </Helmet>
            <h2 className="text-3xl text-center">Services</h2>
            <div>
                <form onSubmit={handleSubmit} className="flex justify-center items-center">
                    <input type="text" placeholder="search" name="search" className="rounded" />
                    <button className="btn">Search</button>
                </form>
            </div>
            <ServicesCards searchText={searchText}></ServicesCards>
        </div>
    );
};

export default ServicesPage;