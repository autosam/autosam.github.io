import classNames from "classnames";
import { useInView } from "react-intersection-observer";

export const HeroText = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
    delay: 150,
  });

  const className = classNames(
    "text-[clamp(2rem,12vw,200px)] leading-none flex flex-col justify-center items-center h-screen"
  );

  const aClassName = classNames("transition-all duration-500", {
    "opacity-0 -translate-y-8 scale-95 blur-sm": !inView,
    "opacity-100 translate-x-0": inView,
  });

  return (
    <section ref={ref} className={className}>
      <a className={aClassName} href="#">
        <h1>MAKE</h1>
        <h1>THINGS</h1>
        <h1 className="font-extrabold">HAPPEN.</h1>
      </a>
    </section>
  );
};
