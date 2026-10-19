import { useState } from "react";
import TeamSlide from "./TeamSlide";
import TeamSliderControls from "./TeamSliderControls";

const TeamSlider = ({ employees }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const prevSlide = () => {
        setActiveIndex((prev) =>
            prev === 0 ? employees.length - 1 : prev - 1
        );
    };

    const nextSlide = () => {
        setActiveIndex((prev) =>
            prev === employees.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="relative">
            <div className="overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-700 shadow-xl shadow-indigo-950/20 md:rounded-3xl">
                <div
                    className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
                    style={{
                        transform: `translateX(-${activeIndex * 100}%)`,
                    }}
                >
                    {employees.map((employee, index) => (
                        <TeamSlide
                            key={employee.id ?? index}
                            employee={employee}
                            index={index}
                        />
                    ))}
                </div>
            </div>

            <TeamSliderControls
                employees={employees}
                activeIndex={activeIndex}
                onSelect={setActiveIndex}
                onPrevious={prevSlide}
                onNext={nextSlide}
            />
        </div>
    );
};

export default TeamSlider;