import React from 'react';
import Header from '../header/Header';
import TechnologiesBar from '../technologiesBar/TechnologiesBar';
import AboutMe from '../aboutMe/AboutMe';
import Projects from '../projects/Projects';
import Blogs from '../blogs/Blogs';
import ContactButtons from '../contactButtons/ContactButtons';

export default class Page extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* <nav>
                    <div className={`container`}>
                        <h1>Raymond<span>Johnson</span></h1>
                        <ul className={`nav-links`}>
                            
                        </ul>
                    </div>
                </nav> */}
                {/* <nav className={`navbar`}>
                    <div className={'container'} >
                        <div className={'navbar__flex'}>
                            <div className={'navbar__flex--left'}>
                                <h3>Raymond<span>Johnson</span></h3>
                                <ul className={'nav-links page-nav'}>
                                    <li><a href={`#technologies`}>Technologies</a></li>
                                    <li><a href={`#about-me`}>About Me</a></li>
                                    <li><a href={`#projects`}>Projects</a></li>
                                    <li><a href={`#blogs`}>Blog</a></li>
                                </ul>
                            </div>
                            <div className={'navbar__flex--right'} >
                                <MenuToggle onClickFunction={this.props.toggleMobileMenu}/>
                            </div>
                        </div>
                    </div>
                </nav> */}
                <div className={`page-grid`}>
                    <Header />
                    {/* <TechnologiesBar /> */}
                    <AboutMe />
                    <Projects />
                    <Blogs />
                    <footer className={`footer`}>
                        <div className={`container`}>
                            <h1>Thank you<br /><small>Please contact me if you liked!</small></h1>
                            <div className={`footer__actions`}>
                                <ContactButtons />
                            </div>
                        </div>
                    </footer>
                </div>
            </React.Fragment>
        )
    }
}
