import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import Navbar from "../../components/Navbar/Navbar";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);

const SmootherWrapper = ({ children }) => {
    const wrapperRef = useRef(null);
    const contentRef = useRef(null);

    useGSAP(() => {
        const smoother = ScrollSmoother.create({
            wrapper: wrapperRef.current,
            content: contentRef.current,
            smooth: 1.5,
            effects: true,
            smoothTouch: 0.1,
        });

        return () => smoother.kill();
    }, { scope: wrapperRef });

    return (
        <div
            ref={wrapperRef}
            id="smooth-wrapper"
            className="relative min-h-screen bg-primary"
        >
            <div className="absolute top-0 left-0 z-[100] w-full">
                <Navbar />
            </div>

            <div ref={contentRef} id="smooth-content" className="relative z-10 pt-[180px]">
                <div className="z-99">
                    {children}
                </div>
            </div>

            <div className="absolute -bottom-1/2 size-[800px] flex items-center justify-center">
                {[800, 700, 600, 500, 400, 300, 200, 100].map((size) => (
                    <div
                        key={size}
                        className="absolute flex items-center justify-center rounded-full border-2 border-sky-500/20"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                        }}
                    />
                ))}
            </div>

            <div className="absolute -top-1/2 right-0 size-[800px] flex items-center justify-center">
                {[800, 700, 600, 500, 400, 300, 200, 100].map((size) => (
                    <div
                        key={size}
                        className="absolute flex items-center justify-center rounded-full border-2 border-sky-500/20"
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                        }}
                    />
                ))}
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-1/2 size-[400px] bg-sky-500/20 rounded-full blur-[150px]" />

        </div>
    );
};

export default SmootherWrapper;