import React from "react";

interface Experience {
  title: string;
  company: string;
  type: string;
  start_date: string;
  end_date: string;
  desc_points: { emoji: string; desc: string }[];
}

const Experience_Item = ({
  title,
  company,
  type,
  start_date,
  end_date,
  desc_points,
}: Experience) => {
  return (
    <div className="ml-2 mb-3">
      <h2 className="text-lg font-semibold">
        {title} – {company}
        <span className="text-sm font-medium"> - ({type})</span>
      </h2>
      <p className="text-md text-gray-800">
        {start_date} – {end_date}
      </p>
      <ul className="max-w-[90%] py-2">
        {desc_points.map((point,i) => {
          return (
            <li className="list-none flex" key={i}>
              <p className="min-w-[3rem] text-center">{point.emoji}</p>
              <p className="text-gray-800">{point.desc}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Experience_Item;
