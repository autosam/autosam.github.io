type ProjectCardProps = {
  title: string;
  img: string;
  href?: string;
};
export const ProjectCard = (props: ProjectCardProps) => {
  const { title, img, href } = props;
  return (
    <div className="p-2 gap-2 border border-black flex flex-col w-fit h-fit">
      <div className="text-sm">{title}</div>
      <div>
        <img className="max-w-sm" src={img} />
      </div>
    </div>
  );
};
