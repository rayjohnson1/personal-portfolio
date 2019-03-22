import React from 'react';
import ModalPortal from "../portals/modalPortal/ModalPortal";
import ModalHandler from '../ModalHandler';

export default class ContactButtons extends React.Component<{}, {modalOpen: boolean}>{

    constructor(props: {}){
        super(props);
        this.state = {
            modalOpen: false
        }
    }

    handleOpenModalClick = (e: React.MouseEvent) => {
        e.preventDefault();
        this.toggleModal();
    }

    toggleModal = () => {
        this.setState({ modalOpen: !this.state.modalOpen });
    }

    render() {

        return (
            <React.Fragment>
                <a href={`https://www.linkedin.com/in/rayjohnson141/`} className={`action`}>
                    <i className="fab fa-linkedin-in"></i>
                    <span>LinkedIn</span>
                </a>
                <a href={`https://github.com/rayjohnson1`} className={`action`}>
                    <i className="fab fa-github"></i>
                    <span>Github</span>
                </a>
                <a href={`https://medium.com/@raymondjohnson121`} className={`action`}>
                    <i className="fab fa-medium-m"></i>
                    <span>Blog</span>
                </a>
                <a href={`#`} className={`action`} onClick={this.handleOpenModalClick}>
                    <i className="fas fa-at"></i>
                    <span>Email</span>
                </a>
                {/* <a href={`#`} className={`action`}>
                    <i className="fas fa-newspaper"></i>
                    <span>Resume</span>
                </a> */}
                { this.state.modalOpen && 
                    <ModalPortal>
                        <ModalHandler close={this.toggleModal}>
                            {({ animateOut, bodyClick, closeClick }) => (
                                <div className={`modal-container ${animateOut ? 'modal-container--animate-out' : ''}`} onClick={closeClick}>
                                    <div className={`modal ${animateOut ? 'modal--animate-out' : ''}`} onClick={bodyClick}>
                                        <div className={`modal__title`} >
                                            <p>My Email</p>
                                        </div>
                                        <div className={`modal-body`} >
                                            <div className={`my-email`}>
                                                <p >raymondjohnson121@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </ModalHandler>
                    </ModalPortal>
                }
            </React.Fragment>
        );

    }

}