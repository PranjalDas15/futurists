import Section2Card from "./Section2Card";

const Section2Cards = ({ cards }) => {
    if (!cards?.length) return null;

    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cards.map((card, index) => (
                <Section2Card
                    key={index}
                    card={card}
                    index={index}
                />
            ))}
        </div>
    );
};

export default Section2Cards;