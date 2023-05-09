import { useState } from "react"

function Exercise21(){
    const [list, setList] = useState('')
    const [value, setValue] = useState('')
    let listArray = list.split(' ').sort((a, b) => a - b)
    const handle = () => {
        return setValue(listArray[listArray.length-2])
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 2-1: Write a program that takes a list of numbers as input and returns the second largest number in the list.</h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào chuỗi các số cách nhau bằng dấu khoảng trắng"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handle}>Kết quả</button>
            <p className="ml-8 mt-8">Số lớn thứ 2 là: {value}</p>
        </div>
    )
}

export default Exercise21