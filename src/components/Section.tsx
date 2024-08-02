import Icon from "@/utilities/Icon";
import React from "react";

interface SectionProps {
  title?: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title ? (
          <span className="flex justify-between items-center mb-6">
            <h2 className="text-2xl sm:text-4xl font-bold">{title}</h2>
            <Icon className="sm:hidden" icon="section-arrow.svg" />
          </span>
        ) : null}
        {children}
      </div>
    </section>
  );
};

export default Section;
