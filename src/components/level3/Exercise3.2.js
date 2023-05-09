import { useState } from "react"

function Exercise32(){
    const [list, setList] = useState('')
    const [value, setValue] = useState('')
    const listArray = list.split(' ').sort((a, b) => a-b)
    const handle = () => {
        return setValue(listArray[listArray.length-1]-listArray[0])
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 3-2: Write a program that takes a list of integers as input and returns the maximum difference between any two elements in the list.</h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào chuỗi các số cách nhau bằng dấu khoảng trắng"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handle}>Kết quả</button>
            <p className="ml-8 mt-8">Hiệu lớn nhất của 2 số trong chuỗi là:  {value} (Hiệu của {listArray[listArray.length-1]} và {listArray[0]})</p>
        </div>
    )
}
export default Exercise32