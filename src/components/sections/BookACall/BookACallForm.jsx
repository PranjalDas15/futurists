import { useState } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import FormField from "./FormField";

const BookCallForm = ({ placeholder, head }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        services: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Discovery call request:", formData);
    };

    return (
        <div className="relative"><div className="relative rounded-3xl border border-violet-200/80 bg-white/90 p-6 shadow-xl shadow-violet-950/[0.06] backdrop-blur-2xl transition-colors duration-300 dark:border-white/25 dark:bg-white/[0.12] dark:shadow-2xl dark:shadow-indigo-950/20 sm:p-9 lg:p-10">
            {/* Form heading */}
            <div className="mb-8">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                    {head}
                </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name and email */}
                <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                        label="Full name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        autoComplete="name"
                        required
                    />

                    <FormField
                        label="Work email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        autoComplete="email"
                        required
                    />
                </div>

                {/* Phone and company */}
                <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                        label="Contact number"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        autoComplete="tel"
                        required
                    />

                    <FormField
                        label="Company name"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        autoComplete="organization"
                        required
                    />
                </div>

                {/* Services */}
                <FormField
                    label="Services you're interested in"
                    name="services"
                    value={formData.services}
                    onChange={handleChange}
                    placeholder={placeholder}
                />

                {/* Submit button */}
                <button
                    type="submit"
                    className="group flex w-full items-center justify-center gap-3 rounded-full border border-indigo-600 bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-700 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/30 active:translate-y-0 active:scale-[0.99] dark:border-white/25 dark:bg-none dark:bg-white dark:text-indigo-700 dark:hover:bg-sky-100"
                >
                    Book a call

                    <span className="flex size-8 items-center justify-center rounded-full bg-white/15 text-white transition-transform duration-300 group-hover:rotate-45 dark:bg-indigo-600 dark:text-white">
                        <ArrowUpRight size={17} />
                    </span>
                </button>

                <p className="text-center text-xs leading-5 text-slate-500 dark:text-white/45">
                    No pressure. Just a conversation about your growth.
                </p>
            </form>
        </div>
        </div>
    );
};

export default BookCallForm;