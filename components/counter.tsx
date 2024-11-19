"use client"  // add this line for client component
import { useState } from "react"
import { useAuth, useUser} from '@clerk/nextjs'

export const Counter = () => {

    // const { isLoaded, userId, sessionId, getToken} = useAuth()
    const { isLoaded, isSignedIn, user} = useUser()

    const [count, setCount] = useState(0)
    console.log('Count Component ', count)

    // if(!isLoaded || !userId){
    //     return null
    // }

    if(!isLoaded || !isSignedIn){
        return null
    }
    
    
    return (
        <button onClick={()=>setCount(count + 1)}>conut {count}</button>
    )
}