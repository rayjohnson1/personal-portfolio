import React, { Component } from 'react';
import './styles.scss';

export default class Projects extends Component {
    render() {
        return (
            <section className={`projects`}>
                <h1 className={`heading`}>Projects</h1>
                <div className={`projects__grid`}>

                    <div className={`project`}>
                        <div className={`col-1`}>
                            <h3 className={`heading-secondary`}>GEKOFX Photography</h3>
                            <div className={`project__display`}>
                                <div className={`project__display__poster`}>
                                    <img src={`https://images.unsplash.com/photo-1510070009289-b5bc34383727?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`} alt={`Project Thumbnail`} />
                                </div>
                                <div className={`project__display__actions`}>
                                    <a href={`#`} className={`link`}><i className="fas fa-desktop"></i><span>Live Preview</span></a>
                                    <a href={`#`} className={`link`}><i className="fas fa-code-branch"></i><span>View Source</span></a>
                                </div>
                            </div>
                            <div className={`project__technologies`}>
                                <p className={`small-section-title`}>Technologies Used</p>
                                <ul className={`project__technologies__list`}>
                                    <li><i className="fas fa-dot-circle"></i><p>ReactJS</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>NodeJS</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Typescript</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>ExpressJS</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Jest</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>PostgreSQL</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>SinonJS</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Webpack</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Babel</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>HTML5</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>CSS3</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Sass</p></li>
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

                    <hr />

                    <div className={`project`}>
                        <div className={`col-1`}>
                            <h3 className={`heading-secondary`}>GEKOFX Photography</h3>
                            <div className={`project__display`}>
                                <div className={`project__display__poster`}>
                                    <img src={`https://images.unsplash.com/photo-1510070009289-b5bc34383727?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80`} alt={`Project Thumbnail`} />
                                </div>
                                <div className={`project__display__actions`}>
                                    <a href={`#`} className={`link`}><i className="fas fa-desktop"></i><span>Live Preview</span></a>
                                    <a href={`#`} className={`link`}><i className="fas fa-code-branch"></i><span>View Source</span></a>
                                </div>
                            </div>
                            <div className={`project__technologies`}>
                                <p className={`small-section-title`}>Technologies Used</p>
                                <ul className={`project__technologies__list`}>
                                    <li><i className="fas fa-dot-circle"></i><p>ReactJS</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>NodeJS</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Typescript</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>ExpressJS</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Jest</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>PostgreSQL</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>SinonJS</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Webpack</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Babel</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>HTML5</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>CSS3</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Sass</p></li>
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

                </div>
            </section>
        )
    }
}
