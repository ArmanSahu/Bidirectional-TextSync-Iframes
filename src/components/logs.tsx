import { useEditor } from "../store/editorStore";
import { Log } from "./log";
import { Wrapper } from "./wrapper";


export function Logs(){

    const logs = useEditor(s => s.logs);

    return <div className="min-h-screen  ">
        <Wrapper>
            <div className="bg-white px-10 py-5 rounded-xl border border-slate-200 flex flex-col gap-4 ">
                <div className="grid grid-cols-5 gap-4 font-semibold border-b pb-3">
                    <div>Time</div>
                    <div>From</div>
                    <div>To</div>
                    <div>Type</div>
                    <div>Action</div>
                </div>
                <div className="flex flex-col gap-4 mt-3">
                    {logs.map((log, index) => (
                        <Log
                            key={index}
                            time={log.time}
                            from={log.from}
                            to={log.to}
                            type={log.type}
                            action={log.formatType}
                        />
                    ))}
                </div>
            </div>
        </Wrapper>
    </div>
}