import React, { Component } from 'react'

export default class Projects extends Component {
    render() {
        return (
            <section className={`projects`}>
                <h1 className={`heading`}>Projects</h1>

                <div className={`project`}>
                    <div className={`col-1`}>
                        <h3 className={`heading-secondary`}>GEKOFX Photography</h3>
                        <div className={`project__display`}>
                            <img src={``} alt={`Project Thumbnail`} />
                            <a href={`#`}><i className="fas fa-desktop"></i><span>Live Preview</span></a>
                            <a href={`#`}><i className="fas fa-code-branch"></i><span>View Source</span></a>
                        </div>
                        <div className={`project__technologies`}>
                            <p className={`small-section-title`}>Technologies Used</p>
                            <ul className={`project__technologies__list`}>
                                <li>ReactJS</li>
                                <li>NodeJS</li>
                                <li>Typescript</li>
                                <li>ExpressJS</li>
                                <li>Jest</li>
                                <li>PostgreSQL</li>
                                <li>SinonJS</li>
                                <li>Webpack</li>
                                <li>Babel</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Sass</li>
                            </ul>
                        </div>
                    </div>
                    <div className={`col-2`}>
                        <div className={`project__detail-section`}>
                            <p className={`small-section-title`}>My Role</p>
                            <p>In this project I oversaw the entire SDLC. I met regularly with the client discussing project requirements, vision and end goals, while working in a SCRUM like manner.</p>
                        </div>
                        <div className={`project__detail-section`}>
                            <p className={`small-section-title`}>Project Difficulties</p>
                            <p>This project really tested my skills in architecting out a workable solution. In the beginning of development, the first thing I did was starting up an express server. With no plan of action, I wasted two weeks worth of work before I was forced to start over.</p>
                        </div>
                        <div className={`project__detail-section`}>
                            <p className={`small-section-title`}>My Solution</p>
                            <p>To solve this struggle, I decided to kick it old school with some good ol' <span className={`highlight`}>Object Oriented Design and Analysis</span>. Following a planning structure, I was able to improve my on job efficeny and reach my set sprints.</p>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}
