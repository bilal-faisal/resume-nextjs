import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Project {
  name: String;
  desc: String;
  points: String[];
  deployed?: {
    project_title: String;
    project_url: String;
  };
}

const Project_Item = ({ name, desc, points, deployed }: Project) => {
  return (
    <div className="ml-2 mb-3">
      <h2 className="text-lg font-semibold">{name}</h2>
      <p className="text-md text-gray-800">{desc}</p>
      <ul className="list-disc ml-10">
        {points.map((point) => {
          return (
            <li className="text-[#F47A7A]" key={`${point}`}>
              <span className="text-gray-800">{point}</span>{" "}
            </li>
          );
        })}
      </ul>
      {deployed && (
        <div className="my-2 flex items-center">
          <p>Accessible at:</p>
          <Link
            href={`${deployed.project_url}`}
            target="_blank"
            rel="noreferrer"
            className=" mx-2 text-gray-800 flex items-center gap-2 underline"
          >
            {deployed.project_title}
            <FaExternalLinkAlt color="gray" className="cursor-pointer" />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Project_Item;
