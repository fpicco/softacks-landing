import Footer from '@/components/footer';
import Page from '@/components/page';
import React from 'react';
import { tw } from 'twind';

interface Projects {
  name: string;
  description: string;
  img: string;
  infoTags: string[];
}
const projects: Projects[] = [
  {
    name: `Blender cloud rendering API`,
    description: `The client required an API for doing cloud rendering of 3D Blender projects at scale. 
      The API had to be able to handle thousands of projects of any size rendering at the same time.`,
    img: `/images/projects/blenderAPI.png`,
    infoTags: [`Full project`, ` 3 months`],
  },
  {
    name: `Video-presentation web app`,
    description: `The client required an end-to-end web app for creating animated video presentations. 
      Some of the asked features were AI text generation, voice generation, collaborative projects, 
      and background edition.`,
    img: `/images/projects/animatronics.png`,
    infoTags: [`Full project`, ` 4 months`],
  },
  {
    name: `Realtime entity recognition API`,
    description: `The client required an MVP of a machine learning algorithm for processing text and doing 
      entity recognition with high availability and fast response time.`,
    img: `/images/projects/entityAPI.png`,
    infoTags: [`MVP `, ` 1 month`],
  },
];

const OurProjects = () => (
  <Page>
    <main>
      <div className={tw(`my-16 text-center`)}>
        <h2 className={tw(`text-base text-indigo-600 font-semibold tracking-wide uppercase`)}>Ideas brought to life</h2>
        <p className={tw(`mt-2 pb-4 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900`)}>Our work</p>
      </div>
      <div>
        {projects.map((project) => (
          <div
            key={project.name}
            className={tw(
              `flex flex-col xl:flex-row flex-col-reverse items-center justify-center even:bg-white 
              xl:even:flex-row-reverse odd:bg-gray-100 xl:h-96 xl:px-52 py-20 xl:py-0`,
            )}
          >
            <div className={tw(`xl:w-1/2 flex flex-col justify-center items-center relative`)}>
              <h4 className={tw(`text-2xl lg:text-4xl mb-5 xl:mb-10`)}>{project.name}</h4>
              <p className={tw(`px-20`)}>{project.description}</p>
              <div className={tw(`flex items-center justify-start gap-x-2 pl-20 pt-5 self-start`)}>
                {project.infoTags.map((tag) => (
                  <div key={tag} className={tw(`w-fit px-3 bg-primary rounded-full text-white`)}>
                    <p className={tw(`uppercase`)}>{tag}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={tw(`w-1/2 flex justify-center items-center pb-10 xl:pb-0`)}>
              <img
                src={project.img}
                alt={`${project.name} website`}
                className={tw(`xl:h-80 flex justify-center items-center`)}
              />
            </div>
          </div>
        ))}
      </div>
    </main>
    <Footer />
  </Page>
);

export default OurProjects;
