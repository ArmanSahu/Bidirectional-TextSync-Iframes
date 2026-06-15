

const frameVariant = {
    A: "bg-blue-200 w-fit py-1 px-3 rounded-xl text-blue-700",
    B: "bg-purple-200 w-fit py-1 px-3 rounded-xl text-purple-800"
}

export function Log({time,to,from,type,action}:{
    time: string,
    to: "A" | "B",
    from: "A" | "B",
    type: string,
    action: string
}){
    return <div className="grid grid-cols-5 gap-4 bg-slate-50 rounded-lg p-3 text-gray-800 font-medium items-center">
                <div>{time}</div>
                <div className={`${frameVariant[from]}`}>Frame {from}</div>
                <div className={`${frameVariant[to]}`}>Frame {to}</div>
                <div className="bg-green-100 w-fit py-1 px-3 rounded-xl text-green-900 ">{type}</div>
                <div>{action}</div>
        </div>
}