import Project_Item from "./Project_Item";
import Project_Item_Extra from "./Project_Item_Extra";

const Project_Items = () => {
  return (
    <div className="flex flex-col py-4 flex-wrap">
      <Project_Item
        name={"E-Commerce Store – Next.js"}
        desc={
          "Developed a cutting-edge ecommerce store using Nextjs 13 highlighting optimal performance, usability, and design."
        }
        points={[
          "Utilized Tailwind CSS and shadcn-UI for robust design.",
          "Integrated Sanity CMS to manage real-time product.",
          "Integrated Cart functionality using React-Redux.",
          "Enhanced backend efficiency with Drizzle ORM.",
          "Integrated Stripe for a secure and user-friendly payment process.",
        ]}
        deployed={{
          project_title: "estore-next.vercel.app",
          project_url: "https://estore-next.vercel.app/",
        }}
      />
      <Project_Item
        name={"Books API – Next.js"}
        desc={"Developed a comprehensive book reservation API using Nextjs."}
        points={[
          "Integrated PostgreSQL for robust data storage and efficient retrieval.",
          "Implemented RESTful API endpoints for book listings, details, and order management, showcasing skills in API development.",
          "Engineered secure access to API endpoints with Bearer Token authentication.",
        ]}
        deployed={{
          project_title: "books-apis.vercel.app",
          project_url: "https://books-apis.vercel.app/",
        }}
      />
      <Project_Item
        name={"Blogging Site – Next.js 13"}
        desc={"Web app where user can read blogs of different categories."}
        points={[
          "Stored blogs as JSON object files.",
          "Created API Endpoints to get required files.",
          "Applied NextJS Server Side Rendering Strategy.",
        ]}
      />
      <Project_Item
        name={"News App – React.js"}
        desc={"Web application that helps user read latest news."}
        points={[
          "Used API to get latest news.",
          "Implemented category feature so the user can freely choose between the news categories.",
        ]}
      />
      <Project_Item
        name={"Text Utility – React.js"}
        desc={"Web app that helps user perform basic oprations on text."}
        points={[
          "Implemented variety of text functionalities.",
          "Implemented Light and Dark mode using state concepts.",
        ]}
      />
      <Project_Item
        name={"Todo List Application – Java, Servlets, JSP, MySQL"}
        desc={
          "Web-based Todo-list app where users can Read, Add, Delete and Modify their tasks."
        }
        points={[
          " Implemented SignUp/SignIn Functionality",
          " Session Management and Error Handling.",
          " Client Side Validations through JavaScript.",
        ]}
      />
      <Project_Item_Extra
        name={"JavaScript Projects"}
        points={[
          "Todo App",
          "News App",
          "Dice Game",
          "CV Screener",
          "Postman Clone",
          "RGB Color Game",
          "Currency Exchanger",
          "Cinema Ticketing App",
        ]}
      />
    </div>
  );
};

export default Project_Items;
