import Contact_Item from "./Contact_Item";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Contact_Items = () => {
  return (
    <div className="flex my-5 flex-wrap">
      <div className="flex flex-col w-fit">
        <Contact_Item
          ReactIcon={FaPhoneAlt}
          url={"tel:+923101710479"}
          text={"0310-1710479"}
        />
        {/* <Contact_Item
          url={"https://maps.app.goo.gl/Ca5gVFRCDnY62M3s5"}
          text={"Block Q, Johar Town, Lahore"}
        /> */}
        <Contact_Item
          ReactIcon={IoMdMail}
          url={"mailto:bilalfaisal.developer@gmail.com"}
          text={"bilalfaisal.developer@gmail.com"}
        />
      </div>
      <div className="flex flex-col w-fit">
        <Contact_Item
          ReactIcon={FaGithub}
          url={"https://github.com/bilal-faisal"}
          text={"github.com/bilal-faisal"}
        />
        <Contact_Item
          ReactIcon={FaLinkedin}
          url={"https://www.linkedin.com/in/bilal-faisal/"}
          text={"linkedin.com/in/bilal-faisal"}
        />
      </div>
    </div>
  );
};

export default Contact_Items;
