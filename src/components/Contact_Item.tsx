import Image from "next/image";
import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";

interface Image {
  ReactIcon: typeof FaExternalLinkAlt;
  url: string;
  text: string;
}

const Contact_Item = ({ ReactIcon, url, text }: Image) => {
  return (
    <Link href={`${url}`} target={"_blank"}>
      <div className="flex my-1 items-center ">
        <ReactIcon color="#f47a7a" size="20px"/>
        <p className="px-3">{text}</p>
      </div>
    </Link>
  );
};

export default Contact_Item;
