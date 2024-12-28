import { uid } from "uid";

export const Hero = () => {
  return (
    <div className="w-full h-72 bg-black text-white overflow-hidden relative border border-black">
      <label className=" absolute z-10 top-0 left-0 w-full h-full text-9xl flex gap-2 -m-8 justify-center animate-bounce">
        {new Array(6).fill(1).map(() => (
          <div key={uid()} className="flex flex-col [&>*]:-my-4">
            <h1>SAMAN</h1>
            <h1>SAMAN</h1>
            <h1>SAMAN</h1>
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
