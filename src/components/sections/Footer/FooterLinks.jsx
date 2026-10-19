
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const FooterLinks = ({ group }) => {
    const isServices = group.head === "Services";

    return (
        <div>
            <h3 className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white">
                <span className="h-px w-5 bg-sky-200" />
                {group.head}
            </h3>

            <ul
                className={
                    isServices
                        ? "grid grid-cols-1 gap-x-5 gap-y-3 sm:grid-cols-2"
                        : "flex flex-col gap-3"
                }
            >
                {group.links.map((item) => (
                    <li key={item.name}>
                        <Link
                            to={item.href}
                            className="group inline-flex items-center gap-1.5 text-sm text-white/65 transition-colors duration-300 hover:text-white"
                        >
                            <span className="transition-transform duration-300 group-hover:translate-x-1">
                                {item.name}
                            </span>

                            <ArrowUpRight
                                size={12}
                                className="opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-80"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FooterLinks;
