import About from "../components/sections/About/About";
import BookACall from "../components/sections/BookACall/BookACall";
import DataTab from "../components/sections/DataSection/DataTab";
import FAQs from "../components/sections/FAQs/FAQs";
import Footer from "../components/sections/Footer/Footer";
import Hero from "../components/sections/Hero/Hero";
import MarqueeSection from "../components/sections/Hero/MarqueeSection";
import Testimonials from "../components/sections/Testimonials/Testimonials";
import SmootherWrapper from "../lib/wrapers/SmootherWraper";

const Home = () => {
    return (
        <SmootherWrapper>
            <Hero />
            <MarqueeSection />
            <DataTab />
            <About />
            <Testimonials />
            <FAQs />
            <BookACall />
            <Footer />
        </SmootherWrapper>
    );
};

export default Home;