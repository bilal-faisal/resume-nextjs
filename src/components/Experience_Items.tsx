import Experience_Item from "./Experience_Item";

const Experience_Items = () => {
  return (
    <div className="flex flex-col py-4 flex-wrap">
      <Experience_Item
        title={"Junior Web Developer"}
        company={"Panacloud"}
        type={"Part-time"}
        start_date={"July 2023"}
        end_date={"Present"}
        desc_points={[
          {
            emoji: "🔍",
            desc: "As a Junior Web Developer at Panacloud, I collaborate with a dynamic team to create and refine high-quality templates for various platforms.",
          },
          {
            emoji: "💡",
            desc: "Currently, we're deeply involved in the design and development of a premium Shopify storefront template.",
          },
          {
            emoji: "🛠",
            desc: "Using cutting-edge technologies, we ensure all our templates meet the highest standards of modern web development.",
          },
          {
            emoji: "🔄",
            desc: " With every template completion, we eagerly transition to the next, showcasing our continuous drive to evolve, innovate, and maintain excellence.",
          },
          {
            emoji: "⏳",
            desc: "Engage in a flexible work environment, adapting to diverse projects and challenges.",
          },
        ]}
      />
    </div>
  );
};

export default Experience_Items;
