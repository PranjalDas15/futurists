
const InfoCard = ({ icon: Icon, head, body }) => (
    <div className="group h-full rounded-2xl border border-violet-200/70 bg-white/80 p-4 shadow-lg shadow-violet-950/[0.03] backdrop-blur-lg transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-950/[0.06] dark:border-white/15 dark:bg-white/[0.07] dark:shadow-none dark:hover:border-sky-300/30 dark:hover:bg-white/[0.10] sm:p-5">
        <div className="mb-3 flex size-9 items-center justify-center rounded-xl border border-violet-200 bg-gradient-to-br from-violet-100 to-sky-100 text-indigo-700 transition-transform duration-300 group-hover:scale-105 dark:border-white/15 dark:from-sky-200/10 dark:to-violet-200/10 dark:text-sky-200 sm:size-10">
            {Icon && <Icon size={19} strokeWidth={1.8} />}
        </div>

        <h4 className="text-sm font-semibold leading-5 text-slate-900 dark:text-white sm:text-base">
            {head}
        </h4>

        <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-white/55 sm:text-sm">
            {body}
        </p>
    </div>
);

export default InfoCard;
