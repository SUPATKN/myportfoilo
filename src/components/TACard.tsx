// ProjectCard.tsx
interface TAProps {
  title: string;
  description: string;
  imageUrl: string;
}

const TACard: React.FC<TAProps> = ({ title, description, imageUrl }) => {
  return (
    <div className=" rounded-lg overflow-hidden shadow-lg bg-emerald-50 transform transition-transform duration-300 hover:scale-105">
      <img src={imageUrl} alt={title} className="w-full h-64 object-cover " />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-700 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default TACard;
