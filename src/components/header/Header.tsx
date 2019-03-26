import React from 'react';
import './styles.scss';
import ContactButtons from '../contactButtons/ContactButtons';

export default class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <section className={`header`}>
                    <nav className={`header__nav`}>
                        <div className={`container`}>
                            <h1>Raymond<span>Johnson</span></h1>
                            <ul className={`nav-links`}>
                                <li><a href={`#technologies`}>Technologies</a></li>
                                <li><a href={`#about-me`}>About Me</a></li>
                                <li><a href={`#projects`}>Projects</a></li>
                                <li><a href={`#blogs`}>Blog</a></li>
                            </ul>
                        </div>
                    </nav>
                    <div className={`container`}>
                        <div className={`header__name-tag`}>
                            <h1>Javascript Software Engineer</h1>
                            <p>
                                {/* Freelance fullstack javascript engineer<br/> */}
                                <i className="fas fa-map-marker-alt" style={{marginRight: '15px'}}></i>Greater Detroit Area
                            </p>
                        </div>
                        <div className={`header__actions`}>
                            <ContactButtons />
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}


