import { MoveUpRight } from "lucide-react";
import { aboutSection5 } from "../../../../assets/assets";

const TeamDetails = ({ employee, index }) => (
    <div key={index} className="relative flex flex-col justify-center px-6 py-8 sm:px-8 sm:py-10 md:px-9 md:py-10 lg:px-12 lg:py-12">
        <h3 className="max-w-xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            {employee.role}
        </h3>

        <div className="my-5 h-px w-full bg-gradient-to-r from-sky-200/50 via-white/20 to-transparent" />

        <p className="max-w-lg text-sm leading-7 text-white/80 sm:text-base sm:leading-8">
            {employee.desc}
        </p>

        <div className="mt-6 flex items-center gap-3">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-transform duration-300 hover:rotate-45">
                <MoveUpRight size={17} strokeWidth={1.6} />
            </div>

            <div>
                <p className="text-sm font-semibold text-white/90">
                    {aboutSection5.cardDetails.head}
                </p>

                <p className="mt-1 text-xs text-white/60">
                    {aboutSection5.cardDetails.body}
                </p>
            </div>
        </div>
    </div>
);

export default TeamDetails;