"use client";
import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Instagram Clone",
    description:
      "Replica of social media app Instagram, featuring user authentication, post-creation, real-time user interactions, and profile customization",
    skills: "React.js • Firebase • ChakraUI",
    image: "/images/instagram",
    gitUrl: "https://github.com/avallip443/instagram-clone",
    previewUrl: "https://instagram-clone-three-topaz.vercel.app/",
  },
  {
    id: 2,
    title: "Expense Tracker",
    description:
      "Daily expenses tracker that using MERN stack, a RESTful API, and Tailwind CSS ",
    skills: "MongoDB • Express.js • React.js • Node.js • Tailwind CSS",
    image: "/images/expense-tracker.png",
    gitUrl: "https://github.com/avallip443/expense-tracker",
    previewUrl: "https://expense-tracker-app-sage.vercel.app/",
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    description:
      "The website you are on right now !!",
    skills: "React.js • Next.js • Tailwind CSS",
    image: "/images/personal-portfolio.png",
    gitUrl: "https://github.com/avallip443/ChatGPT-survey-analysis",
    previewUrl: "https://arathi-vallipuranathan.vercel.app/",
  },
  {
    id: 4,
    title: "ChatGPT Survey Analysis",
    description:
      "Analyzes survey responses to generate insightful graphs on ChatGPT's academic perception and future role in education",
    skills: "Python • Matplotlib • NumPy • pandas",
    image: "/images/chatgpt-survey.png",
    gitUrl: "https://github.com/avallip443/ChatGPT-survey-analysis",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Bend Your Footprint",
    description:
      "Carbon emission calculator suggesting eco-conconsious lifestyle decisions. Created for ElleHacks 2023",
    skills:
      "HTML/CSS • JavaScript • Python • Responses API • Hubspot ",
    image: "/images/bend-your-footprint.jpg",
    gitUrl: "https://github.com/avallip443/ElleHack23-Project",
    previewUrl: "https://devpost.com/software/bend-your-footprint",
  },
  {
    id: 6,
    title: "Web Development Labs",
    description: "Collection of 10 web development labs associated with CPS530 at TMU",
    skills:
      "HTML/CSS • Bootstrap • JavaScript • jQuery • SVG • Perl • PHP • MySQL • Classic ASP • Python • Ruby • React.js ",
    image: "/images/lab9b.png",
    gitUrl: "https://github.com/avallip443/cps530-labs",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Audio Streaming App",
    description: "Emmulates the functionalities of an audio-streaming app",
    skills: "Java",
    image: "/images/audio-streaming-app.png",
    gitUrl:
      "https://github.com/avallip443/audio-streaming-application/tree/main",
    previewUrl: "/",
  },
];

const ProjectSection = () => {
  return (
    <section className="mb-[4rem]" id="projects">
      <div className="items-center py-6 px-4 xl:gap-16 xl:px-16">
        <h2 className="text-center text-4xl font-bold text-[#C5B6F1] mb-8">
          {"> my projects"}
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-8">
          {projectData.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              skills={project.skills}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;