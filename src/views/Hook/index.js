import React, { Component } from 'react';
import { Counter, Tick, useHook, ReducerCounter, TestLayoutEffect, TestMemo, TestRef } from './components';

function TestMyHook(props) {
    const isOnline = useHook(props.id)
    if (isOnline === null) {
        return <div>loading...</div>
    }
    return <div>{isOnline ? 'true': 'false'}</div>
}

class Hook extends Component {
    state = {
        tick: false,
        id: 1,
        showTestLayoutEffect: false,
    }
    componentDidMount() {
    }
    componentWillUnmount() {
    }
    
    render() {
        console.log(this.props)
        console.log(this.props.match.params)
        return (
            <div>
                <Counter />
                {!this.state.tick && <Tick />}
                <button onClick={() => this.setState({ tick: !this.state.tick })}>点击修改祖先级状态</button>
                <TestMyHook id={this.state.id} />
                <button onClick={() => this.setState({ id: 10 })}>点击修改id{this.state.id}</button>
                <ReducerCounter />
                {this.state.showTestLayoutEffect && <TestLayoutEffect />}
                <TestMemo />
                <TestRef />
            </div>
        )
    }
}

export default Hook;

