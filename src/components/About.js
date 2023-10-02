import React from "react";

const About = (props) => {
  return (
    <div className="container">
      <div className="accordion" id="accordionPanelsStayOpenExample">
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
              Overview
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              Hey there! I'm a passionate and versatile full stack developer
              with expertise in React, Python, and MongoDB. With a strong
              foundation in both front-end and back-end technologies, I love
              crafting dynamic and seamless web applications that not only look
              great but also deliver exceptional user experiences. <br />
              Throughout my journey, I've honed my skills in creating responsive
              and interactive user interfaces using React. I believe that a
              well-designed UI is key to engaging users, and I'm dedicated to
              implementing the best practices to achieve this. On the back end,
              I harness the power of Python to build robust server-side logic
              that ensures the functionality and performance of the applications
              I develop. <br />
              My proficiency with MongoDB allows me to handle data storage and
              retrieval efficiently, ensuring that applications have a reliable
              and scalable database system at their core. By combining these
              technologies, I'm able to create end-to-end solutions that meet
              the highest standards of quality and performance. <br />
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
              Skillset
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              Here's a breakdown of my technical skillset: <br />
              <strong> Front-End Development (React):</strong> <br />
              Building responsive and user-friendly interfaces using React and
              related libraries. Implementing state management with tools like
              Redux for efficient data flow within applications. Optimizing
              performance to ensure fast loading times and smooth user
              interactions. Ensuring cross-browser and cross-device
              compatibility for a consistent experience. <br />
              <strong> Back-End Development (Python):</strong> <br />
              Developing server-side logic using Python to handle data
              processing, authentication, and more. Creating RESTful APIs and
              integrating them seamlessly with the front end. Implementing
              security measures to protect applications against common
              vulnerabilities. Deploying and managing applications using
              frameworks like Flask or Django. <br />
              <strong> Database Management (MongoDB):</strong> <br />
              Designing database schemas that suit application requirements and
              data relationships. Performing CRUD operations to manage data
              effectively within MongoDB. Optimizing database queries for
              enhanced performance and minimal response times. Ensuring data
              security and integrity through proper validation and access
              controls
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
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Approach
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              My approach to development revolves around collaboration,
              innovation, and continuous learning. I thrive in dynamic team
              environments, where I can contribute my expertise while also
              learning from my peers. I'm a strong advocate for clean code
              practices and stay updated with the latest industry trends to
              incorporate innovative solutions into my projects. <br />
              I firmly believe that every project is an opportunity to grow and
              excel. I approach each task with enthusiasm, attention to detail,
              and a problem-solving mindset. From conceptualization to
              deployment and beyond, I'm committed to delivering solutions that
              not only meet the technical requirements but also align with the
              client's vision and end users' needs. <br />
              Thank you for taking the time to learn about me. I'm excited about
              the potential to collaborate on future projects and contribute to
              creating outstanding web experiences. If you'd like to discuss a
              project or learn more about my work, feel free to reach out!{" "}
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
