import React from 'react';

export default class Transfer extends React.Component {
    render() {
        const Child = this.props.child;
        return <Child {...this.props} extraData={this.context} />
    }
}

