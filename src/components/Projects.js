import React from 'react'

const Projects = (props) => {
  return (
    <div className='container'>
        <div className="accordion" id="accordionPanelsStayOpenExample">
  <div className={`accordion-item border-${
            props.mode === "light" ? "dark" : "light"
          } bg-${props.mode} text-${
            props.mode === "light" ? "dark" : "light"
          }`}>
    <h2 className="accordion-header">
      <button className={`accordion-button bg-${props.mode} text-${
                props.mode === "light" ? "dark" : "light"
              }`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        <a target='_blank' className='text-decoration-none' href="https://thisistayyab.github.io/EditWave/" rel="noreferrer">EditWave</a>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
      <div className="accordion-body">
      At <a target='_blank' href="https://thisistayyab.github.io/EditWave/" className='text-decoration-none' rel="noreferrer">EditWaveApp</a>, our mission is to empower individuals to express their ideas, thoughts, and creativity effortlessly through an innovative and user-friendly text editor. We believe that writing should be a joyful and seamless experience, free from distractions and limitations. Our goal is to provide writers of all levels, whether professionals, students, or hobbyists, with a versatile tool that enhances productivity and boosts inspiration. <br />
We strive to create a collaborative environment where users can work together in real-time, breaking down barriers and fostering a sense of community. Our team is dedicated to continually improving and refining the app, adding new features, and incorporating user feedback to ensure that <a target='_blank' href="https://thisistayyab.github.io/EditWave/" rel="noreferrer" className='text-decoration-none'>EditWaveApp</a> remains a cutting-edge solution for all writing needs. <br />
      </div>
    </div>
  </div>
  <div className={`accordion-item border-${
            props.mode === "light" ? "dark" : "light"
          } bg-${props.mode} text-${
            props.mode === "light" ? "dark" : "light"
          }`}>
    <h2 className="accordion-header">
      <button className={`accordion-button collapsed bg-${props.mode} text-${
                props.mode === "light" ? "dark" : "light"
              }`} type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        <a target='_blank' className='text-decoration-none' href="https://thisistayyab.github.io/NewsWave/" rel="noreferrer">NewsWave</a>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
      <div className="accordion-body">
      <a target='_blank' className='text-decoration-none' href="https://thisistayyab.github.io/NewsWave/" rel="noreferrer">NewsWave</a> is a dynamic and engaging news aggregator app built with React, designed to keep you informed and up-to-date with the latest headlines. This app allows users to sign up or log in, enabling them to curate their own collection of news articles. Each article can be saved with a title, description, and relevant tags for easy categorization and retrieval.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Projects