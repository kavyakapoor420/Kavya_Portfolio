import React, { useEffect, useState } from 'react';
import {GitHubCalendar} from 'react-github-calendar';
import CalendarHeatmap from 'react-calendar-heatmap';
import 'react-calendar-heatmap/dist/styles.css';
const GithubStats = () => {
  const [leetcodeData, setLeetcodeData] = useState([]);
  const [stats, setStats] = useState({ streak: 0, totalActive: 0 });
  const [loading, setLoading] = useState(true);

  // Fetching LeetCode data on component mount
  useEffect(() => {
    const fetchLeetCodeData = async () => {
      try {
        // This hits the live API directly
        const response = await fetch('https://alfa-leetcode-api.onrender.com/kavyakapoor/calendar?year=2025');
        const data = await response.json();
        
        const submissions = JSON.parse(data.submissionCalendar);
        const formattedData = Object.keys(submissions).map(timestamp => ({
          date: new Date(parseInt(timestamp) * 1000).toISOString().split('T')[0],
          count: submissions[timestamp]
        }));

        setStats({ streak: data.streak, totalActive: data.totalActiveDays });
        setLeetcodeData(formattedData);
      } catch (err) {
        console.error("Failed to fetch live LeetCode stats", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeetCodeData();
  }, []);

  return (
    <div className="w-full bg-[#0d1117] text-[#c9d1d9] p-6 rounded-xl border border-[#30363d] font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left: GitHub (Already live by default) */}
        <div className="flex flex-col items-center">
          <h3 className="mb-4 text-sm font-medium text-gray-400 self-start">GitHub Contributions</h3>
          <div className="w-full bg-[#161b22] border border-[#30363d] p-4 rounded-lg flex justify-center">
            <GitHubCalendar 
              username="PythonHacker24" 
              fontSize={12}
              blockSize={11}
              blockMargin={4}
              colorScheme="dark"
            />
          </div>
        </div>

        {/* Right: LeetCode (Live via API fetch) */}
        <div className="flex flex-col items-center">
          <h3 className="mb-4 text-sm font-medium text-gray-400 self-start flex justify-between w-full">
            <span>LeetCode Submissions</span>
            {!loading && <span className="text-orange-500 text-xs">Streak: {stats.streak} 🔥</span>}
          </h3>
          <div className="w-full bg-[#161b22] border border-[#30363d] p-4 rounded-lg">
            {loading ? (
              <div className="h-[130px] flex items-center justify-center animate-pulse text-gray-600">Syncing with LeetCode...</div>
            ) : (
              <CalendarHeatmap
                startDate={new Date('2025-01-01')}
                endDate={new Date('2025-12-31')}
                values={leetcodeData}
                classForValue={(value) => {
                  if (!value || value.count === 0) return 'color-empty';
                  if (value.count < 3) return 'color-scale-1';
                  if (value.count < 6) return 'color-scale-2';
                  if (value.count < 9) return 'color-scale-3';
                  return 'color-scale-4';
                }}
              />
            )}
          </div>
        </div>

      </div>

      {/* Matching GitHub's Dark Theme Colors */}
      <style>{`
        .react-calendar-heatmap .color-empty { fill: #161b22; outline: 1px solid rgba(27, 31, 35, 0.06); }
        .react-calendar-heatmap .color-scale-1 { fill: #0e4429; }
        .react-calendar-heatmap .color-scale-2 { fill: #006d32; }
        .react-calendar-heatmap .color-scale-3 { fill: #26a641; }
        .react-calendar-heatmap .color-scale-4 { fill: #39d353; }
        .react-calendar-heatmap text { font-size: 10px; fill: #8b949e; }
      `}</style>
    </div>
  );
};

export default GithubStats;
