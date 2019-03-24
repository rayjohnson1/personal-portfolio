import React, { Component } from 'react';
import './styles.scss';
import gekofx from '../../assets/images/gekofx_poster.jpg';
import minesweeper from '../../assets/images/minesweeper_poster.jpg';
import personal_site from '../../assets/images/personal_site_poster.jpg';

export default class Projects extends Component {
    render() {
        return (
            <section id={`projects`} className={`projects`}>
                <h1 className={`heading`}>Projects</h1>
                <div className={`projects__grid`}>

                    <div className={`project`}>
                        <div className={`col-1`}>
                            <h3 className={`heading-secondary`}>Personal Portfolio</h3>
                            <div className={`project__display`}>
                                <div className={`project__display__poster`}>
                                    <img src={personal_site} alt={`Project Thumbnail`} />
                                </div>
                                <div className={`project__display__actions`}>
                                    <a href={`#`} className={`link link--inactive`}><i className="fas fa-desktop"></i><span>Live Preview</span></a>
                                    <a href={`https://github.com/rayjohnson1/personal-portfolio`} className={`link`}><i className="fas fa-code-branch"></i><span>View Source</span></a>
                                </div>
                            </div>
                            <div className={`project__technologies`}>
                                <p className={`small-section-title`}>Technologies Used</p>
                                <ul className={`project__technologies__list`}>
                                    <li><i className="fas fa-dot-circle"></i><p>ReactJS</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>NodeJS</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Typescript</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>HTML5</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>CSS3</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Sass</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className={`col-2`}>
                            <div className={`project__detail-section`}>
                                <p className={`small-section-title`}>Overview</p>
                                <p>Simple <span className={`highlight`}>React</span> project to display my portfolio of work. It was built by me using <span className={`highlight`}>React / Typescript</span></p>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className={`project`}>
                        <div className={`col-1`}>
                            <h3 className={`heading-secondary`}>Photography Template</h3>
                            <div className={`project__display`}>
                                <div className={`project__display__poster`}>
                                    <img src={gekofx} alt={`Project Thumbnail`} />
                                </div>
                                <div className={`project__display__actions`}>
                                    <a href={`https://immense-caverns-26410.herokuapp.com/`} className={`link`}><i className="fas fa-desktop"></i><span>Live Preview</span></a>
                                    <a href={`#`} className={`link link--inactive`}><i className="fas fa-code-branch"></i><span>Source Private</span></a>
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
                                <p>In this project I oversaw the entire <span className={`highlight`}>SDLC</span>. I met regularly with the client discussing project <span className={`highlight`}>requirements</span>, vision and end goals, while working in a <span className={`highlight`}>scrum</span> like manner.</p>
                            </div>
                            <div className={`project__detail-section`}>
                                <p className={`small-section-title`}>Project Difficulties</p>
                                <p>This project really tested my skills in <span className={`highlight`}>architecting out a workable solution</span>. In the beginning of development, the first thing I did was starting up an express server. With no plan of action, I wasted two weeks worth of work before I was forced to start over.</p>
                            </div>
                            <div className={`project__detail-section`}>
                                <p className={`small-section-title`}>My Solution</p>
                                <p>To solve this struggle, I decided to kick it old school with some good ol' <span className={`highlight`}>Object Oriented Design and Analysis</span>. Following a planning structure, I was able to improve my work <span className={`highlight`}>efficency</span> and <span className={`highlight`}>reach my set sprints</span>.</p>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div className={`project`}>
                        <div className={`col-1`}>
                            <h3 className={`heading-secondary`}>Minesweeper</h3>
                            <div className={`project__display`}>
                                <div className={`project__display__poster`}>
                                    <img src={minesweeper} alt={`Project Thumbnail`} />
                                </div>
                                <div className={`project__display__actions`}>
                                    <a href={`http://rays-react-minesweeper.herokuapp.com`} className={`link`}><i className="fas fa-desktop"></i><span>Live Preview</span></a>
                                    <a href={`https://github.com/rayjohnson1/minesweeper-react`} className={`link`}><i className="fas fa-code-branch"></i><span>View Source</span></a>
                                </div>
                            </div>
                            <div className={`project__technologies`}>
                                <p className={`small-section-title`}>Technologies Used</p>
                                <ul className={`project__technologies__list`}>
                                    <li><i className="fas fa-dot-circle"></i><p>ReactJS</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>NodeJS</p></li>
                                    <li><i className="fas fa-dot-circle"></i><p>Typescript</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className={`col-2`}>
                            <div className={`project__detail-section`}>
                                <p className={`small-section-title`}>Project</p>
                                <p>This was a fun project that was meant to show off more of my technical skills. It displays my ability to work through a complex problem and find a solution using appropriate data structures while doing so. This also tested my ability to find a solution to a <span className={`highlight`}>Graph / Matrix</span> problem while keeping <span className={`highlight`}>run time</span> effeciencies as close to <span className={`highlight`}>O(1)</span> as possible.</p>
                            </div>
                            <div className={`project__detail-section`}>
                                <p className={`small-section-title`}>Project Difficulties</p>
                                <p>My largest issue was creating the recursive revealing of tiles when a player clicks on a tile with zero neighboring mines. This was more a <span className={`highlight`}>React</span> problem where the issue stemmed from calling <span className={`highlight`}>setState</span> inside of a recursive call.</p>
                            </div>
                            <div className={`project__detail-section`}>
                                <p className={`small-section-title`}>My Solution</p>
                                <p>After hacking around for a bit, I decided on a method of using the appropriate <span className={`highlight`}>Lifecycle hook</span> because this solved my issue as well as gave the best performance.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        )
    }
}
