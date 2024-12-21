export const Footer = () => {
  return (
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
      <h4 className="text-xl font-semibold text-white ">
        Phone : +66843696813
      </h4>
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
  );
};
