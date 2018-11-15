import React, { Component } from 'react';

class Panel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }
    render() {
        const { style, children, title } = this.props;
        return (
            <div
                className="panel"
                style={style}
                onMouseEnter={_ => { this.setState({ show: true }) }}
                onMouseLeave={_ => { this.setState({ show: false }) }}
            >
                <div className="panel-text">{title}</div>
                <div className="panel-content" style={{ display: this.state.show ? 'block' : 'none' }}>
                    {children}
                </div>
            </div>
        );
    }
}

export default Panel;