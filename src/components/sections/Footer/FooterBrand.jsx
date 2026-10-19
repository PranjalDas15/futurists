import { Link } from "react-router";

const FooterBrand = ({ logo, moto, body, socials }) => {
    return (
        <div>
            <Link to="/" className="inline-flex items-center">
                <img
                    src={logo}
                    alt="Futurists"
                    className="h-12 w-auto object-contain"
                />
            </Link>

            <img
                src={moto}
                alt="Futurists motto"
                className="mt-3 h-auto w-full max-w-[220px] object-contain object-left"
                loading="lazy"
            />

            <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
                {body}
            </p>

            <div className="flex gap-2">
                {socials.map((s, index) => (
                    <button key={index} className="cursor-ppointer">
                        <img
                            src={s}
                            alt="Futurists motto"
                            className="mt-3 h-auto w-full max-w-[20px] object-contain object-left"
                            loading="lazy"
                        />
                    </button>
                ))}
            </div>
        </div>
    );
};

export default FooterBrand;