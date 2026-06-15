import { create } from "zustand";

export interface LogsType{
    frame?: "A" | "B",
    app?: "iframe-editor"
    time: string,
    type: string,
    from: "A" | "B",
    to: "A" | "B",
    formatType: string
}

interface EditorStore{
    logs: LogsType[];
    addLogs: (data: LogsType) => void
}

export const useEditor = create<EditorStore>((set)=>({
    logs: [],
    addLogs: (data: LogsType) => {
        set(state => ({
            logs: [...state.logs,data]
        }));
    }
}))