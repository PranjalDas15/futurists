import { assets, heroSection } from "../../../assets/assets";
import SocialProof from "./SocialProof";
import Stats from "./Stats";

const DataTab = () => {
    return (
        <section id="data-tab" className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-10 px-5 py-8 text-center sm:gap-12 sm:px-8">
            <SocialProof
                images={[
                    { img: assets.hero1, name: "Client 1" },
                    { img: assets.hero2, name: "Client 2" },
                    { img: assets.hero3, name: "Client 3" },
                ]}
                text={heroSection.hero1}
            />

            <Stats data={heroSection.heroData} />
        </section>
    );
};

export default DataTab;