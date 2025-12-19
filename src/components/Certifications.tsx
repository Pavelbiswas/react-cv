import React from 'react';

interface CertificationsProps {
  data: any;
}

const Certifications: React.FC<CertificationsProps> = ({ data }) => {
  if (!data?.certifications || data.certifications.length === 0) return null;
  
  return (
    <section className="mb-8">
      <h3 className="text-2xl font-bold text-primary-600 dark:text-blue-300 border-b-2 border-secondary-500 dark:border-secondary-400 pb-2 mb-4">
        Certifications
      </h3>
      <div className="space-y-4">
        {data.certifications.map((cert: any, idx: number) => (
          <article key={idx} className="card">
            <h4 className="text-lg font-semibold text-primary-600 dark:text-blue-200 mb-1">
              {cert.title}
            </h4>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {cert.issuer} • {cert.year}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
