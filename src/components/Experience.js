import React from "react";

const Experience = (props) => {
  return (
    <div>
      <div className="accordion container" id="accordionPanelsStayOpenExample">
        <div className={`accordion-item border-${
            props.mode === "light" ? "dark" : "light"
          } bg-${props.mode} text-${
            props.mode === "light" ? "dark" : "light"
          }`}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button bg-${props.mode} text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Personal Projects | Self-Taught Full-Stack Developer | [2021-2023]
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              Demonstrated proficiency in React.js, Python, and MongoDB through
              a range of personal projects emphasizing end-to-end development.
              <br />
              Designed and developed dynamic user interfaces using React.js,
              focusing on responsive design and intuitive user experiences.
              <br />
              Utilized Python for both front-end and back-end logic, showcasing
              versatility in crafting interactive and functional applications.
              <br />
              Implemented MongoDB databases to efficiently manage and retrieve
              application data, ensuring optimal performance. <br />
              Collaborated effectively within project teams, participated in
              code reviews, and contributed to project planning. <br />
              Independently troubleshooted technical challenges, further honing
              problem-solving and debugging skills.
            </div>
          </div>
        </div>
        <div className={`accordion-item border-${
            props.mode === "light" ? "dark" : "light"
          } bg-${props.mode} text-${
            props.mode === "light" ? "dark" : "light"
          }`}>
          <h2 className="accordion-header">
            <button
              className={`accordion-button collapsed bg-${props.mode} text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Web Development Enthusiast | Self-Directed Learning
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              Embarked on a self-driven journey to master React.js, Python, and
              MongoDB, showcasing a proactive approach to skill acquisition.{" "}
              <br />
              Developed Python scripts and applications for data analysis,
              automation, and beyond, highlighting diverse application areas.{" "}
              <br />
              Explored and integrated RESTful APIs to facilitate seamless
              communication between front-end and back-end components. <br />
              Actively engaged with online developer communities, seeking
              advice, sharing insights, and staying updated with industry
              trends. <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
