import React from 'react';

interface ContactProps {
  data: any;
}

const Contact: React.FC<ContactProps> = ({ data }) => {
  if (!data?.contact) return null;
  
  return (
    <section className="mb-8">
      <h3 className="text-2xl font-bold text-primary-600 dark:text-blue-300 border-b-2 border-secondary-500 dark:border-secondary-400 pb-2 mb-4">
        Contact & Links
      </h3>
      <div className="flex flex-wrap gap-3">
        {data.contact.email && (
          <a
            href={`mailto:${data.contact.email}`}
            className="inline-block px-4 py-2 bg-secondary-500 dark:bg-secondary-600 text-white rounded-lg font-semibold hover:bg-secondary-600 dark:hover:bg-secondary-700 hover:shadow-lg transition-all"
          >
            📧 Email
          </a>
        )}
        {data.contact.phone && (
          <a
            href={`tel:${data.contact.phone}`}
            className="inline-block px-4 py-2 bg-secondary-500 dark:bg-secondary-600 text-white rounded-lg font-semibold hover:bg-secondary-600 dark:hover:bg-secondary-700 hover:shadow-lg transition-all"
          >
            📱 Phone
          </a>
        )}
        {data.contact.linkedin && (
          <a
            href={data.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-secondary-500 dark:bg-secondary-600 text-white rounded-lg font-semibold hover:bg-secondary-600 dark:hover:bg-secondary-700 hover:shadow-lg transition-all"
          >
            🔗 LinkedIn
          </a>
        )}
      </div>
    </section>
  );
};

export default Contact;
