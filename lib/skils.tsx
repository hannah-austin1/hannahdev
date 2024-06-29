import { GrGraphQl } from "react-icons/gr";
import { DiJavascript1 } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import {
  SiTypescript,
  SiReact,
  SiAmazonaws,
  SiNodedotjs,
  SiNextdotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiPostgresql,
  SiJest,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const skills = [
  {
    name: "GraphQL",
    children: <GrGraphQl className="h-2/3 w-2/3" />,
  },
  {
    name: "JavaScript",
    children: <DiJavascript1 className="h-2/3 w-2/3" />,
  },
  {
    name: "TypeScript",
    children: <SiTypescript className="h-2/3 w-2/3" />,
  },
  {
    name: "React",
    children: <SiReact className="h-2/3 w-2/3" />,
  },
  {
    name: "React Native",
    children: <TbBrandReactNative className="h-2/3 w-2/3" />, // React Native specific icon is not available, using React Router icon as placeholder
  },
  {
    name: "AWS",
    children: <SiAmazonaws className="h-2/3 w-2/3" />,
  },
  {
    name: "NodeJS",
    children: <SiNodedotjs className="h-2/3 w-2/3" />,
  },
  {
    name: "NextJS",
    children: <SiNextdotjs className="h-2/3 w-2/3" />,
  },
  {
    name: "HTML",
    children: <SiHtml5 className="h-2/3 w-2/3" />,
  },
  {
    name: "CSS",
    children: <SiCss3 className="h-2/3 w-2/3" />,
  },
  {
    name: "Tailwind",
    children: <SiTailwindcss className="h-2/3 w-2/3" />,
  },
  {
    name: "SQL",
    children: <SiPostgresql className="h-2/3 w-2/3" />, // Assuming PostgreSQL icon for SQL
  },
  {
    name: "Jest",
    children: <SiJest className="h-2/3 w-2/3" />,
  },
  {
    name: "VSCode",
    children: <VscVscode className="h-2/3 w-2/3" />,
  },
  {
    name: "Github",
    children: <FaGithub className="h-2/3 w-2/3" />,
  },
];
