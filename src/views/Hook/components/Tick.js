import React, { useState, useEffect } from 'react';

function Tick() {
    const [tick, setTick] = useState(true)
    const [flag, setFlag] = useState(false)
    useEffect(() => {
        console.log(tick)
    })
    
    // 当参数为空数组时，表示这个effect只会订阅一次(只会在DidMount和unmount的时候执行订阅和清除)
    // 注意，如果传入空数组，那么这个effect会一直持有初始时的props和state，因为此时会创建一个闭包，将初始值保存在这个闭包中
    useEffect(() => {
        const timer = setInterval(() => {
            // 因为是空数组，所以这个tick一直是true，并且会有个警告
            // setTick(!tick)
            // 可使用传入函数的方式更新
            setTick(t => !t)
        }, 3000)
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <div>
            <p>{tick ? 'tick': 'tonk'}</p>
            <button onClick={() => setFlag(!flag)}>change flag</button>
        </div>
    )
}

export default Tick;
