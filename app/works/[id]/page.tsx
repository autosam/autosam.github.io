import { Scramble } from "@/components/Scramble";
import { PROJECT_SCREENSHOTS } from "@/constants/projectScreenshots";
import { PROJECTS } from "@/constants/projects";
import { Metadata, ResolvingMetadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

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

  const screenshots = PROJECT_SCREENSHOTS[projectDefinition?.id] ?? [];

  const displayedInfo = [
    projectDefinition.releaseDate,
    [projectDefinition.genre, projectDefinition.type]
      .filter((e) => e)
      .join(" "),
    projectDefinition.engine,
    projectDefinition.platforms?.join(", "),
    projectDefinition.status,
  ].filter((i) => i);

  return (
    <>
      <div className="flex flex-col gap-8 p-4 md:flex-row md:flex-nowrap md:items-start">
        <div className="flex w-full shrink-0 flex-col gap-2 md:w-80 md:sticky top-16">
          <img
            className="h-fit w-full max-w-80"
            src={projectDefinition.img}
            alt={projectDefinition.title}
          />
          {links.map((link) => (
            <div key={link.url} className="inline-flex">
              <Link
                className="bg-black px-2 text-white hover:underline"
                href={link.url}
                target="_blank"
              >
                {(link?.text ?? DEFAULT_LINK_TEXT).toUpperCase()} \{">"}
              </Link>
            </div>
          ))}
        </div>

        <div className="mb-4 min-w-0 flex-1 md:sticky top-16">
          <div className="flex flex-col gap-2 text-sm">
            <div>
              <strong>
                <Scramble text={projectDefinition.title?.toUpperCase()} />
              </strong>
              <small className="flex gap-2 opacity-65">
                {displayedInfo.map((entry, i) => (
                  <>
                    <span>{entry?.toString().toUpperCase()}</span>
                    {i !== displayedInfo.length - 1 && <span>//</span>}
                  </>
                ))}
              </small>
            </div>
            <div className="max-w-3xl text-justify prose prose-sm">
              <Markdown remarkPlugins={[remarkGfm]}>
                {projectDefinition.description}
              </Markdown>
            </div>
          </div>
        </div>

        {screenshots.length > 0 && (
          <div className="flex w-full min-w-0 flex-col gap-2 md:min-w-[12rem] md:flex-1 md:max-w-md lg:max-w-lg">
            {screenshots.map((src, index) => (
              <img
                key={src}
                src={src}
                alt={`${projectDefinition.title} screenshot ${index + 1}`}
                className="block h-auto w-full _border border-black"
                loading="lazy"
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
