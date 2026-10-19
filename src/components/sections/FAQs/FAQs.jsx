import FAQsIntro from "./FAQsIntro";
import FAQList from "./FAQList";
import { faqData } from "../../../assets/assets";

const FAQs = () => {
    return (
        <section className="relative isolate overflow-hidden px-5 py-16 sm:px-8 md:px-12 md:py-20 lg:px-20">
            <div className="relative mx-auto max-w-7xl">
                <FAQsIntro head={faqData.head} body={faqData.body} />

                <FAQList items={faqData.content} />
            </div>
        </section>
    );
};

export default FAQs;