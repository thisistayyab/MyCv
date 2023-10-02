import React from "react";
import insta from "../insta.png";
import link from "../link.png";
import outlook from "../outlook.png";
import X from "../X.png";
import phone from "../phone.png";
import github from "../github.png";

const Contact = (props) => {
  return (
    <div className="container border rounded">
      <ul className={`my-3 list-unstyled bg-${props.mode} text-${
            props.mode === "light" ? "dark" : "light"
          }`}>
        <li className="mt-3">
          <img
            src={phone}
            alt=""
            style={{ width: "24px" }}
            className="mx-1 my-1"
          />
          +92-302-8742525
        </li>
        <li>
          <img
            src={outlook}
            alt=""
            style={{ width: "24px" }}
            className="mx-1 my-1"
          />
          thisistayyab@outlook.com
        </li>
        <li>
          <a
            target="_blank"
            className="text-decoration-none text-success"
            href="https://twitter.com/thisistayyab1/"
            rel="noreferrer"
          >
            <img
              src={X}
              alt=""
              style={{ width: "24px" }}
              className="mx-1 my-1"
            />
            @thisistayyab
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="text-decoration-none text-success"
            href="https://www.instagram.com/thisistayyab1/"
            rel="noreferrer"
          >
            <img
              src={insta}
              alt=""
              style={{ width: "24px" }}
              className="mx-1 my-1"
            />
            @thisistayyab
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="text-decoration-none text-success"
            href="https://www.linkedin.com/in/tayyab-aslam-665049268/"
            rel="noreferrer"
          >
            <img
              src={link}
              alt=""
              style={{ width: "24px" }}
              className="mx-1 my-1"
            />
            @thisistayyab
          </a>
        </li>
        <li>
          <a
            target="_blank"
            className="text-decoration-none text-success"
            href="https://github.com/thisistayyab"
            rel="noreferrer"
          >
            <img
              src={github}
              alt=""
              style={{ width: "24px" }}
              className="mx-1 my-1"
            />
            @thisistayyab
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
