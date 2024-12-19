import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

const Home = () => {
  const img = "/public/profilePic.jpg";
  const projects = [
    {
      title: "Art & Community",
      description:
        "A platform that connects people in the art world, allowing users to share artwork, create photo art collections, and engage with a community of artists. It provides a user-friendly experience for both creators and viewers.",
      imageUrl: "/public/artandcommu.png",
      link: "https://github.com/SUPATKN/Art-and-Community",
    },
    {
      title: "E-commerce Laravel project",
      description:
        "Built a marketplace platform for uploading, browsing, and purchasing images, emphasizing database design and MVC principles in backend development",
      imageUrl: "/public/messageImage_1734583260836.jpg",
      link: "https://github.com/touchtt0205/E-commerce-Laravel",
    },
    {
      title: "UPBEAT",
      description:
        "Created a turn-based hexagonal game as part of an OOP course, applying MVC architecture, grammar parsing, and detailed design specifications",
      imageUrl: "/public/messageImage_1734584458965.jpg",
      link: "#project3",
    },
    {
      title: "Project 3",
      description: "This is a description of Project 3.",
      imageUrl: "https://via.placeholder.com/150",
      link: "#project3",
    },
  ];
  const [isInView, setIsInView] = useState(false);

  const handleIntersection = (entries: [any]) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsInView(true); // แสดงแอนิเมชันเมื่อเข้ามาในมุมมอง
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // 50% ขององค์ประกอบต้องปรากฏในมุมมอง
    });
    const techSection = document.getElementById("tech");
    if (techSection) {
      observer.observe(techSection);
    }
    return () => {
      if (techSection) observer.unobserve(techSection);
    };
  }, []);

  return (
    <div className="bg-emerald-50 h-full w-full flex flex-col items-center">
      {/* Header Section */}
      <div className="flex flex-col items-center w-full animate-dropdown">
        <img
          className="rounded-full w-48 h-48 my-5 object-cover object-center sm:w-32 sm:h-32 md:w-48 md:h-48"
          src={img}
          alt="Profile"
        />
        <span className="text-emerald-950 text-4xl font-bold text-center sm:text-xl md:text-4xl">
          Supatkon Pundontong
        </span>

        {/* About Me Section */}
        <div className="max-w-2xl w-full p-6 rounded-md mt-5 text-center sm:p-4">
          <h2 className="text-2xl font-bold text-emerald-950 mb-4 sm:text-xl">
            About Me
          </h2>
          <p className="text-emerald-950 font-medium sm:text-sm">
            Hi, I'm Supatkon Pundontong, a third-year Computer Engineering
            student at Chiang Mai University. I'm passionate about software
            development, particularly in full-stack web development. I have
            experience with React, Next.js, PostgreSQL, and Docker, and I enjoy
            solving problems by building efficient, scalable applications. I'm
            always looking to learn new technologies and improve my skills.
            Let's connect and collaborate!
          </p>
        </div>
        <img
          src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWVhbmRva3YzNjlndGdvZmN1czkzNTQyeTNnYTZjb3ltZ2VocmVocSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1CsHxj6Q2iEeH4HhT7/giphy.webp"
          className="size-32 mt-4"
        />
      </div>
      {/* Tech stack */}
      <div
        id="tech"
        className="mt-16 flex flex-col justify-center items-center scroll-mt-5"
      >
        <h1 className="text-2xl text-emerald-950 font-bold">Tech skills</h1>
        <div
          className={`flex flex-wrap mt-8 gap-4 justify-center items-center ${
            isInView ? "slide-in" : ""
          }`}
        >
          <img
            className="size-12 transform transition-transform duration-300 hover:scale-125"
            src="https://www.svgrepo.com/show/353884/html-5.svg"
            alt="html"
          ></img>
          <img
            className="size-12 transform transition-transform duration-300 hover:scale-125"
            src="https://www.svgrepo.com/show/303481/css-3-logo.svg"
            alt="css"
          ></img>
          <img
            className="size-11 transform transition-transform duration-300 hover:scale-125"
            src="https://www.svgrepo.com/show/349419/javascript.svg"
            alt="javascript"
          ></img>
          <img
            className="size-11 transform transition-transform duration-300 hover:scale-125"
            src="https://www.svgrepo.com/show/349540/typescript.svg"
            alt="typescript"
          ></img>
          <img
            className="size-12 transform transition-transform duration-300 hover:scale-125"
            src="https://www.svgrepo.com/show/354119/nodejs-icon.svg"
            alt="nodejs"
          ></img>
          <img
            className="size-12 transform transition-transform duration-300 hover:scale-125"
            src="https://www.svgrepo.com/show/353724/express.svg"
            alt="express"
          ></img>
          <img
            className="size-12 transform transition-transform duration-300 hover:scale-125"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg"
            alt="nestjs"
          ></img>
          <img
            className="size-12 transform transition-transform duration-300 hover:scale-125"
            src="https://www.svgrepo.com/show/303251/mysql-logo.svg"
            alt="mysql"
          ></img>
          <img
            className="size-12 transform transition-transform duration-300 hover:scale-125"
            src="https://www.svgrepo.com/show/303301/postgresql-logo.svg"
            alt="postgres"
          ></img>
          <img
            className="size-12 transform transition-transform duration-300 hover:scale-125"
            src="https://www.svgrepo.com/show/331488/mongodb.svg"
            alt="mongo"
          ></img>
          <img
            className="size-12 transform transition-transform duration-300 hover:scale-125"
            src="https://www.svgrepo.com/show/303231/docker-logo.svg"
            alt="docker"
          ></img>
          <img
            className="size-12 transform transition-transform duration-300 hover:scale-125"
            src="https://www.svgrepo.com/show/354259/react.svg"
            alt="react"
          ></img>
          <img
            className="size-12 transform transition-transform duration-300 hover:scale-125"
            src="https://www.svgrepo.com/show/374118/tailwind.svg"
            alt="tailwind"
          ></img>
          <img
            className="size-12 transform transition-transform duration-300 hover:scale-125"
            src="https://www.svgrepo.com/show/452234/java.svg"
            alt="java"
          ></img>
          <img
            className="size-12 transform transition-transform duration-300 hover:scale-125"
            src="https://www.svgrepo.com/show/354180/php.svg"
            alt="php"
          ></img>
        </div>
      </div>

      {/* Projects section */}
      <h2
        id="projects"
        className="text-2xl text-emerald-950 font-bold mt-10 scroll-mt-2"
      >
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

      {/* footer */}
      <footer className="flex flex-col justify-center items-center bg-emerald-800 border-t-4 border-transparent shadow-xl w-full  gap-1 ">
        <div className="flex flex-row gap-3 mt-3 justify-center items-center">
          <h1 id="contact" className="text-xl font-semibold text-white ">
            Contacts :
          </h1>
          <a
            href="mailto:supatkon1400@gmail.com"
            className="text-white text-lg font-normal "
          >
            supatkon1400@gmail.com
          </a>
        </div>
        {/* Social section */}
        <div className=" flex flex-row gap-5 items-center my-2">
          <a href="https://github.com/SUPATKN" target="_blank">
            <div className="bg-white rounded-full p-2 transform transition-transform duration-300 hover:scale-125 ">
              <img
                src="https://www.svgrepo.com/show/512317/github-142.svg"
                alt="git"
                className="w-8 h-8"
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
          {/* Email Section */}
        </div>
      </footer>
    </div>
  );
};

export default Home;
