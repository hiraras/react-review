import React, { useEffect, useLayoutEffect, useRef } from 'react';

const styles = {
    container: {
        border: '1px solid black',
        height: 999,
        position: 'relative',
        background: 'red'
    },
    innerP: {
        background: 'yellow',
        width: 220,
        height: 220,
        position: 'absolute',
        top: 0,
        margin: 0
    }
}

function TestLayoutEffect() {
    const ref = useRef(null)
    // 使用useEffect来处理dom样式变化时可能会有闪屏，因为在render提交新的dom后，浏览器的渲染和回调执行是异步的
    // 而useLayoutEffect则是会在提交新dom后阻塞浏览器的渲染，先完成回调
    useEffect(() => {
        ref.current.style.top = '50px'
        ref.current.style.left = 0
        ref.current.style.right = 0
        ref.current.style.margin = '0 auto'
    })
    return (
        <div style={styles.container}>
            <p style={styles.innerP} ref={ref}>this is p</p>
        </div>
    )
}

export default TestLayoutEffect;