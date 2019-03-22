import React, { Component } from 'react';
import './styles.scss';

export default class Blogs extends Component {
    render() {
        return (
            <section id={`blogs`} className={`blogs`}>
                <div className={`container`}>
                    <h1 className={`heading`}>Blogs</h1>
                    <p className={`blog__copy`}>When I have time I enjoy to write blogs over on Medium. Topics are software related and providing a means for readers to find solutions to problems that they may run into.</p>
                    <div className={`blogs__grid`}>
                        <div className={`blog`}>
                            <p className={`blog-title`}>Unit Testing Your Javascript Applications</p>
                            <a href={`https://medium.com/@raymondjohnson121/unit-testing-your-javascript-applications-2ba25d5a509d`} className={`link link--bold`}>View blog</a>
                        </div>
                        <div className={`blog`}>
                            <p className={`blog-title`}>Encapsulation - Object Oriented Principles in Typescript</p>
                            <a href={`https://medium.com/@raymondjohnson121/encapsulation-object-oriented-principles-in-typescript-5f918813f50e`} className={`link link--bold`}>View blog</a>
                        </div>
                        <div className={`blog`}>
                            <p className={`blog-title`}>Abstraction - Object Oriented Principles in Typescript</p>
                            <a href={`https://medium.com/@raymondjohnson121/abstraction-object-oriented-principles-in-typescript-b0ae13bd921d`} className={`link link--bold`}>View blog</a>
                        </div>
                        <div className={`blog`}>
                            <p className={`blog-title`}>Inheritance - Object Oriented Principles in Typescript</p>
                            <a href={`https://medium.com/@raymondjohnson121/inheritance-object-oriented-principles-in-typescript-cdc83c88f236`} className={`link link--bold`}>View blog</a>
                        </div>
                        <div className={`blog`}>
                            <p className={`blog-title`}>Polymorphism - Object Oriented Principles in Typescript</p>
                            <a href={`https://medium.com/@raymondjohnson121/polymorphism-object-oriented-principles-in-typescript-b176995e5643`} className={`link link--bold`}>View blog</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
