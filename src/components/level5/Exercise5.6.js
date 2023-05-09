import { useState } from "react"

function Exercise56(){
    let [list, setList] = useState('')
    const [newList, setNewList] = useState('')
    const handle = () => {
        while(list.includes("  ")){
        list = list.replace("  ", " ");
        setNewList(list)
    }
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 5-6: TrimAll: Viết function loại bỏ tất cả khoảng trắng đầu và cuối của một chuỗi bất kỳ, nếu có khoảng trắng ở giữa chuỗi đó thì chỉ giữ lại một khoảng trắng.</h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào chuỗi cần xử lý"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button 
                    onClick={handle}
                    className="ml-8 bg-orange-200 px-6 font-medium"
            >Xử lý</button>
            <p className="ml-8 mt-8">Chuỗi đã được xử lý: {newList}</p>
        </div>
    )
}
export default Exercise56