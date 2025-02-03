import { projects } from "../Data/projects";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const MyProjects2 = () => {
  return (
    <section id="projects" className="py-20 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Practice Projects</span>
        </h3>
        <br />
        <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
          <div className="lg:w-12/1 w-full h-full"></div>
        </div>
      </div>

      
      <Swiper
        pagination={{
          clickable: true,
          renderBullet: (index, className) => `
            <span class="${className} w-8 h-8 flex items-center justify-center bg-gray-700 text-white font-bold rounded-full mx-1 cursor-pointer">
              ${index + 1}
            </span>
          `,
        }}
        modules={[Pagination, Autoplay]}
        slidesPerView={1.2}
        spaceBetween={20}
        breakpoints={{
          768: { slidesPerView: 2 },
        }}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="mySwiper text-red-500"
      >
        {projects.map((project_info, indx) => (
          <SwiperSlide key={indx} className="text-white">
            <div className="h-fit w-full p-4 bg-slate-300 rounded-xl shadow-lg">
              <img
                src={project_info.img}
                alt="project_image"
                className="rounded-lg w-full"
              />
              <h3 className="p-2 text-center text-red-500 text-2xl">
                {project_info.name}
              </h3>
              <div className="flex gap-3 justify-center mt-3">
                <a
                  href={project_info.github_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl text-cyan-600 bg-gray-700 px-4 py-2 inline-block"
                >
                  View Code on GitHub
                </a>
                <a
                  href={project_info.live_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-600 rounded-md bg-gray-800 px-4 py-2 inline-block"
                >
                  See Live
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default MyProjects2;
