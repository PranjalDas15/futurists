
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

    useGSAP(
        () => {
            const smoother = ScrollSmoother.create({
                wrapper: wrapperRef.current,
                content: contentRef.current,
                smooth: 1.5,
                effects: true,
                smoothTouch: 0.1,
            });

            return () => smoother.kill();
        },
        { scope: wrapperRef }
    );

    return (
        <div
            ref={wrapperRef}
            id="smooth-wrapper"
            className="relative min-h-screen overflow-hidden bg-primary"
        >
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
            >
                <div
                    className="absolute inset-0 opacity-70 dark:opacity-40"
                    style={{
                        backgroundImage: `
                            linear-gradient(to right, rgba(99,102,241,0.13) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(99,102,241,0.13) 1px, transparent 1px)
                        `,
                        backgroundSize: "55px 55px",
                        maskImage:
                            "radial-gradient(ellipse at 50% 25%, black 0%, transparent 80%)",
                    }}
                />

                <div
                    className="absolute -left-40 top-[5%] h-[600px] w-[600px] rounded-full blur-[100px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(124,58,237,0.34) 0%, rgba(124,58,237,0.16) 38%, transparent 70%)",
                    }}
                />

                <div
                    className="absolute -right-40 top-[12%] h-[650px] w-[650px] rounded-full blur-[110px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(14,165,233,0.32) 0%, rgba(59,130,246,0.17) 42%, transparent 70%)",
                    }}
                />

                <div
                    className="absolute left-1/2 top-[20%] h-[180px] w-[85%] -translate-x-1/2 rotate-[-12deg] rounded-[100%] blur-[65px]"
                    style={{
                        background:
                            "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.25) 25%, rgba(56,189,248,0.32) 55%, rgba(99,102,241,0.24) 80%, transparent 100%)",
                    }}
                />

                <div
                    className="absolute left-1/2 top-[28%] h-[300px] w-[300px] -translate-x-1/2 rounded-full blur-[100px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(129,140,248,0.20), transparent 70%)",
                    }}
                />

                <div
                    className="absolute -bottom-20 right-[5%] h-[500px] w-[500px] rounded-full blur-[110px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(139,92,246,0.25), rgba(14,165,233,0.12) 45%, transparent 72%)",
                    }}
                />

                <div className="absolute left-[13%] top-[24%] size-3 rounded-full border border-violet-300/70 bg-violet-400/50 shadow-[0_0_25px_8px_rgba(139,92,246,0.25)]" />

                <div className="absolute right-[18%] top-[38%] size-2 rounded-full bg-sky-300 shadow-[0_0_25px_8px_rgba(56,189,248,0.35)]" />

                <div className="absolute left-[70%] top-[15%] size-2 rounded-full bg-violet-300 shadow-[0_0_20px_6px_rgba(139,92,246,0.3)]" />

                <div className="absolute left-[12%] top-[34%] h-px w-24 bg-gradient-to-r from-transparent via-violet-400/60 to-transparent" />

                <div className="absolute right-[10%] top-[48%] h-px w-32 bg-gradient-to-r from-transparent via-sky-400/60 to-transparent" />
            </div>

            <div className="absolute left-0 top-0 z-[100] w-full">
                <Navbar />
            </div>

            <div
                ref={contentRef}
                id="smooth-content"
                className="relative z-10 pt-[180px]"
            >
                {children}
            </div>
        </div>
    );
};

export default SmootherWrapper;
