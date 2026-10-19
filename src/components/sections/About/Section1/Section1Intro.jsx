const Section1Intro = ({ head1, head2 }) => {
    return (
        <div className="mx-auto mb-10 max-w-4xl text-center md:mb-12">
            <h1 className="text-3xl font-bold leading-[1.12] tracking-tight sm:text-4xl md:text-5xl lg:text-[50px]">
                <span className="block">{head1}</span>

                <span className="mt-1 block bg-gradient-to-r from-sky-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">
                    {head2}
                </span>
            </h1>
        </div>
    );
};

export default Section1Intro;