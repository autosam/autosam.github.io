import { uid } from "uid";
import { Scramble } from "../Scramble";

export const Hero = () => {
  return (
    <div className="w-full h-72 bg-black text-white overflow-hidden relative border border-black select-none">
      <label className=" absolute z-10 top-8 left-8 w-full h-full text-9xl flex gap-2 -m-8 justify-center">
        {new Array(6).fill(1).map((_, i) => (
          <div
            key={i}
            style={{
              animationDelay: `${250 * -i}ms`,
            }}
            className="flex flex-col flex-nowrap animate-bounce [&>*]:-my-4"
          >
            <h1>SAMAN</h1>
            <h1>SAMAN</h1>
            <h1 className="w-[1px] whitespace-nowrap">
              <Scramble delay={8000 + 1000 * Math.random()} text="SAMAN" />
            </h1>
            <h1>SAMAN</h1>
            <h1>SAMAN</h1>
            <h1>SAMAN</h1>
          </div>
        ))}
      </label>

      <div className="absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center">
        <img className="w-32 border border-white" src="/logo2.png" />
      </div>
    </div>
  );
};

/* import { uid } from "uid";
import { Scramble } from "../Scramble";

export const Hero = () => {
  return (
    <div className="w-full h-72 bg-black text-white overflow-hidden relative border border-black">
      <label className=" absolute z-10 top-0 left-0 w-full h-full text-9xl flex gap-2 justify-center">
        {new Array(4).fill(1).map((_, i) => (
          <div
            key={uid()}
            style={{
              animationDelay: `${250 * -i}ms`,
            }}
            className={`flex flex-col animate-bounce w-1/3 overflow-hidden flex-grow items-center [&>*]:-my-4`}
          >
            {new Array(6).fill(1).map(() => (
              <Scramble key={uid()} delay={10000 + i * 100} text="SAMAN" />
            ))}
          </div>
        ))}
      </label>

      <div className="absolute z-10 top-0 left-0 w-full h-full flex justify-center items-center">
        <img className="w-32 border border-white" src="/logo2.png" />
      </div>
    </div>
  );
};
 */
