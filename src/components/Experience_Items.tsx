import Experience_Item from "./Experience_Item";

const Experience_Items = () => {
  return (
    <div className="flex flex-col py-4 flex-wrap">
      <Experience_Item
        title={"Frontend Web Developer Intern"}
        company={"Panacloud"}
        start_date={"Oct 2023"}
        end_date={"Jan 2024"}
        desc_points={[
          {
            emoji: "🔍",
            desc: "Collaborated with a dynamic team to conceptualize, develop and refine a high-quality template.",
          },
          {
            emoji: "🛠",
            desc: "Using cutting-edge technologies, ensuring our template met standards of modern web development.",
          },
          {
            emoji: "⏳",
            desc: "Actively participated in a flexible work environment, adapting to diverse projects and challenges.",
          },
        ]}
      />
    </div>
  );
};

export default Experience_Items;
