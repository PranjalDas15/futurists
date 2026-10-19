import MarqueeModule from "react-fast-marquee";
import { heroSection } from "../../../assets/assets";
import { Gem } from "lucide-react";

const Marquee = MarqueeModule.default;

const MarqueeSection = () => {
    return (
        <section>
            <Marquee autoFill speed={30}>
                <div className="flex items-center justify-center px-4 gap-8 py-10 bg-clip-text bg-linear-to-br from-purple-600 to-sky-600 text-transparent">
                    <p className="text-[50px] font-bold">
                        {heroSection.head2}
                    </p>
                    <Gem className="text-purple-600" size={30} />
                </div>
            </Marquee>
        </section>
    );
};

export default MarqueeSection;