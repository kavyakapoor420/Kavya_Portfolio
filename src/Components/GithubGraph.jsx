import React from "react";
import GitHubCalendar from "react-github-calendar";

const GithubGraph = ({ theme = "light" }) => {
  return (
    <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
      <div className="flex min-w-max justify-center text-xs px-4">
        <GitHubCalendar
          username="kavyakapoor420"
          colorScheme={theme === "dark" ? "dark" : "light"}
          blockSize={10}
          blockMargin={4}
          fontSize={12}
        />
      </div>
    </div>
  );
};

export default GithubGraph;
