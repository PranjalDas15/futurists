import Section4Item from "./Section4Item";

const Section4List = ({ cards }) => {
    if (!cards?.length) return null;

    return (
        <div className="border-t border-secondary/60">
            {cards.map((card, index) => (
                <Section4Item
                    key={index}
                    card={card}
                    index={index}
                />
            ))}
        </div>
    );
};

export default Section4List;