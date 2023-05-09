import { useState } from "react"

function Exercise41(){
    const [list, setList] = useState('')
    const [value, setValue] = useState('')
    const listArray = list.split(' ').sort((a, b) => a - b)
    const handle = () => {
        let n = listArray.length;
        let max1 = listArray[n-1] * listArray[n-2] * listArray[n-3];
        let max2 = listArray[0] * listArray[1] * listArray[n-1];
        return setValue(Math.max(max1, max2))
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 4-6: Write a program that takes a list of integers as input and returns the maximum product of any three distinct elements in the list.
            </h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào dãy số cách nhau bằng dấu khoảng trắng"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handle}>Kết quả</button>
            <p className="ml-8 mt-8">Tích lớn nhất của 3 số trong dãy số: {value}</p>
        </div>
    )
}
export default Exercise41