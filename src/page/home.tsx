import ProjectCard from "../components/ProjectCard";

const Home = () => {
  const img =
    "https://scontent.fcnx3-1.fna.fbcdn.net/v/t39.30808-6/420437855_3485194231793237_8794574940016918394_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=jbp8ALtfEVwQ7kNvgF8XTAu&_nc_oc=AdihEOvlmDZcKdUOWMMetbbK68U6uB4wZYVNHS-MHKUl5j_fA05Tp2r6ZXWdu4dmd44&_nc_zt=23&_nc_ht=scontent.fcnx3-1.fna&_nc_gid=Am6QPagmdKR8H-5JQ5ENxxX&oh=00_AYCaEaVzFpIjl7oHvOIBlsmdeZmMhNk6F0mKX8AVEhQuOg&oe=67686A4F";

  const projects = [
    {
      title: "Art & Community",
      description: "This is a description of Project 1.",
      imageUrl: "https://via.placeholder.com/150",
      link: "#project1",
    },
    {
      title: "Project 2",
      description: "This is a description of Project 2.",
      imageUrl: "https://via.placeholder.com/150",
      link: "#project2",
    },
    {
      title: "Project 3",
      description: "This is a description of Project 3.",
      imageUrl: "https://via.placeholder.com/150",
      link: "#project3",
    },
  ];
  return (
    <div className="bg-cyan-950 h-full flex flex-col items-center">
      {/* Header Section */}
      <div className="flex flex-col items-center w-full animate-dropdown">
        <img className="rounded-full w-48 h-48 my-5" src={img} alt="Profile" />
        <span className="text-white text-4xl font-bold">
          Supatkon Pundontong
        </span>
        {/* Social section */}
        <div className="mt-7 flex flex-row gap-5 items-center ">
          <a href="https://github.com/SUPATKN" target="_blank">
            <div className="bg-white rounded-full p-2 transform transition-transform duration-300 hover:scale-125">
              <img
                src="https://www.svgrepo.com/show/512317/github-142.svg"
                alt="git"
                className="w-8 h-8 "
              />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/supatkon/" target="_blank">
            <div className="bg-white rounded-full p-2 transform transition-transform duration-300 hover:scale-125">
              <img
                src="https://www.svgrepo.com/show/448234/linkedin.svg"
                alt="linkedin"
                className="w-8 h-8"
              />
            </div>
          </a>
          <a href="https://www.facebook.com/supatkn/" target="_blank">
            <div className="bg-white rounded-full p-2 transform transition-transform duration-300 hover:scale-125">
              <img
                src="https://www.svgrepo.com/show/452197/facebook.svg"
                alt="facebook"
                className="w-8 h-8"
              />
            </div>
          </a>
        </div>

        {/* About Me Section */}
        <div
          id="about"
          className="max-w-2xl w-full p-6 rounded-md mt-10 text-center"
        >
          <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
          <p className="text-white font-medium ">
            Hi, I'm Supatkon Pundontong, a third-year Computer Engineering
            student at Chiang Mai University. I'm passionate about software
            development, particularly in full-stack web development. I have
            experience with React, Next.js, PostgreSQL, and Docker, and I enjoy
            solving problems by building efficient, scalable applications. I'm
            always looking to learn new technologies and improve my skills.
            Let's connect and collaborate!
          </p>
        </div>
      </div>

      {/* Projects section */}
      <h2 id="projects" className="text-2xl text-white mt-10">
        My Projects
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 px-4">
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
    </div>
  );
};

export default Home;
