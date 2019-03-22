import React from 'react';
import './styles.scss';
import chai_logo from '../../assets/svgs/chai.svg';
import css_logo from '../../assets/svgs/css3.svg';
import git_logo from '../../assets/svgs/git.svg';
import html_logo from '../../assets/svgs/html5.svg';
import nodejs_logo from '../../assets/svgs/nodejs.svg';
import react_logo from '../../assets/svgs/react.svg';
import typescript_logo from '../../assets/svgs/typescript.svg';
import github_logo from '../../assets/svgs/github-2.svg';

export default class TechnologiesBar extends React.Component {
    render() {
        return (
            <div id={`technologies`} className={`technologies-bar`}>
                <div className={`container`}>
                    <img className={`technologies-bar__image`} src={github_logo} alt={`github`} />
                    <img className={`technologies-bar__image`} src={git_logo} alt={`git`} />
                    <img className={`technologies-bar__image`} src={chai_logo} alt={`git`} />
                    <img className={`technologies-bar__image`} src={css_logo} alt={`git`} />
                    <img className={`technologies-bar__image`} src={html_logo} alt={`git`} />
                    <img className={`technologies-bar__image`} src={nodejs_logo} alt={`git`} />
                    <img className={`technologies-bar__image`} src={typescript_logo} alt={`git`} />
                    <img className={`technologies-bar__image`} src={react_logo} alt={`git`} />
                </div>
            </div>
        )
    }
}
