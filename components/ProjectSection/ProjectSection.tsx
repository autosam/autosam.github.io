import { ProjectProps } from "@/constants/project.consts";
import classNames from "classnames";
import Link from "next/link";

type Props = {
  project: ProjectProps;
  sectionNumber: number;
};
export const ProjectSection = ({ project, sectionNumber }: Props) => {
  const type = sectionNumber % 2 === 1;

  const className = classNames(
    "my-3 h-screen flex justify-center items-center",
    {
      "bg-white text-black": type,
      "bg-black text-white": !type,
    }
  );

  return (
    <div className={className}>
      <div className="w-3/4 inline-flex justify-center items-center max-md:flex-col gap-6">
        <img
          className="w-[clamp(400px, 100vw)] transition-transform duration-500 animate-view"
          src={project.img}
        />
        <Link href={`works/${project.id}`}>
          <div className="max-w-screen-sm text-md inline-flex flex-col gap-2 animate-view">
            <h1 className="_text-7xl text-[3.5vw] font-extrabold hover:underline">
              {project.title}
            </h1>
            <p className="uppercase">{project.type}</p>
            <p className="mt-4">{project.description?.slice(0, 500)}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
