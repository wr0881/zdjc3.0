import React, { Component } from 'react';
import './Card.scss';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { style, className, children, icon, text } = this.props;
        return (
            <div className={`card ${className ? className : ''}`} style={style}>
                <div className="card-title">
                    <div className="card-title-icon">
                        {icon}
                    </div>
                    <div className="card-title-text">{text}</div>
                </div>
                <div className="card-content">
                    {children}
                </div>
            </div>
        );
    }

}

export default Card;