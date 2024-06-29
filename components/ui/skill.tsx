import React, { ReactElement } from "react";
import { cn } from "@/lib/utils";
import { GoCopilot } from "react-icons/go";
import { GrGraphQl } from "react-icons/gr";
import { skills } from "@/lib/skils";

interface ISkillCardProps {
  children: ReactElement;
  name: string;
}
const SkillCard = ({ children, name }: ISkillCardProps) => {
  return (
    <div className="max-w-full aspect-square flex flex-col items-center justify-center">
      <Container>{children}</Container>
      <div className="text-center text-sm mt-2">
        <div className="font-bold">{name}</div>
      </div>
    </div>
  );
};

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="relative inline-flex h-3/4 w-3/4 overflow-hidden rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-background focus:ring-offset-2 focus:ring-offset-background">
      <span className="absolute inset-[-1000%] ate-[spin_2s_linear_infinite] bg-[conic-gradient(var(--tw-gradient-stops))] from-primary via-background to-primary" />
      <span className="inline-flex h-full w-full items-center justify-center rounded-full y-1 bg-secondary backdrop-blur-3xl">
        {children}
      </span>
    </div>
  );
};

export const SkillList = () => {
  return (
    <div className="flex flex-col">
      <div className="text-lg font-bold ml-3 mb-2">Technologies</div>
      <div className="h-full auto-rows-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 p-3">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name}>
            {skill.children}
          </SkillCard>
        ))}
      </div>
    </div>
  );
};
