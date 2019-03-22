import React, { Component } from 'react';
import './styles.scss';

export default class Blogs extends Component {
    render() {
        return (
            <section className={`blogs`}>
                <div className={`container`}>
                    <h1 className={`heading`}>Blogs</h1>
                    <p className={`blog__copy`}>When I have time I enjoy to write blogs over on Medium. Topics are software related and providing a means for readers to find solutions to problems that they may run into.</p>
                    <div className={`blogs__grid`}>
                        <div className={`blog`}>
                            <p className={`blog-title`}>Unit Testing Your Javascript Applications.</p>
                            <a href={`#`} className={`link link--bold`}>http://medium.com/u/rayjohnson121/unit-testing</a>
                        </div>
                        <div className={`blog`}>
                            <p className={`blog-title`}>Unit Testing Your Javascript Applications.</p>
                            <a href={`#`} className={`link link--bold`}>http://medium.com/u/rayjohnson121/unit-testing</a>
                        </div>
                        <div className={`blog`}>
                            <p className={`blog-title`}>Unit Testing Your Javascript Applications.</p>
                            <a href={`#`} className={`link link--bold`}>http://medium.com/u/rayjohnson121/unit-testing</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
