import ProjectCard from "../components/ProjectCard";
import TACard from "../components/TACard";
import { Aboutme } from "../components/aboutme";
import { Techskil } from "../components/techskills";
import { Footer } from "../components/footer";

const Home = () => {
  const projects = [
    {
      title: "Art & Community",
      description:
        "This project is focused on building a platform for sharing and showcasing artwork. Users can upload their creations, browse galleries, and participate in a token-based marketplace to buy and sell art. The project emphasizes full-stack development, combining backend and frontend technologies to foster a collaborative art community",
      imageUrl: "/src/asset/artandcommu.png",
      link: "https://github.com/SUPATKN/Art-and-Community",
    },
    {
      title: "E-commerce Laravel project",
      description:
        "This project is focused on creating a platform for buying and selling images. Users can upload images, view galleries, and purchase images through an integrated marketplace. This project allowed the application of key database concepts and the MVC architecture while using Laravel as the framework for backend development",
      imageUrl: "/src/asset/messageImage_1734583260836.jpg",
      link: "https://github.com/touchtt0205/E-commerce-Laravel",
    },
    {
      title: "UPBEAT",
      description:
        "This project developing a turn-based hexagonal strategy game as part of an OOP course. The game implemented the MVC architecture, featured grammar parsing for command input, and adhered to detailed design specifications. This project demonstrated the application of advanced OOP principles and design patterns in game development",
      imageUrl: "/src/asset/messageImage_1734584458965.jpg",
      link: "https://github.com/SUPATKN/UPBEATProject_29",
    },
    {
      title: "Computer Architecture Project",
      description:
        "The Assembler and Simulator project was designed to help understand computer architecture by converting assembly language instructions into machine code and simulating their execution. The project involved writing custom assembly code to solve problems such as calculating combinations and running simulations using the generated machine code",
      imageUrl: "/src/asset/Screenshot 2024-12-21 152651.png",
      link: "https://github.com/PP2546/Proj_1_Com_Arch",
    },
    {
      title: " Logic and Digital Circuits Project",
      description:
        "This project focuses on implementing a two-player Rock-Paper-Scissors game using logic and digital circuits. The goal is to design and simulate a functional game system where the winning results are calculated based on logical operations basic logic gates",
      imageUrl: "/src/asset/27b7e0aa-d857-4420-b340-eb9d7234479a.jpg",
      link: "",
    },

    {
      title: "Nucleus",
      description:
        "Developed a community-focused platform to promote local initiatives and facilitate workshops. Implemented features such as workshop booking, an interactive community map with location markers, and user-friendly navigation",
      imageUrl: "/src/asset/455016141_1785362471874344_1637157699492110556_n.jpg",
      link: "",
    },
  ];

  return (
    <div className="bg-emerald-100 h-full w-full flex flex-col items-center">
      {/* Header Section */}
      <Aboutme />
      {/* Tech stack */}
      <Techskil />

      {/* Projects section */}
      <h2
        id="projects"
        className="text-2xl text-emerald-950 font-bold mt-14 scroll-mt-9 "
      >
        My Projects
      </h2>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 px-4 mx-8 ">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>

      {/* Teaching Assistant Experience  */}
      <div id="TA" className="flex flex-col my-10 justify-center items-center">
        <h2 className="text-2xl font-bold text-emerald-950 mb-4 sm:text-xl">
          Teaching Assistant Experience
        </h2>
        <div className="flex flex-col max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl mt-5">
          <TACard
            title={"261200 Object Oriented Programming"}
            description="Improved communication and mentoring skills by guiding students and answering questions 
during lectures and lab sessions, while grading assignments and offering constructive feedback 
to help them identify areas for improvement"
            imageUrl="/src/asset/9b9a822d-aa79-4e3c-9021-6930dee51383.jpg"
          />
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default Home;
