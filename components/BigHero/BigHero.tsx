import { Scramble } from "../Scramble";

type Types = {
  ref: React.RefObject<HTMLDivElement>;
};
export const BigHero = ({ ref }: Types) => {
  return (
    <div
      ref={ref}
      className="w-full h-svh bg-black text-white relative overflow-hidden"
    >
      <label className="absolute flex flex-col text-[300px] leading-[260px] font-extrabold select-none opacity-15">
        <Scramble text="SMN" />
        <Scramble text="MHMDY" />
      </label>

      <div className="w-full h-full flex flex-col justify-center items-center text-center text-xl">
        <div className="flex gap-32">
          <div className="flex flex-col justify-start items-start">
            <span>SMN MHMDY ™</span>
            <span className="opacity-50">SAMGAMES</span>
            <span className="opacity-25">SAMANDEV</span>
          </div>
          <div className="flex flex-col justify-start items-start">
            <span>[ WEB DEVELOPER ]</span>
            <span>[ GAME DEVELOPER ]</span>
            <span>[ PRODUCER ]</span>
          </div>
          <div className="flex flex-col justify-start items-start">
            <span>24 YEARS OLD</span>
            <span>FOREVER PERSIAN GULF</span>
          </div>
        </div>
      </div>
    </div>
  );
};
