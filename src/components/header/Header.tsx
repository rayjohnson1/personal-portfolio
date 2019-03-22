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
                            <a href={`#`} className={`menu-btn`}><i className="fas fa-bars"></i></a>
                        </div>
                    </nav>
                    <div className={`container`}>
                        <div className={`header__name-tag`}>
                            <h1>Welcome to My World</h1>
                            <p>
                                Freelance fullstack software engineer<br/>
                                Greater Detroit Area
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


