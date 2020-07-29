import React from 'react';

// 如果不用纯组件，直接用组件时，父级的state有变化就会重新渲染，需要用shouldComponentUpdate来控制
// 纯组件则自动对比了组件的props，若有变化才会重新渲染
// class TestPureComponent extends React.PureComponent {
class TestPureComponent extends React.Component {
    componentDidMount() {
    }
    render() {
        console.log('TestPureComponent is rendering');
        return null;
    }
}

export default TestPureComponent;
