import React from 'react';

const Education = () => {
  const educationDetails = [
    {
      logo: "logo-arrow",
      degree: 'Bachelor of Technology in Computer Science and Engineering(CSE)',
      institution: 'Maharaja Agrasen Istitute of Technology',
      year: ' [2023-207]',
      desc: "I am 2nd year student currently pursuing a Bachelor's degree in CSE at MAIT ",
    },
    {
      logo: "logo-play",
      degree: 'BBPS-MV(XII)-CBSE',
      institution: 'Bal Bhavan Public School',
      year: ' [2023]',
      desc: "I completed my class 12 high school education at Bal Bhavan  Public School, Delhi, where I studied Science with PCM.",       
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <h3 className="text-4xl text-center font-semibold mb-1">
          My <span className="text-cyan-600">Education</span>
        </h3>
      <p className="text-lg text-center font-normal ">My educational details are as follows.</p>
      <hr className="border-gray-300 w-full mb-8" />
      <div>
        {educationDetails.map((edu, index) => (
          <div key={index} className="bg-gray-200 rounded-lg shadow-md p-6 flex flex-col items-start mb-4">
            <div className="text-lg font-medium mb-2 text-gray-700">{edu.degree}</div>
            <div className="flex-1">
              <div className="text-base text-gray-500">{edu.institution}</div>
              <div className="text-base text-gray-500">{edu.year}</div>
            </div>
            <p className="text-gray-700">{edu.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;