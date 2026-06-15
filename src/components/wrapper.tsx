import type { ReactNode } from "react"




export function Wrapper({children}:{
    children: ReactNode
}){
    return <div className="max-w-7xl mx-auto px-4">
        {children}
    </div>
}