import React from 'react';

export default class TestConsumer extends React.Component {
    render() {
        const { context } = this.props;
        console.log(context)
        return <div>{`${context.message}--${context.header}`}</div>
    }
}

