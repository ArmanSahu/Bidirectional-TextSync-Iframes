import { useEffect, useRef } from "react";
import { Header } from "../components/header";
import { Frames } from "../components/frames";
import { useEditor, type LogsType } from "../store/editorStore";
import { Logs } from "../components/logs";






export function Dashboard(){


    const frameARef = useRef<HTMLIFrameElement>(null);
    const frameBRef = useRef<HTMLIFrameElement>(null);
    const addLogs = useEditor(s => s.addLogs);
    

    useEffect(() => {
        function handler(event: MessageEvent ){
            if(event.data.app !== "iframe-editor"){
                return;
            }

            if(event.origin !== window.location.origin){
                return;
            }

            
            
            addLogs({
                time: new Date().toLocaleTimeString(),
                type: event.data.type,
                from: event.data.frame,
                to: event.data.frame === 'A' ? 'B' : 'A',
                formatType: event.data.formatType
            })
            
            if(event.data.frame === 'A'){
                frameBRef.current?.contentWindow?.postMessage(event.data,"*");
            }
            if(event.data.frame === 'B'){
                frameARef.current?.contentWindow?.postMessage(event.data,"*");
            }
        }

        window.addEventListener("message",handler);

        return () => {
            window.removeEventListener("message", handler);
        };
    },[])

    return <div className="min-h-screen bg-white-100 flex flex-col gap-10"> 
        <Header />
        <Frames frameARef={frameARef} frameBRef={frameBRef} />
        <Logs />
    </div>
}