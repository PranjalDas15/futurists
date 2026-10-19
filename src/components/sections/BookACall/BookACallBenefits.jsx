
import { Check, Clock3, Target, TrendingUp } from "lucide-react";
import { bookACallSection } from "../../../assets/assets";
import InfoCard from "./InfoCard";

const BookCallBenefits = ({ benefits }) => {
    return (
        <>
            {/* Benefits card */}
            <div className="rounded-3xl border border-violet-200/70 bg-white/80 p-6 shadow-xl shadow-violet-950/[0.04] backdrop-blur-xl transition-colors duration-300 dark:border-white/20 dark:bg-white/[0.08] dark:shadow-none sm:p-8">
                <div className="mb-7 flex items-center gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-100 to-sky-100 text-indigo-700 dark:border-sky-200/20 dark:from-sky-200/10 dark:to-violet-200/10 dark:text-sky-100">
                        <Target size={22} />
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-2xl">
                            {benefits.head}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500 dark:text-white/65">
                            A focused conversation. Real direction.
                        </p>
                    </div>
                </div>

                <ul className="flex flex-col gap-5">
                    {benefits.list.map((item) => (
                        <li
                            key={item}
                            className="group flex items-start gap-4"
                        >
                            <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-violet-200 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-700 text-white shadow-sm shadow-indigo-500/15 transition-transform duration-300 group-hover:scale-110 dark:border-emerald-200/30">
                                <Check size={13} strokeWidth={2.5} />
                            </span>

                            <span className="text-sm leading-6 text-slate-600 transition-colors duration-300 group-hover:text-slate-950 dark:text-white/75 dark:group-hover:text-white sm:text-base">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="grid grid-cols-2 items-stretch gap-3 sm:gap-4">
                {bookACallSection.infoCards.map((info, index) => (
                    <InfoCard
                        key={info.head ?? index}
                        icon={info.icon}
                        head={info.head}
                        body={info.body}
                    />
                ))}
            </div>
        </>
    );
};


export default BookCallBenefits;
