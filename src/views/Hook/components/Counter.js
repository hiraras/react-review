import React, { useState, useEffect } from 'react';

function Counter() {
    // const [count, setCount] = useState(0)
    // 使用函数式初始值，用来计算复杂的初始值
    const [count, setCount] = useState(function() {
        return 0;
    })
    useEffect(() => {
        console.log('component is mounted')
        document.title = `clicked ${count} times`
    })
    return (
        <div>
            <p>count: {count}</p>
            <button onClick={() => setCount(count + 1)}>plus count</button>
        </div>
    )
}

export default Counter;