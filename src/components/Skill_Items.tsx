import Skill_Item from "@/components/Skill_Item";

const Skill_Items = () => {
  return (
    <div className="flex py-5 flex-wrap">
      <Skill_Item name={"HTML"} />
      <Skill_Item name={"CSS"} />
      <Skill_Item name={"Bootstrap"} />
      <Skill_Item name={"JavaScript"} />
      <Skill_Item name={"Jquery"} />
      <Skill_Item name={"TypeScript"} />
      <Skill_Item name={"React.js"} />
      <Skill_Item name={"Next.js"} />
      <Skill_Item name={"Tailwind CSS"} />
      <Skill_Item name={"REST APIs"} />
      <Skill_Item name={"Headless CMS"} />
      <Skill_Item name={"PostgreSQL"} />
      <Skill_Item name={"Git & GitHub"} />
    </div>
  );
};

export default Skill_Items;
