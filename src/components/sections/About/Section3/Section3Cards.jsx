import Section3Card from "./Section3Card";

const Section3Cards = ({ cards }) => {
    if (!cards?.length) return null;

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {cards.map((card, index) => (
                <Section3Card
                    key={index}
                    card={card}
                />
            ))}
        </div>
    );
};

export default Section3Cards;