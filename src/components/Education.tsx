import React from 'react';

interface EducationProps {
  data: any;
}

const Education: React.FC<EducationProps> = ({ data }) => {
  if (!data?.education) return null;
  
  return (
    <section className="mb-8">
      <h3 className="text-2xl font-bold text-primary-600 dark:text-blue-300 border-b-2 border-secondary-500 dark:border-secondary-400 pb-2 mb-4">
        Education
      </h3>
      <div className="space-y-4">
        {data.education.map((edu: any, idx: number) => (
          <article key={idx} className="card">
            <h4 className="text-lg font-semibold text-primary-600 dark:text-blue-200 mb-1">
              {edu.degree}
            </h4>
            <p className="text-secondary-600 dark:text-secondary-300 font-medium mb-1">
              {edu.school}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {edu.field} • {edu.year}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;
