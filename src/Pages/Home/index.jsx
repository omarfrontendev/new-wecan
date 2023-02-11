import React from "react";
import {
  AboutUs,
  Collections,
  ContactUs,
  Hero,
  ProjectBox,
  Services,
} from "../../Components";

import "./Home.scss";

const Home = () => {
  const projects = [
    {
      img: "https://livedemo00.template-help.com/wt_51678/images/product-03-470x303.jpg",
      name: "Project",
    },
    {
      img: "https://livedemo00.template-help.com/wt_51678/images/product-03-470x303.jpg",
      name: "Project",
    },
    {
      img: "https://livedemo00.template-help.com/wt_51678/images/product-03-470x303.jpg",
      name: "Project",
    },
    {
      img: "https://livedemo00.template-help.com/wt_51678/images/product-03-470x303.jpg",
      name: "Project",
    },
    {
      img: "https://livedemo00.template-help.com/wt_51678/images/product-03-470x303.jpg",
      name: "Project",
    },
    {
      img: "https://livedemo00.template-help.com/wt_51678/images/product-03-470x303.jpg",
      name: "Project",
    },
  ];

  return (
    <div>
      <Hero />
      <Collections />
      <AboutUs />
      <section className="section__space some__works__section">
        <div className="container">
          <h2 className="section__title">Some Works</h2>
          <div className="some__project__container">
            {projects.map((project, i) => (
              <ProjectBox key={i} name={project.name} img={project.img} />
            ))}
          </div>
        </div>
        <div className="sec__button">All Works</div>
      </section>
      <Services />
      <ContactUs />
    </div>
  );
};

export default Home;
