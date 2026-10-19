import Section1Card from "./Section1Card";

const Section1Cards = ({ cards }) => {
    if (!cards?.length) return null;

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {cards.map((card, index) => (
                <Section1Card
                    key={index}
                    card={card}
                    index={index}
                />
            ))}
        </div>
    );
};

export default Section1Cards;