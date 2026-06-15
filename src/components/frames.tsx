import type { RefObject } from "react"
import { Wrapper } from "./wrapper"
import { Sync } from "../icons/sync"




export function Frames({frameARef,frameBRef}:{
    frameARef: RefObject<HTMLIFrameElement | null>
    frameBRef: RefObject<HTMLIFrameElement | null>
}){
    return <div>
         <Wrapper>
            <div className="flex items-center justify-center">
                <div>
                    <iframe ref={frameARef} className="h-96 w-xl" src="/frameA" />
                </div>
                <div>
                    <div className="text-green-600 bg-green-100 p-6 rounded-full ">
                        <Sync />
                    </div>
                    <p className="text-center text-md mt-4 text-gray-500 max-w-xl">
                        Real-Time Sync
                    </p>
                </div>
                <div >
                    <iframe ref={frameBRef}  className="h-96 w-xl flex justify-center ml-10" src="/frameB" />
                </div>
            </div>
        </Wrapper>     
    </div>
}