"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-none text-md text-[#dedede]">
        <li>
          <span className="text-white font-bold">Languages: </span>Python, Java, C, JavaScript, HTML, CSS, PHP, R, SQL (MySQL), Bash
        </li>
        <br />
        <li>
          <span className="text-white font-bold">
            Frameworks & libraries:{" "}
          </span>
          React, Next.js, Node.js, Express.js, Tailwind CSS, NumPy, Pandas
        </li>
        <br />
        <li>
          <span className="text-white font-bold">Other Tools: </span>
          Git, Github, Linux, PowerBI, Tableau, MS Office, Firebase, MongoDB
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-none text-md text-[#dedede]">
        <li>
          <h3 className="text-white font-bold">
            Toronto Metropolitan University
          </h3>
          <p className="text-[#dedede]">
            Bachelor of Science (Hons) - Computer Science <br />
          </p>
          <p className="ml-6">
            <em>Sept. 2022 - Apr. 2027</em> <br />
            <em>GPA: </em>4.15/4.33 <br />
            <em>Dean&apos;s List:</em> 2022-2023 <br />
          </p>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="mb-[4rem]" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-6 px-4 xl:gap-16 xl:px-16">
        <Image
          src="/profile-picture.png"
          alt="profile picture"
          width={420}
          height={420}
          className="rounded-3xl border-[20px] border-double border-[#1d243d]"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-[#C5B6F1] mb-4">
            {"> about me"}
          </h2>
          <p className="text-[#dedede] text-lg">
          👋 Hello! I&apos;m Arathi, a second-year Computer Science Co-op student at{" "}
            <span className="text-[#C5B6F1] font-extrabold">
              Toronto Metropolitan University
            </span>. I am seeking internship opportunities for 2024 :)
            <br />
            <br />

            I&apos;m always eager to expand my skill set and gain new experiences by finding new challenges. I&apos;m interested in full stack and web development, combined my passion for graphic design.
            <br />
            <br />
            Outside of coding, I love to read, crochet, and spend time with friends and family.

          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
