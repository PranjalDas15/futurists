
import { useState } from "react";
import FAQItem from "./FAQItem";

const FAQList = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);

    if (!items?.length) return null;

    const midpoint = Math.ceil(items.length / 2);
    const columns = [
        items.slice(0, midpoint),
        items.slice(midpoint),
    ];

    const toggleItem = (index) => {
        setActiveIndex((current) => (
            current === index ? null : index
        ));
    };

    return (
        <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 md:gap-x-10">
            {columns.map((column, columnIndex) => (
                <div key={columnIndex} className="min-w-0">
                    {column.map((item) => {
                        const index = items.indexOf(item);

                        return (
                            <FAQItem
                                key={item.head}
                                item={item}
                                index={index}
                                isOpen={activeIndex === index}
                                onToggle={() => toggleItem(index)}
                            />
                        );
                    })}
                </div>
            ))}
        </div>
    );
};

export default FAQList;
