import React, { Component } from 'react';
import ReactDOM from 'react-dom';


const modalRoot: HTMLElement = document.getElementById('modal-root') as HTMLElement;

interface IModalPortalProps {

}

export default class ModalPortal extends Component<IModalPortalProps> {


    private el: HTMLDivElement;

    constructor(props: IModalPortalProps){
        super(props);

        this.el = document.createElement(`div`);

    }

    componentDidMount(){
        modalRoot.appendChild(this.el);
    }

    componentWillUnmount(){
        modalRoot.removeChild(this.el);
    }

    render() {
        return ReactDOM.createPortal(this.props.children, this.el);
    }
}
