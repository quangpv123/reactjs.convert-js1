import { useState } from "react"

function Exercise33(){
    const [list, setList] = useState('')
    const [value, setValue] = useState('')
    const listArray = list.split(' ')
    const handle = () => {
        let count = 1
        for(let i=0;i<listArray.length;i++){
            if(parseFloat(listArray[i]) < parseFloat(listArray[i+1])){ count++ }
        }
        return setValue(count)
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 3-3: Write a program that takes a list of integers as input and returns the longest increasing subsequence of the numbers. ( Tìm độ dài của chuỗi con tịnh tiến dài nhất )
            </h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào chuỗi các số cách nhau bằng dấu khoảng trắng"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handle}>Kết quả</button>
            <p className="ml-8 mt-8">Độ dài của chuỗi con tịnh tiến dài nhất: {value}</p>
        </div>
    )
}
export default Exercise33