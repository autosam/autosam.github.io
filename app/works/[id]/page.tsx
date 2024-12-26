import { Scramble } from "@/components/Scramble";
import { PROJECTS } from "@/constants/projects";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { uid } from "uid";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({
    id: p.id,
  }));
}

const DEFAULT_LINK_TEXT = "VISIT";

export async function generateMetadata(
  { params },
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = (await params).id;
  const projectDefinition = PROJECTS.find((p) => id === p.id);
  if (!projectDefinition) return {};
  const previousImages = (await parent).openGraph?.images || [];
  return {
    title: projectDefinition?.title,
    openGraph: {
      images: projectDefinition?.img
        ? [projectDefinition?.img, ...previousImages]
        : previousImages,
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  const projectDefinition = PROJECTS.find((p) => id === p.id);

  if (!projectDefinition) notFound();

  const links = projectDefinition.links || [
    {
      text: DEFAULT_LINK_TEXT,
      url: projectDefinition.href,
    },
  ];

  return (
    <>
      <div className="flex gap-2 flex-wrap gap-y-8">
        <div className="gap-2 flex flex-col">
          <img className="w-80 h-fit" src={projectDefinition.img} />
          {links.map((link) => (
            <div key={uid()} className="inline-flex">
              <Link
                className="bg-black text-white px-2 hover:underline"
                href={link.url}
                target="_blank"
              >
                {(link?.text ?? DEFAULT_LINK_TEXT).toUpperCase()} \{">"}
              </Link>
            </div>
          ))}
        </div>
        <br />
        <div className="flex flex-col justify-between gap-1 mb-4">
          <div className="text-sm">
            <strong>
              <Scramble text={projectDefinition.title?.toUpperCase()} />
            </strong>
            <br />
            <div className="max-w-3xl text-justify prose prose-sm">
              <Markdown>{projectDefinition.description}</Markdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
