import { Sparkles } from "lucide-react";

const BookCallIntro = ({ head, body }) => {
    const highlight = "One Subscription";
    const highlightIndex = head.indexOf(highlight);

    return (
        <div className="mx-auto mb-14 max-w-4xl text-center md:mb-20">
            <h2 className="text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl lg:text-[50px]">
                {highlightIndex === -1 ? (
                    head
                ) : (
                    <>
                        {head.slice(0, highlightIndex)}
                        <span className="bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
                            {highlight}
                        </span>
                        {head.slice(highlightIndex + highlight.length)}
                    </>
                )}
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 dark:text-white/75 md:text-lg">
                {body}
            </p>
        </div>
    );
};

export default BookCallIntro;