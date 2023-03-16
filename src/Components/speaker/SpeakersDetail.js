import Image from 'next/image';
import React from 'react';
import ReactMarkdown from 'react-markdown';

const data = [
  {
    id: 1,
    speaker: {
      name: 'Edward C. Horner',
      description:
        'He is a DevOpsologist who has spent the last couple of decades helping organisations make better software faster.',
      image: '/images/Speaker1.jpg',
      position: 'Founder, Textlab',
      profileLink: 'http://www.textlab.com',
    },
    sessionDetail: `### Diving in to the WordPress REST API
Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Rethoric question ran over her cheek When she reached the first hills of the Italic Mountains, she had a last view back on the skyline.
#### Topics Covered:
* Design a monolith ready for microservices
* How to build fast data flows and integrate with big data tasks from your microservices.
* Deploy, Upgrade, Stress and Manage your microservices so that they are ready for production
* DevOps definitions – Why DevOps?
* Making cultural change happen
* Formulating and executing a DevOps transformation
#### Outcomes for attendees::
   * A deeper understanding of what the DevOps movement is all about
   * Making cultural change happen
   * An action plan for change and transformation
   `,
  },
  {
    id: 2,
    speaker: {
      name: 'Yue Ying Yüan',
      description:
        'He is a DevOpsologist who has spent the last couple of decades helping organisations make better software faster.',
      image: '/images/Speaker2.jpg',
      position: 'CFO, First Choice Inc.',
      profileLink: 'http://www.buenavista.com',
    },
    sessionDetail: `### Session: Designing a Web API, Best Practices
Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Rethoric question ran over her cheek When she reached the first hills of the Italic Mountains, she had a last view back on the skyline.
#### Topics Covered:
* Design a monolith ready for microservices
* How to build fast data flows and integrate with big data tasks from your microservices.
* Deploy, Upgrade, Stress and Manage your microservices so that they are ready for production
* DevOps definitions – Why DevOps?
* Making cultural change happen
* Formulating and executing a DevOps transformation
#### Outcomes for attendees::
   * A deeper understanding of what the DevOps movement is all about
   * Making cultural change happen
   * An action plan for change and transformation`,
  },
  {
    id: 3,
    speaker: {
      name: 'Avdei Ignatyev',
      description:
        'He is a DevOpsologist who has spent the last couple of decades helping organisations make better software faster.',
      image: '/images/Speaker4.jpg',
      position: 'Co-Founder, Newhair Corp.',
      profileLink: 'http://www.newhaircorp.com',
    },
    sessionDetail: `### Session: What Big Data is Missing: Our Humanity
Eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Rethoric question ran over her cheek When she reached the first hills of the Italic Mountains, she had a last view back on the skyline.
#### Topics Covered:
* Design a monolith ready for microservices
* How to build fast data flows and integrate with big data tasks from your microservices.
* Deploy, Upgrade, Stress and Manage your microservices so that they are ready for production
* DevOps definitions – Why DevOps?
* Making cultural change happen
* Formulating and executing a DevOps transformation
#### Outcomes for attendees::
   * A deeper understanding of what the DevOps movement is all about
   * Making cultural change happen
   * An action plan for change and transformation`,
  },
];

const SpeakersDetail = () => {
  return (
    <div className="container mx-auto py-14 md:px-14 ">
      {data.map((item) => (
        <div
          key={item.id}
          className="md:flex even:flex-row-reverse gap-10 my-12 border-b-2 pb-6 "
        >
          <div className="rounded border md:w-4/12">
            <div>
              <Image
                src={item?.speaker?.image}
                alt={item?.speaker?.name}
                height={300}
                width={400}
              />
            </div>
            <div className="flex flex-col text-center r p-6 space-y-8">
              <div className="space-y-2 items-center">
                <h2 className="text-3xl font-semibold tracking-wide">
                  {item?.speaker?.name || ''}
                </h2>
                <h3>{item?.speaker?.position || ''}</h3>
                {item.speaker?.profileLink && (
                  <a
                    className="text-brand hover:text-black"
                    href={item.speaker?.profileLink}
                  >
                    {item.speaker?.profileLink}
                  </a>
                )}
                <p className="dark:text-gray-100">
                  {item.speaker?.description}
                </p>
              </div>
            </div>
          </div>
          <div className="md:w-8/12">
            <div className="text-gray-600 p-2 prose lg:prose-xl max-w-prose-lg prose-p:text-base prose-li:text-sm prose-h4:font-bold  ">
              <ReactMarkdown>{item?.sessionDetail}</ReactMarkdown>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpeakersDetail;
