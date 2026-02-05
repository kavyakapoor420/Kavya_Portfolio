import { useEffect } from "react";
import { GitHubCalendar } from "react-github-calendar";
import AOS from "aos";
import "aos/dist/aos.css";

const GithubStats = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#0a192f] text-gray-300 flex items-center">
      <div className="max-w-[1000px] mx-auto px-4 w-full">

        <div className="grid grid-cols-2 gap-8 mb-12">
          <div className="sm:text-right pb-8">
            <p className="text-4xl font-bold inline border-b-8 border-[#C23B22]">
              GitHub
            </p>
          </div>
          <div />
        </div>

        <div className="grid sm:grid-cols-2 gap-8 items-center">
          <div
            className="sm:text-right text-3xl font-bold"
            data-aos="fade-right"
          >
            <p>
              Consistency over time. <br />
              <span className="text-[#C23B22]">Code never lies.</span>
            </p>
          </div>

          <div data-aos="fade-up" className="overflow-x-auto">
            <div className="bg-[#020c1b] p-4 rounded-lg border border-gray-700">
              <GitHubCalendar
                username="kavyakapoor420"
                colorScheme="dark"
                blockSize={12}
                blockMargin={5}
                fontSize={14}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default GithubStats;
