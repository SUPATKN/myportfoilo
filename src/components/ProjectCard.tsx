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
    <div className=" rounded-lg overflow-hidden shadow-2xl  bg-emerald-50 transform transition-transform duration-300 hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover " />
      <div className="p-4 h-full">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
        <a
          href={link}
          target="_blank"
          className="inline-block mt-4 text-cyan-600 hover:text-cyan-800 transition-colors font-medium "
        >
          {title === "Nucleus" && (
            <span className="text-red-600 font-medium">
              The project is in progress
            </span>
          )}
          {link && <span>view git repository</span>}
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
