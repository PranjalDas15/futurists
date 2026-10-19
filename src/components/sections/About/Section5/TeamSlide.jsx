import TeamPortrait from "./TeamPortrait";
import TeamDetails from "./TeamDetails";

const TeamSlide = ({ employee, index }) => (
    <article
        aria-hidden="false"
        className="grid w-full shrink-0 grid-cols-1 md:min-h-[400px] md:grid-cols-[0.95fr_1.05fr] lg:min-h-[440px]"
    >
        <TeamPortrait employee={employee} index={index} />
        <TeamDetails employee={employee} index={index} />
    </article>
);

export default TeamSlide;