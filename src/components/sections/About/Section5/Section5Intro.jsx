const Section5Intro = ({ head, body }) => (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
        <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-[50px]">
            {head}
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-text-primary/60 sm:text-base md:mt-5 md:leading-8">
            {body}
        </p>
    </div>
);

export default Section5Intro;