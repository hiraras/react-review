import React from 'react';

class ThemeButton extends React.Component {
    render() {
        return <button>{this.props.extraData.header}</button>
    }
}

export default ThemeButton;
