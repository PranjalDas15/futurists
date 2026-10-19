
import { MoveUpRight } from "lucide-react";
import { Link } from "react-router";

const FooterBottomBar = ({ footer }) => {
    return (
        <div className="border-t border-white/20 py-6">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs leading-6 text-white/60">
                    {footer.text}
                </p>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
                    {footer.links.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            className="text-xs text-white/60 transition-colors hover:text-white"
                        >
                            {item.name}
                        </Link>
                    ))}

                    <a
                        href="#top"
                        className="group inline-flex items-center gap-2 text-xs font-medium text-white/80 transition-colors hover:text-white"
                    >
                        Back to top

                        <span className="flex size-7 items-center justify-center rounded-full border border-white/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-white/60 group-hover:bg-white/10">
                            <MoveUpRight size={13} />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FooterBottomBar;
