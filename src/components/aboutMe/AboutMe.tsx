import React, { Component } from 'react';
import './styles.scss';

interface IProps {
    render?: () => JSX.Element;
}

export default class AboutMe extends Component<IProps> {
    render() {
        return (
            <div className={`about-me`}>
                <div className={`container`}>
                    <div className={`col-1`}>
                        <h2 className={`heading`}>Important things to know about me.</h2>
                        <ol>
                            <li className={`active`}>What sets me apart?</li>
                            <li className={``}>My current on job practices.</li>
                            <li className={``}>How you will be a help to me!</li>
                        </ol>
                    </div>
                    <div className={`col-2`}>
                        <MyCurrentOnJobPractices />
                    </div>
                </div>
            </div>
        );
    }
}


function WhatSetsMeApart() {
    return (
        <React.Fragment>
            <h3 className={`heading-secondary`}>What sets me apart from other junior developers?</h3>
            <p>I strive to solve solutions by attacking the prolem at its core. I always enjoy a nice coding challenge because I always find out something new. And I also love the ability to breeze through problems which I've already found prior solutions to.</p>
        </React.Fragment>
    );
}

function MyCurrentOnJobPractices() {
    return (
        <React.Fragment>
            <div className={`my-practices`}>
                <div className={`my-practices__item`}>
                    <h3 className={`heading-secondary`}>Typescript</h3>
                    <p>Having started off in C#, statically typed Typescript gives me the security I need to write self documented. It also provides the ability to write <span className={`highlight`}>extensible</span> and <span className={`highlight`}>modular</span> code bases.</p>
                </div>
                <div className={`my-practices__item`}>
                    <h3 className={`heading-secondary`}>SOLID</h3>
                    <p>I believe that at one point software maintenance came at a large price to the company. Today I believe that that price have been heavily discounted when following these simple principles.</p>
                </div>
                <div className={`my-practices__item`}>
                    <h3 className={`heading-secondary`}>TDD</h3>
                    <p>At times it can be a pain. But code assurance helps me to sleep a little better at night. :)</p>
                </div>
                <div className={`my-practices__item`}>
                    <h3 className={`heading-secondary`}>CSS3</h3>
                    <p>With the emergance of css grid and css flex... I will probably never write another float again!</p>
                </div>
            </div>
        </React.Fragment>
    );
}

function HowYouWillHelpMe() {
    return (
        <React.Fragment>
            <h3 className={`heading-secondary`}>Priceless Mentorship</h3>
            <p>Coding alone is hard and progress is slow. working with a team is a two way relationship wherer I can provide <span className={`highlight`}>value</span> to you , while you <span className={`highlight`}>invest</span> in me!</p>
        </React.Fragment>
    );
}
