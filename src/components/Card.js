import React from "react";
import icon from "../icon.jpg";

const Card = (props) => {
  return (
    <div className="container my-3">
      <div className={`card mb-3 border-${
            props.mode === "light" ? "dark" : "light"
          } bg-${props.mode} text-${
            props.mode === "light" ? "dark" : "light"
          }`}>
        <div className="row g-0">
          <div className="col-md-2">
            <img
              src={icon}
              className="img-fluid rounded-start"
              alt="..."
              style={{ width: "170px" }}
            />
          </div>
          <div className="col-md-8">
            <div className={`card-body bg-${props.mode} text-${
            props.mode === "light" ? "dark" : "light"
          }`}>
              <h5 className={`card-text text-${
                props.mode === "light" ? "dark" : "light"
              }`}>Tayyab Aslam</h5>
              <p className={`text-${
                props.mode === "light" ? "dark" : "light"
              }`}>
                Full-Stack Developer <br />
                <a href="thisistayyab@outlook.com"className="text-decoration-none text-success">
                  thisistayyab@outlook.com
                </a>{" "} <br />
              </p>
                <a target="_blank" rel="noreferrer" href="https://www.mediafire.com/file/9hl4ykxuituqofb/My+Cv.pdf/file"><button type="button" class="btn btn-danger">Download Pdf</button></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
