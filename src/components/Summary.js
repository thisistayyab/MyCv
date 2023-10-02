import React from "react";

const Summary = (props) => {
  return (
    <div>
      <div className="accordion container" id="accordionPanelsStayOpenExample">
        <div className={`accordion-item border-${
            props.mode === "light" ? "dark" : "light"
          } bg-${props.mode} text-${
            props.mode === "light" ? "dark" : "light"
          }`}>
          <h2 className={`accordion-header text-${
            props.mode === "light" ? "dark" : "light"}`}>
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
              Summary
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              Passionate and dedicated self-taught developer with a remarkable
              journey of exploration and growth in web development. Proficient
              in React.js, Python, and MongoDB, I've crafted a diverse range of
              personal projects that highlight my skills in full-stack
              development. From creating dynamic front-end interfaces using
              React.js to building server-side logic with Python and leveraging
              MongoDB for efficient data management, I've embraced the holistic
              nature of web development. With an innate drive for continuous
              learning and innovation, I aspire to contribute my adaptable skill
              set and unwavering enthusiasm to the ever-evolving landscape of
              web development.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
