import React from 'react';

interface ExperienceProps {
  data: any;
}

const Experience: React.FC<ExperienceProps> = ({ data }) => {
  if (!data?.experience) return null;
  
  return (
    <section className="mb-8">
      <h3 className="text-2xl font-bold text-primary-600 dark:text-blue-300 border-b-2 border-secondary-500 dark:border-secondary-400 pb-2 mb-4">
        Work Experience
      </h3>
      <div className="space-y-6">
        {data.experience.map((job: any, idx: number) => (
          <article
            key={idx}
            className="card border-l-4 border-secondary-500 dark:border-secondary-400"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
              <h4 className="text-lg font-semibold text-primary-600 dark:text-blue-200">
                {job.title}
              </h4>
              <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {job.period}
              </span>
            </div>
            <p className="text-secondary-600 dark:text-secondary-300 font-semibold mb-2">
              {job.company}
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-3">{job.description}</p>
            {job.technologies && (
              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech: string, tIdx: number) => (
                  <span
                    key={tIdx}
                    className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
