import { Helmet } from "react-helmet";
import Banner from "../components/Header/Banner";
import Contact from "../components/Main/Contact";
import Faquestion from "../components/Main/Faquestion";
import SocialMedia from "../components/Main/SocialMedia";
// import LocationArea from "../components/Main/LocationArea";
import ServiceCards from "../components/ServiceCards/ServiceCards";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>ToolLander</title>
                <meta name="description" content="ToolLander" />
            </Helmet>
            <Banner></Banner>
            <ServiceCards></ServiceCards>
            <Faquestion></Faquestion>
            {/* <LocationArea></LocationArea> */}
            <Contact></Contact>
            <SocialMedia></SocialMedia>
            Thisis home

        </div>
    );
};

export default Home;