
import { footerContent } from "../../../assets/assets";
import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterContact from "./FooterContact";
import FooterBottomBar from "./FooterBottomBar";

const Footer = () => {
    const { logo, body, moto, footerLinks, contact_details, footer } = footerContent;

    return (
        <footer className="relative isolate overflow-hidden bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-700 text-white">
            {/* Ambient lighting */}
            <div className="pointer-events-none absolute -left-40 top-10 -z-10 size-[350px] rounded-full bg-fuchsia-400/15 blur-[120px]" />
            <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 size-[400px] rounded-full bg-sky-300/15 blur-[130px]" />

            <div className="mx-auto max-w-[1500px] px-6 sm:px-10 lg:px-16">
                <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10 lg:py-16">
                    <div className="sm:col-span-2 lg:col-span-4">
                        <FooterBrand logo={logo} body={body} moto={moto} />
                    </div>

                    {footerLinks.map((group) => (
                        <div
                            key={group.head}
                            className={
                                group.head === "Services"
                                    ? "lg:col-span-4"
                                    : "lg:col-span-2"
                            }
                        >
                            <FooterLinks group={group} />
                        </div>
                    ))}

                    <div className="sm:col-span-2 lg:col-span-2">
                        <FooterContact contact={contact_details} />
                    </div>
                </div>

                <FooterBottomBar footer={footer} />
            </div>
        </footer>
    );
};

export default Footer;
