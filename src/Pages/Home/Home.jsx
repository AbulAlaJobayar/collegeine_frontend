import FeedbackSection from "./FeedbackSection/FeedbackSection";
import GallarySection from "./GallarySection/GallarySection";
import HeaderSection from "./HeaderSection/HeaderSection";
import HeroSection from "./HeroSection/HeroSection";
import ReachersSection from "./ReachersSection/ReachersSection";

const Home = () => {
    return (
        <div>
        {/* Hero Section */}
            <HeroSection></HeroSection>
            {/* Header Section */}
            <HeaderSection></HeaderSection>
            {/* Gallery Section */}
            <GallarySection></GallarySection>
            {/* Reachers section */}
            <ReachersSection></ReachersSection>
            <FeedbackSection></FeedbackSection>


          
            
 




        
        </div>
    );
};

export default Home;