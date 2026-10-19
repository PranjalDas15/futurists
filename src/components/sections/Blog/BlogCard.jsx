import { ArrowUpRight, BookOpen } from "lucide-react";

const BlogCard = ({ blog, index, buttonText }) => {
    return (
        <article className="group relative flex h-full min-h-[190px] flex-col overflow-hidden rounded-2xl border border-secondary/70 bg-primary/70 p-4 shadow-sm backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:shadow-lg hover:shadow-violet-500/[0.06] sm:min-h-[210px] sm:p-5">

            <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-gradient-to-br from-violet-500/10 to-sky-500/10 blur-2xl"
            />

            <div className="flex size-9 items-center justify-center rounded-xl border border-secondary bg-primary text-violet-500 transition-colors duration-300 group-hover:border-violet-400/40 group-hover:bg-violet-500/10 dark:text-sky-300">
                <BookOpen size={17} strokeWidth={1.7} />
            </div>

            <h3 className="relative mt-4 text-base font-semibold leading-6 tracking-tight text-text-primary transition-colors duration-300 group-hover:text-violet-600 dark:group-hover:text-sky-300 sm:text-lg sm:leading-7">
                {blog.body}
            </h3>

            <div className="relative mt-auto pt-4">
                <a
                    href={blog.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex items-center gap-2 text-sm font-semibold text-text-primary/65 transition-colors hover:text-violet-500 dark:hover:text-sky-300"
                >
                    {buttonText}

                    <span className="flex size-7 items-center justify-center rounded-full border border-secondary transition-all duration-300 group-hover/link:border-violet-400/50 group-hover/link:bg-violet-500 group-hover/link:text-white dark:group-hover/link:bg-sky-400 dark:group-hover/link:text-slate-950">
                        <ArrowUpRight
                            size={14}
                            className="transition-transform duration-300 group-hover/link:rotate-45"
                        />
                    </span>
                </a>
            </div>
        </article>
    );
};

export default BlogCard;