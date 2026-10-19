
import MarqueeModule from "react-fast-marquee";
import { brands } from "../../../assets/assets";
const Marquee = MarqueeModule.default;
const Marquee2 = () => {
    const midpoint = Math.ceil(brands.logos.length / 2);

    const firstRow = brands.logos.slice(0, midpoint);
    const secondRow = brands.logos.slice(midpoint);

    const renderBrands = (items, rowIndex) =>
        items.map((brand, index) => (
            <div
                key={`${rowIndex}-${index}`}
                className="mx-3 flex h-16 w-28 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-secondary/70 bg-white p-3 backdrop-blur-md sm:mx-5 sm:h-20 sm:w-36 sm:rounded-3xl sm:p-4"
            >
                <img
                    src={brand}
                    alt={`Partner brand ${rowIndex * midpoint + index + 1}`}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain"
                />
            </div>
        ));

    return (
        <section className="relative w-full overflow-hidden py-10 sm:py-14">
            <div className="mb-8 px-4 text-center sm:mb-10">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-text-primary/60 sm:text-sm">
                    {brands.head}
                </p>
                <div className="mx-auto mt-3 h-1 w-12 rounded-full bg-gradient-to-r from-violet-500 to-sky-500" />
            </div>

            <div className="flex flex-col gap-4 sm:gap-6">
                <Marquee
                    direction="right"
                    speed={35}
                    autoFill
                    pauseOnHover
                    gradient={false}
                >
                    {renderBrands(firstRow, 0)}
                </Marquee>

                <Marquee
                    direction="left"
                    speed={35}
                    autoFill
                    pauseOnHover
                    gradient={false}
                >
                    {renderBrands(secondRow, 1)}
                </Marquee>
            </div>
        </section>
    );
};

export default Marquee2;
