"use client";
import React, { useEffect } from "react";
import { Icon } from "@iconify-icon/react";
import { skills } from "@/lib/skils";

interface ISkillCardProps {
  icon: string;
  name: string;
}
const SkillCard = ({ icon, name }: ISkillCardProps) => {
  return (
    <div className="max-w-full aspect-square flex flex-col items-center justify-center">
      <Container>
        <Icon icon={icon} height="4em" />
        <div className="text-center text-m mt-2">
          <div className="font-bold">{name}</div>
        </div>
      </Container>
    </div>
  );
};

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative inline-flex h-full w-full overflow-hidden rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-background focus:ring-offset-2 focus:ring-offset-background">
      <span className="absolute inset-[-1000%] ate-[spin_2s_linear_infinite] bg-[conic-gradient(var(--tw-gradient-stops))] from-primary via-background to-primary" />
      <span className="inline-flex flex-col h-full w-full items-center justify-center rounded-full y-1 bg-secondary backdrop-blur-3xl">
        {children}
      </span>
    </div>
  );
};

interface ISkill {
  name: string;
  icon: string;
}

export const SkillList = async () => {
  return (
    <div className="flex flex-col">
      <div className="text-lg font-bold ml-3 mb-2">Technologies</div>
      <div className="h-full auto-rows-auto grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 p-3">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>
    </div>
  );
};
