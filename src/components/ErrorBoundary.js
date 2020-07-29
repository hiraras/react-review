import React from 'react';
import Wrapper from './ComponentWrapper';

// 这些是不能捕获的错误:
// 事件处理 (比如调用了一个不存在的方法this.abc(),并不会执行componentDidCatch)
// 异步代码 （例如 setTimeout 或 requestAnimationFrame 回调函数）
// 服务端渲染
// 错误边界自身抛出来的错误 （而不是其子组件）

class ErrorBoundary extends React.Component {
    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        console.log('getDerivedStateFromError-error:', error);
        return { hasError: true }
    }

    componentDidCatch(error, errorInfo) {
        console.log('componentDidCatch-error', error);
        console.log('componentDidCatch-errorInfo', errorInfo);
    }
    
    render() {
        return <Wrapper>
            {this.state.hasError ? <div>some error happend. please watch console to find the error message</div> : this.props.children}
        </Wrapper>
    }
}

export default ErrorBoundary;
