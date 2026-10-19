const Section3Intro = ({ head, body }) => {
    return (
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-[50px]">
                {head}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-text-primary/65 sm:text-base sm:leading-8 md:mt-6 md:text-lg">
                {body}
            </p>
        </div>
    );
};

export default Section3Intro;