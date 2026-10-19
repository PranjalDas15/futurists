import { ArrowUpRight, Check } from "lucide-react";

const ServiceSlide = ({ service, index }) => {
    return (
        <div className="relative overflow-hidden rounded-3xl border border-secondary bg-primary p-6 shadow-sm transition-all duration-300 hover:border-violet-400/40 sm:p-8 lg:p-10">


            <div className="relative">
                <h3 className="text-3xl font-bold leading-tight tracking-tight text-text-primary sm:text-4xl">
                    {service.head}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-text-primary/65 sm:text-base sm:leading-8">
                    {service.body}
                </p>
                <div className="mt-7">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-text-primary/45">
                        What we can do
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {service.capsules.map((capsule) => (
                            <span
                                key={capsule}
                                className="inline-flex items-center gap-2 rounded-lg border border-secondary bg-primary/70 px-3 py-2 text-xs font-medium text-text-primary/75 transition-colors hover:border-violet-400/40 hover:bg-violet-500/[0.05] sm:text-sm"
                            >
                                <Check
                                    size={14}
                                    className="shrink-0 text-violet-500 dark:text-sky-300"
                                />
                                {capsule}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceSlide;