import { useState } from "react"

function Exercise52(){
    const [list, setList] = useState('')
    const [chunkSize, setChunkSize] = useState('')
    const [chunks, setChunks] = useState('')
    const listArray = list.split(' ')
    const handle = () => {
        if(listArray.length <= chunkSize)   {
            return listArray;
        }
    
        let chunk = [];
    
        for(let i=0; i<listArray.length; i += chunkSize || 1){
            chunk.push(listArray.slice(i, i + chunkSize || 1))
        }
        setChunks(JSON.stringify(chunk))
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
        <h1 className = 'text-center mt-4 text-lg'>Level 5-8: Chunk: Cho một mảng đầu vào, viết một function để chia đều mảng theo số phần chỉ định.</h1>
        <input
            className = 'w-10/12 text-center ml-8 mt-8'
            placeholder="Nhập vào dãy các số cách nhau bằng dấu khoảng trắng"
            value={list}
            onChange={e => setList(e.target.value)}
        ></input>
        <input
            className = 'w-10/12 text-center ml-8 mt-8'
            placeholder="Độ dài mảng muốn tách"
            value={chunkSize}
            onChange={e => setChunkSize(e.target.value)}
        ></input>
        <button 
                onClick={handle}
                className="ml-8 bg-orange-200 px-6 font-medium"
        >Kết quả</button>
        <p className="ml-8 mt-8">Các mảng được tách theo độ dài yêu cầu {chunks}</p>
    </div>
    )
}
export default Exercise52