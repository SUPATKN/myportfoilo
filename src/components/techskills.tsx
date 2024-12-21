import { useEffect, useState } from "react";

export const Techskil = () => {
  const [isInView, setIsInView] = useState(false);

  const handleIntersection: IntersectionObserverCallback = (
    entries: IntersectionObserverEntry[]
  ) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      setIsInView(true); // Trigger animation when element is in view
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // 50% of the element must be visible
    });
    const techSection = document.getElementById("tech");
    if (techSection) {
      observer.observe(techSection);
    }
    return () => {
      if (techSection) observer.unobserve(techSection);
    };
  }, []);

  const techSkills = [
    { src: "https://www.svgrepo.com/show/353884/html-5.svg", alt: "html" },
    { src: "https://www.svgrepo.com/show/303481/css-3-logo.svg", alt: "css" },
    {
      src: "https://www.svgrepo.com/show/349419/javascript.svg",
      alt: "javascript",
    },
    {
      src: "https://www.svgrepo.com/show/349540/typescript.svg",
      alt: "typescript",
    },
    {
      src: "https://www.svgrepo.com/show/354119/nodejs-icon.svg",
      alt: "nodejs",
    },
    { src: "https://www.svgrepo.com/show/353724/express.svg", alt: "express" },
    {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/a8/NestJS.svg",
      alt: "nestjs",
    },
    { src: "https://www.svgrepo.com/show/303251/mysql-logo.svg", alt: "mysql" },
    {
      src: "https://www.svgrepo.com/show/303301/postgresql-logo.svg",
      alt: "postgres",
    },
    { src: "https://www.svgrepo.com/show/331488/mongodb.svg", alt: "mongo" },
    {
      src: "https://www.svgrepo.com/show/303231/docker-logo.svg",
      alt: "docker",
    },
    { src: "https://www.svgrepo.com/show/354259/react.svg", alt: "react" },
    {
      src: "https://www.svgrepo.com/show/374118/tailwind.svg",
      alt: "tailwind",
    },
    { src: "https://www.svgrepo.com/show/452234/java.svg", alt: "java" },
    { src: "https://www.svgrepo.com/show/354180/php.svg", alt: "php" },
  ];

  return (
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
        {techSkills.map((skill, index) => (
          <img
            key={index}
            className="size-12 transform transition-transform duration-300 hover:scale-125"
            src={skill.src}
            alt={skill.alt}
          />
        ))}
      </div>
    </div>
  );
};
