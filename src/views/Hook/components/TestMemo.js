import React, { useMemo, useState } from 'react';

// 类似于vue 的computed
function TestMemo() {
    const [count, setCount] = useState(0)
    // 第二个参数和useEffect一样，根据数组值变化结果来判断是否重新计算
    // 返回第一个参数(函数)返回的值
    const processedCount = useMemo(() => {
        // 即便不使用count也行
        return count * (Math.floor(Math.random() * 10) * 3) ** 3;
    }, [count])
    return (
        <div>
            <p>count: {count}</p>
            <p>processedCount: {processedCount}</p>
            <button onClick={() => setCount(count + 1)}>plus count</button>
        </div>
    )
}

export default TestMemo;