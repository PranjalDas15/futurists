import About from "../components/sections/About/About";
import Blogs from "../components/sections/Blog/Blogs";
import BookACall from "../components/sections/BookACall/BookACall";
import DataTab from "../components/sections/DataSection/DataTab";
import FAQs from "../components/sections/FAQs/FAQs";
import Footer from "../components/sections/Footer/Footer";
import Hero from "../components/sections/Hero/Hero";
import Marquee1 from "../components/sections/Marquee/Marquee1";
import Marquee2 from "../components/sections/Marquee/Marquee2";
import Testimonials from "../components/sections/Testimonials/Testimonials";
import SmootherWrapper from "../lib/wrapers/SmootherWraper";

const Home = () => {
    return (
        <SmootherWrapper>
            <Hero />
            <DataTab />
            <Marquee1 />
            <Marquee2 />
            <About />
            <Testimonials />
            <FAQs />
            <Blogs />
            <BookACall />
            <Footer />
        </SmootherWrapper>
    );
};

export default Home;