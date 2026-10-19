const Section2Intro = ({ head, body }) => {
    return (
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-14">
            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-[50px]">
                {head}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 md:mt-6 md:text-base md:leading-8">
                {body}
            </p>
        </div>
    );
};

export default Section2Intro;