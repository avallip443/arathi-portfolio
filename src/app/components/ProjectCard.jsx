import React from "react";
import { CodeIcon, EyeIcon } from "@heroicons/react/outline";
import { ServerIcon } from "@heroicons/react/solid";

import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  skills,
  gitUrl,
  previewUrl,
}) => {
  return (
    <div className="project-card group">
      {/*
      <div
        className="h-52 md:h-72 rounded-t-xl relative group"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link
            href={gitUrl}
            target="_blank"
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          {previewUrl !== "/" && (
            <Link
              href={previewUrl}
              className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            >
              <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
            </Link>
          )}
        </div>
      </div>
          */}
      <div className="text-white font-semibold rounded-xl h-96 bg-[#1d243d] py-6 px-8 transition-all group-hover:bg-[#353d60]">
        {/** 254246 */}
        <div className="top-icons w-full flex justify-between items-center mb-5">
          <ServerIcon className="h-7 ml-[-1px] text-[#ADB7BE]" />
          <div className="links flex justify-between">
            <Link
              href={gitUrl}
              target="_blank"
              className="h-6 mr-5 hover:border-white group/link"
            >
              <CodeIcon className="h-6 w-6 text-[#ADB7BE] absolute cursor-pointer group-hover/link:text-white" />
            </Link>
            {previewUrl !== "/" && (
              <Link
                href={previewUrl}
                className="h-6 mx-5 relative hover:border-white group/link"
              >
                <EyeIcon className="h-6 w-6 text-[#ADB7BE] absolute cursor-pointer group-hover/link:text-white" />
              </Link>
            )}
          </div>
        </div>
        <h5 className="text-2xl font-bold">{title}</h5>
        <p className="text-md mt-1 text-[#afafaf]">
          <br />
          {description}
        </p>
        <p className="text-md mt-4 text-[#afafaf] italic">
          <br />
          {skills}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
