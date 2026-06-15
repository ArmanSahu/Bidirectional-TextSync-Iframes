import { Connected } from "./connected";
import { Wrapper } from "./wrapper";



export function Header(){
    return  <div className="bg-white border-slate-200 border-b-2 text-slate-900 py-4">
        <Wrapper>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-semibold ">
                        Bidirectional Text Sync Across Editors
                    </h1>
                    <p className="text-sm  text-slate-500">
                        Make changes in either text editors and see them sync in real time
                    </p>
                </div>
                <div className="border-slate-200 border px-2 py-1 text-green-600 rounded-md bg-white flex items-center gap-2">
                    <Connected />
                    <p>Connected</p>
                </div>
            </div>
        </Wrapper>
    </div>
}