const FAQsIntro = ({ head, body }) => {
    return (
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
                {head}
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-text-primary/60 sm:text-base">
                {body}
            </p>
        </div>
    );
};

export default FAQsIntro;