"use client"
import { useState } from "react"

export const Counter = () => {
    const [count, setCount] = useState(0)
    console.log('Count Component ', count)
    return (
        <button onClick={()=>setCount(count + 1)}>conut {count}</button>
    )
}