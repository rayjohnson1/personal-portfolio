import React from 'react';

interface IProps {
    children: (params: {
        animateOut: boolean,
        bodyClick: (e: React.MouseEvent) => void,
        closeClick: (e: React.MouseEvent) => void
    }) => JSX.Element;
    close: () => void;
}

interface IState { animateOut: boolean }

export default class ModalHandler extends React.Component<IProps, IState> {

    constructor(props: IProps){
        super(props);

        this.handleCloseClick = this.handleCloseClick.bind(this);
        this.handleBodyClick = this.handleBodyClick.bind(this);

        this.state = {
            animateOut: false
        }
    }

    handleCloseClick(e: React.MouseEvent){
        if(!e.isDefaultPrevented)
            e.preventDefault();

        e.stopPropagation();
        this.setState({ animateOut: true });
        setTimeout(() => {
            this.props.close();
        }, 1000);
        
    }

    handleBodyClick(e: React.MouseEvent){
        if(!e.isDefaultPrevented)
            e.preventDefault();

        e.stopPropagation();
    }

    render() {
        return this.props.children({ animateOut: this.state.animateOut, bodyClick: this.handleBodyClick, closeClick: this.handleCloseClick })
    }

}