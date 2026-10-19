
import { Plus } from "lucide-react";
import { useId } from "react";

const FAQItem = ({ item, index, isOpen, onToggle }) => {
    const id = useId();
    const buttonId = `faq-button-${id}`;
    const panelId = `faq-panel-${id}`;

    return (
        <div className="min-w-0 border-t border-secondary/70">
            <h3>
                <button
                    id={buttonId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={onToggle}
                    className="group flex w-full items-center gap-4 py-5 text-left sm:py-6"
                >
                    <span
                        className={`hidden shrink-0 font-mono text-[11px] tracking-widest transition-colors duration-300 sm:block ${isOpen
                            ? "text-violet-500 dark:text-sky-300"
                            : "text-text-primary/35"
                            }`}
                    >
                        {String(index + 1).padStart(2, "0")}
                    </span>

                    <span
                        className={`min-w-0 flex-1 text-sm font-semibold leading-6 transition-colors duration-300 sm:text-base ${isOpen
                            ? "text-violet-500 dark:text-sky-300"
                            : "text-text-primary group-hover:text-violet-500 dark:group-hover:text-sky-300"
                            }`}
                    >
                        {item.head}
                    </span>

                    <span
                        className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 sm:size-9 ${isOpen
                            ? "rotate-45 border-violet-500/30 bg-violet-500/10 text-violet-500 dark:border-sky-300/30 dark:bg-sky-300/10 dark:text-sky-300"
                            : "border-secondary/70 bg-primary/40 text-text-primary/60 group-hover:border-violet-500/40"
                            }`}
                    >
                        <Plus size={17} strokeWidth={1.7} />
                    </span>
                </button>
            </h3>

            <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                aria-hidden={!isOpen}
                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
            >
                <div className="overflow-hidden">
                    <p
                        className={`pb-6 pl-0 text-sm leading-7 text-text-primary/65 transition-opacity duration-300 sm:pl-10 sm:pr-10 ${isOpen ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {item.body}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FAQItem;
