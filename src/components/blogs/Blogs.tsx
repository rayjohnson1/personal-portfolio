import React, { Component } from 'react'

export default class Blogs extends Component {
    render() {
        return (
            <section className={`blogs`}>
                <h1 className={`heading`}>Blogs</h1>
                <p>When I have time I enjoy to write blogs over on Medium. Topics are software related and providing a means for readers to find solutions to problems that they may run into.</p>
                <div className={`blog`}>
                    <p className={`blog-title`}>Unit Testing Your Javascript Applications.</p>
                    <a href={`#`}>http://medium.com/u/rayjohnson121/unit-testing</a>
                </div>
            </section>
        )
    }
}
