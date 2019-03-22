import React from 'react';
import './styles.scss';

export default class Header extends React.Component {
    render() {
        return (
            <section className={`header`}>
                <div className={`container`}>
                    <div className={`header__name-tag`}>
                        <h1>Raymond <span>Johnson</span></h1>
                        <p>
                            Freelance fullstack software engineer<br/>
                            Greater Detroit Area
                        </p>
                    </div>
                    <div className={`header__actions`}>
                        <a href={`#`} className={`action`}>
                            <i className="fab fa-linkedin-in"></i>
                            <span>LinkedIn</span>
                        </a>
                        <a href={`#`} className={`action`}>
                            <i className="fab fa-github"></i>
                            <span>Github</span>
                        </a>
                        <a href={`#`} className={`action`}>
                            <i className="fab fa-medium-m"></i>
                            <span>Blog</span>
                        </a>
                        <a href={`#`} className={`action`}>
                            <i className="fas fa-at"></i>
                            <span>Email</span>
                        </a>
                        <a href={`#`} className={`action`}>
                            <i className="fas fa-newspaper"></i>
                            <span>Resume</span>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}
