import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const BGDesign2 = () => {
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
      className="w-full h-full flex border items-end justify-center border-t-5 border-x-5 border-orange-400 dark:border-sky-400 rounded-t-full z-0"
    >
      <div
        ref={(el) => (bgDesignRef.current[1] = el)}
        className="flex items-end justify-center w-4/5 h-4/5 border-t-5 border-x-5 border-orange-400 dark:border-sky-400 rounded-t-full z-0"
      >
        <div
          ref={(el) => (bgDesignRef.current[2] = el)}
          className="flex items-end justify-center w-3/4 h-3/4 border-t-5 border-x-5 border-orange-400 dark:border-sky-400 rounded-t-full z-0"
        >
          <div
            ref={(el) => (bgDesignRef.current[3] = el)}
            className="flex items-end justify-center w-2/3 h-2/3 border-t-5 border-x-5 border-orange-400 dark:border-sky-400 rounded-t-full z-0"
          >
            <div
              ref={(el) => (bgDesignRef.current[4] = el)}
              className="flex items-end justify-center w-1/2 h-1/2 border-t-5 border-x-5 border-orange-400 dark:border-sky-400 rounded-t-full z-0"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BGDesign2;
