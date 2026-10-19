import { heroSection } from "../../../assets/assets"
import Button from "./Button"

const Hero = () => {
    return (
        <section className='w-screen flex flex-col items-center'>
            <div className="w-[60%] flex flex-col items-center gap-10">
                <h1 className="font-encode text-[120px] font-black text-center leading-[130px]">{heroSection.head1}</h1>
                <p className="text-center text-[25px] leading-[30px]">{heroSection.body}</p>
                <Button name={'Book a call'} />
            </div>
        </section>
    )
}

export default Hero