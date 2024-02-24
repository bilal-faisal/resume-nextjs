import Certification_Item from "./Certification_Item";

const Certification_Items = () => {
  return (
    <div className="flex flex-col py-4 flex-wrap">
      <Certification_Item
        name={"Certified Cloud Applied Generative AI Engineer"}
        subname={"(In Progress)"}
        desc={
          "Currently pursuing a 1.5-year certification program from PIAIC, Lahore"
        }
        content={
          "TypeScript, React.js, Next.js, Tailwind CSS, Figma, Headless CMS, PostgreSQL, Drizzle ORM, REST APIs, GraphQL, OpenAI, Langchain, Pinecone"
        }
      />
      <Certification_Item
        name={"Advance Web Application Development"}
        desc={"Completed a 6-month training program from KICS UET, Lahore"}
        content={"HTML, CSS, Bootstrap, Javascript, Jquery, PHP, MySQL"}
      />
      <Certification_Item
        name={"Web Design and Development"}
        desc={"Completed a 2-month course from PNY Trainings, Lahore"}
        content={"HTML, CSS, Bootstrap, Wordpress"}
      />
    </div>
  );
};

export default Certification_Items;
