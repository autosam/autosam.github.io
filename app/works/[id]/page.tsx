import { Scramble } from "@/components/Scramble";
import { PROJECTS } from "@/constants/projects";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const projectDefinition = PROJECTS.find((p) => id === p.id);

  if (!projectDefinition) notFound();

  return (
    <>
      <div className="flex gap-2 flex-wrap">
        <img className="w-80" src={projectDefinition.img} />
        <br />
        <div className="flex flex-col justify-between">
          <div className="text-sm">
            <strong>
              <Scramble text={projectDefinition.title?.toUpperCase()} />
            </strong>
            <div className="max-w-3xl text-justify">
              {projectDefinition.description}
            </div>
          </div>

          <div>
            <Link
              className="bg-black text-white px-2 hover:underline"
              href={projectDefinition.href}
              target="_blank"
            >
              VISIT \{">"}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
