import React from 'react';
import Header from '../header/Header';
import TechnologiesBar from '../technologiesBar/TechnologiesBar';
import AboutMe from '../aboutMe/AboutMe';
import Projects from '../projects/Projects';
import Blogs from '../blogs/Blogs';

export default class Page extends React.Component {
    render() {
        return (
            <div className={`page-grid`}>
                <Header />
                <TechnologiesBar />
                <AboutMe />
                <Projects />
                <Blogs />
                <footer></footer>
            </div>
        )
    }
}
