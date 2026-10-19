
import TestimonialsIntro from "./TestimonialsIntro";
import { testimonials } from "../../../assets/assets";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
    if (!testimonials.content?.length) return null;

    return (
        <section id="testimonials" className="relative isolate overflow-hidden px-5 py-16 sm:px-8 md:px-12 md:py-24 lg:px-20">
            {/* Ambient background */}
            <div className="pointer-events-none absolute left-1/4 top-0 size-72 rounded-full bg-violet-500/[0.07] blur-[110px]" />
            <div className="pointer-events-none absolute bottom-0 right-0 size-72 rounded-full bg-sky-500/[0.07] blur-[110px]" />

            <div className="relative mx-auto max-w-7xl">
                <TestimonialsIntro head={testimonials.head} />
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
                    {testimonials.content.map((item, index) => (
                        <TestimonialCard
                            key={item.name}
                            testimonial={item}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
