const FormField = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    autoComplete,
    required = false,
}) => {
    return (
        <label className="block">
            <span className="mb-2.5 block text-sm font-medium text-slate-700 dark:text-white/90">
                {label}
            </span>

            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                autoComplete={autoComplete}
                required={required}
                className="w-full rounded-xl border border-violet-200 bg-white px-4 py-3.5 text-sm text-slate-800 outline-none placeholder:text-slate-400 transition-all duration-300 focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/10 dark:border-white/20 dark:bg-indigo-950/20 dark:text-white dark:placeholder:text-white/35 dark:focus:border-sky-200/70 dark:focus:bg-indigo-950/30 dark:focus:ring-sky-200/10"
            />
        </label>
    );
};

export default FormField;