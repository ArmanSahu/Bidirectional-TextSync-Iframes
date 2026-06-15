import { useEffect, useRef, useState } from "react"
import { Bold } from "../icons/bold"
import { Italic } from "../icons/italic"
import { Strikethrough } from "../icons/strikethrough"
import { Button } from "./button"
import { Connected } from "./connected"




export function Editor({frame}:{
    frame: "A" | "B"
}){

    const editorRef = useRef<HTMLDivElement>(null);
    const anotherFrameUpdate = useRef(false);
    const [syncStatus,setSyncStatus] = useState(true);
    const timeoutRef = useRef<number>(undefined);

    useEffect(() => {

        function handleMessage(event: MessageEvent){
            clearTimeout(timeoutRef.current);
            setSyncStatus(false);
            timeoutRef.current = setTimeout(() => {
                setSyncStatus(true);
            }, 5 * 100);
            if(event.data.frame !== frame){
                anotherFrameUpdate.current = true;
                editorRef.current!.innerHTML = event.data.content;
            }
        }

        window.addEventListener("message",handleMessage);
         return () => window.removeEventListener("message", handleMessage);
    },[frame]);

    function handleTextFormatting(formatType: string){
        document.execCommand(formatType,false,undefined);
        sendMessage(formatType);
    }

    function sendMessage(formatType: string){
        if(anotherFrameUpdate.current){
            anotherFrameUpdate.current = false;
            return;
        }
        window.parent.postMessage({
            app: "iframe-editor",
            type: `FORMAT_SYNC`,
            frame: frame,
            content: editorRef.current?.innerHTML,
            formatType
        },window.location.origin);
    }

    return <div className="bg-white h-80 max-h-80 w-lg overflow-scroll border border-slate-200 m-2 rounded-lg p-3 flex flex-col gap-3">
        <div className="text-xl font-semibold flex items-center justify-between">
            <h2>Frame {frame}</h2>
            <div className="flex items-center gap-2 text-sm font-semibold text-green-600 bg-white px-2 py-1 rounded-md border-slate-200 border">
                <Connected />
                <p>{syncStatus ? "Synced" : "Syncing..."}</p>
            </div>
        </div>
        <fieldset className="flex gap-2 p-2 border rounded-md  border-gray-400/60">
            <Button icon={<Bold />} onClick={() => handleTextFormatting("bold")} />
            <Button icon={<Italic />} onClick={() => handleTextFormatting("italic")} />
            <Button icon={<Strikethrough />} onClick={() =>  handleTextFormatting("strikeThrough")} />
        </fieldset>
        <div ref={editorRef}  onInput={() => sendMessage("text")} contentEditable="true" className="border border-gray-400/60 h-full rounded-xl p-4 outline-none bg-white-100 " >
            lorem*100
        </div>
    </div>
}