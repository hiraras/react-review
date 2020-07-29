import React, { Component } from 'react';
import { ErrorBoundary, Error, TransformRef, TestPureComponent, TestPropsType } from '../../components';

function DivList(props) {
    return [
        <div key="div-list-1">{props.name}</div>,
        <div key="div-list-2">2</div>
    ]
}
const types = [1,2];
// 定义默认props
DivList.defaultProps = {
    name: 'div-list'
}

class Home extends Component {
    constructor() {
        super();
        this.ref = React.createRef();
    }
    state = {
        message: 'hi',
        counter: 0,
    }
    componentDidMount() {
        // this.initTick();
    }
    componentWillUnmount() {
        this.timer && clearInterval(this.timer);
    }
    initTick = () => {
        this.timer = setInterval(() => {
            this.setState({
                counter: this.state.counter + 1
            });
        }, 1000);
    }
    handleClick = () => {
        this.setState((state, props) => {
            console.log('state === this.state:', state === this.state)
            console.log('props === this.props:', props === this.props)
            return { counter: state.counter + 1 }
        });
    }

    handleInputFocus = () => {
        this.ref.current.focus();
    }

    handleChangeDataA = () => {
        this.setState({
            data: { a: 2 }
        });
    }

    handleChangeCounter = () => {
        for (let i = 0; i < 3; i ++) {
            this.setState(state => {
                return { counter: state.counter + 1 }
            })
        }
    }

    handleChangeOutterData = () => {
        types.push(3)
        // 当组件不依赖state或props，依赖外部数据时，可用forceUpdate来更新
        this.forceUpdate();
    }

    handleCopy = (event) => {
        console.log('event.clipboardData:', event.clipboardData)
        console.log('event.DOMDataTransfer:', event.DOMDataTransfer)
    }

    handleJumpToClick = () => {
        this.props.history.push('/hook/99')
    }
    
    render() {
        const { message } = this.state;
        // 创建了一个ref类型的指针，再将其传入到所需组件的ref中(ref被特殊处理不能在props中取，需要在React.forwardRef的参数函数中取)，
        // 再扔到所需的input、button等元素上，高阶组件同理
        // const ref = React.createRef();
        // const handleInputFocus = () => {
        //     ref.current.focus();
        // }
        console.log('this.props:', this.props)
        return (
            <div>
                <p>{ message }</p>
                <button onClick={this.handleClick}>click</button>
                <p>counter: { this.state.counter }</p>
                <ErrorBoundary>
                    <Error />
                </ErrorBoundary>
                <TransformRef ref={this.ref}>
                    <button onClick={this.handleInputFocus}>focus input</button>
                    <p>测试React.Children相关方法<span>测试内部元素</span></p>
                </TransformRef>
                <DivList />
                {React.cloneElement(<DivList />)}
                <TestPureComponent />
                <button onClick={this.handleChangeDataA}>点击修改data的a属性</button>
                <TestPropsType message={'hah'} />
                <button onClick={this.handleChangeCounter}>plus counter: {this.state.counter}</button>
                <p>{types}</p>
                <button onClick={this.handleChangeOutterData}>点击修改外部数据</button>
                {/* 非受控组件 */}
                <select defaultValue={2}>
                    <option>1</option>
                    <option>2</option>
                </select>
                <div onCopy={this.handleCopy}>this is div content</div>
                <button onClick={this.handleJumpToClick}>跳转到hook</button>
            </div>
        )
    }
}

export default Home;

