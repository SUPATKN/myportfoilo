export const Aboutme = () => {
  const img = "/public/profilePic1.jpg";
  return (
    <div className="flex flex-col items-center w-full ">
      <img
        className="rounded-full w-48 h-48 my-5 object-cover object-center sm:w-32 sm:h-32 md:w-48 md:h-48"
        src={img}
        alt="Profile"
      />
      <span className="text-emerald-950 text-4xl font-bold text-center sm:text-xl md:text-4xl">
        Supatkon Pundontong
      </span>

      {/* About Me Section */}
      <div
        id="about"
        className="max-w-2xl w-full p-6 rounded-md mt-5 text-center sm:p-4"
      >
        <h2 className="text-2xl font-bold text-emerald-950 mb-4 sm:text-xl">
          About Me
        </h2>
        <p className="text-emerald-950 font-medium sm:text-base">
          Hi, I'm Supatkon Pundontong, a third-year Computer Engineering student
          at Chiang Mai University. I'm passionate about software development,
          particularly in full-stack web development. I enjoy solving problems
          by building efficient, scalable applications. I'm always looking to
          learn new technologies and improve my skills. Let's connect and
          collaborate!
        </p>
      </div>
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWVhbmRva3YzNjlndGdvZmN1czkzNTQyeTNnYTZjb3ltZ2VocmVocSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1CsHxj6Q2iEeH4HhT7/giphy.webp"
        className="size-32"
      />
    </div>
  );
};
