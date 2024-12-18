// ProjectCard.tsx
interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  link,
}) => {
  return (
    <div className=" rounded-lg overflow-hidden shadow-lg bg-white">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
        <a
          href={link}
          className="inline-block mt-4 text-cyan-600 hover:text-cyan-800 transition-colors"
        >
          Learn more
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
