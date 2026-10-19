
import { Mail, MapPin, Phone } from "lucide-react";

const ContactItem = ({ icon: Icon, title, children }) => (
    <div className="flex items-start gap-3">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-sky-100">
            <Icon size={16} />
        </span>

        <div className="min-w-0">
            <p className="mb-2 text-xs font-semibold text-white/90">
                {title}
            </p>
            {children}
        </div>
    </div>
);

const FooterContact = ({ contact }) => {
    return (
        <div>
            <h3 className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white">
                <span className="h-px w-5 bg-sky-200" />
                Get in touch
            </h3>

            <div className="flex flex-col gap-6">
                <ContactItem
                    icon={MapPin}
                    title={contact.address_head}
                >
                    <p className="text-sm leading-6 text-white/65">
                        {contact.address}
                    </p>
                </ContactItem>

                <ContactItem
                    icon={Mail}
                    title={contact.email_head}
                >
                    <a
                        href={`mailto:${contact.email}`}
                        className="break-all text-sm text-white/65 transition-colors hover:text-white"
                    >
                        {contact.email}
                    </a>
                </ContactItem>

                <ContactItem
                    icon={Phone}
                    title={contact.phone_head}
                >
                    <div className="flex flex-col gap-2">
                        {contact.phone.map((number) => (
                            <a
                                key={number}
                                href={`tel:${number.replace(/[^\d+]/g, "")}`}
                                className="text-sm text-white/65 transition-colors hover:text-white"
                            >
                                {number}
                            </a>
                        ))}
                    </div>
                </ContactItem>
            </div>
        </div>
    );
};

export default FooterContact;
