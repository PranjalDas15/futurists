const SocialProof = ({ images, text }) => {
    return (
        <div className="flex flex-col items-center gap-3 text-center">
            <div className="flex items-center justify-center">
                {images.map((item, index) => (
                    <div
                        key={item.name}
                        className={`relative size-11 shrink-0 overflow-hidden rounded-full border-[3px] border-gradient-to-br from-violet-600 via-indigo-600 to-blue-700 shadow-md sm:size-12 ${index !== 0 ? "-ml-3" : ""
                            }`}
                        style={{ zIndex: images.length - index }}
                    >
                        <img
                            src={item.img}
                            alt={item.name}
                            className="h-full w-full object-cover"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>

            <p className="max-w-xl text-sm leading-6 text-text-primary/65 sm:text-base">
                {text}
            </p>
        </div>
    );
};

export default SocialProof;