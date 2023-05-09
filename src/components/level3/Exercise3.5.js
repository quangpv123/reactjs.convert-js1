import { useState } from "react"

function Exercise35(){
    const [list, setList] = useState('')
    const [value, setValue] = useState('')
    const listArray = list.split(' ').sort((a, b) => a-b)
    const handle = () => {
        let smallest = 1
        for(let i=0; i<listArray.length; i++){
            if(listArray[i] <= smallest){
                smallest += parseFloat(listArray[i])
            }
        }
        return setValue(smallest)
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 3-5: Write a program that takes a list of numbers as input and returns the smallest positive integer that cannot be represented as the sum of any subset of the list.
            </h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handle}>Kết quả</button>
            <p className="ml-8 mt-8">Số nguyên dương nhỏ nhất không biểu diễn được dưới dạng tổng của các số đã nhập: {value}</p>
        </div>
    )
}
export default Exercise35