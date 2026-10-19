import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const BGDesign1 = () => {
  const bgDesignRef = useRef([]);
  useGSAP(() => {

    gsap.from(bgDesignRef.current, {
      opacity: 0,
      scale: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: 'back.inOut',
      transformOrigin: '50% 0%',
      delay: 2.5
    })
  });
  return (
    <div
      ref={(el) => (bgDesignRef.current[0] = el)}
      className="w-full h-full flex border items-top justify-center border-b-5 border-x-5 border-orange-400 dark:border-sky-400 rounded-b-full z-0"
    >
      <div
        ref={(el) => (bgDesignRef.current[1] = el)}
        className="flex items-top justify-center w-4/5 h-4/5 border-b-5 border-x-5 border-orange-400 dark:border-sky-400 rounded-b-full z-0"
      >
        <div
          ref={(el) => (bgDesignRef.current[2] = el)}
          className="flex items-top justify-center w-3/4 h-3/4 border-b-5 border-x-5 border-orange-400 dark:border-sky-400 rounded-b-full z-0"
        >
          <div
            ref={(el) => (bgDesignRef.current[3] = el)}
            className="flex items-top justify-center w-2/3 h-2/3 border-b-5 border-x-5 border-orange-400 dark:border-sky-400 rounded-b-full z-0"
          >
            <div
              ref={(el) => (bgDesignRef.current[4] = el)}
              className="flex items-top justify-center w-1/2 h-1/2 border-b-5 border-x-5 border-orange-400 dark:border-sky-400 rounded-b-full z-0"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BGDesign1;
