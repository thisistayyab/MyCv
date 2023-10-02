import React from "react";

const Education = (props) => {
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
              Intermediate
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
          >
            <div className="accordion-body">
              <strong>Government Graduate College.</strong> <br />
              Intermediate in Computer Science <br />
              2021-2023
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
              Bachelor of Science
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
          >
            <div className="accordion-body">
              <strong>
                <a
                  className="text-decoration-none text-success"
                  href="https://www.riphahfsd.edu.pk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ripha International University
                </a>
              </strong>
              <br />
              Admit for BS Computer science program. <br />
              2023
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
