import React, { useEffect, useRef, useState } from 'react';

function TestRef() {
    const [count, setCount] = useState(0)
    const ref = useRef(2) // 设置初始值
    useEffect(() => {
        // 可以用来保存上次的数据，因为effect是在render后执行
        ref.current = count
    })
    return (
        <div>
            <p>count: {count}, prevCount: { ref.current }</p>
            <button onClick={() => setCount(count + 1)}>plus count</button>
        </div>
    )
}

export default TestRef;