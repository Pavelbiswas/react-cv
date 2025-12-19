import React from 'react';

interface SkillsProps {
  data: any;
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  if (!data?.skills) return null;
  
  const skillCategories = Object.entries(data.skills).filter(
    ([_, value]) => Array.isArray(value)
  );

  return (
    <section className="mb-8">
      <h3 className="text-2xl font-bold text-primary-600 dark:text-blue-300 border-b-2 border-secondary-500 dark:border-secondary-400 pb-2 mb-4">
        Skills & Expertise
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map(([category, skills]: [string, any]) => (
          <div key={category} className="card">
            <h4 className="text-lg font-semibold text-primary-600 dark:text-blue-200 capitalize mb-3">
              {category.replace(/([A-Z])/g, ' $1').trim()}
            </h4>
            <ul className="space-y-2">
              {(skills as string[]).map((skill: string, idx: number) => (
                <li
                  key={idx}
                  className="flex items-center text-gray-700 dark:text-gray-300 before:content-['▸'] before:mr-2 before:text-secondary-500 dark:before:text-secondary-400"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
