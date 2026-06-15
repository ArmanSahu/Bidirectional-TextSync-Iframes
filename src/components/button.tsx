import type { ReactElement } from "react"



export function Button({icon,onClick}:{
    icon: ReactElement,
    onClick?: () => void
}){
    return <button onClick={onClick} className="px-3 rounded-sm py-1 bg-gray-300/40 border  cursor-pointer hover:bg-gray-500/70 ">
        {icon}
    </button>
}