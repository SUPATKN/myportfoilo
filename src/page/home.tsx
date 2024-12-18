import ProjectCard from "../components/ProjectCard";

const Home = () => {
  const img = "/public/profilePic.jpg";
  const projects = [
    {
      title: "Art & Community",
      description:
        "A platform that connects people in the art world, allowing users to share artwork, create photo art collections, and engage with a community of artists. It provides a user-friendly experience for both creators and viewers.",
      imageUrl: "/public/artandcommu.png",
      link: "https://github.com/SUPATKN/FullStack_Project_G5",
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
        <img
          className="rounded-full w-48 h-48 my-5 object-cover object-center "
          src={img}
          alt="Profile"
        />
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
          className="max-w-2xl w-full p-6 rounded-md mt-10 text-center scroll-mt-24"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8 px-4 mx-8">
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
