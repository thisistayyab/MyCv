import React from 'react'

const Skills = (props) => {
  return (
    <div className='container border rounded' >
        <ul className={`my-3 list-${
            props.mode === "light" ? "dark" : "light"
          } bg-${props.mode} text-${
            props.mode === "light" ? "dark" : "light"
          }`}>
            <li>React.js, Redux, and React Router</li>
            <li>Python (Flask/Django)</li>
            <li>MongoDB</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5, CSS3</li>
            <li>Tailwind CSS, Bootstrap</li>
            <li>Responsive and mobile-first design</li>
            <li>RESTful APIs and asynchronous programming</li>
            <li>Version control (Git/GitHub)</li>
            <li>Webpack, Babel, and npm/Yarn</li>
        </ul>
    </div>
  )
}

export default Skills