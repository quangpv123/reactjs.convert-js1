import { useState } from "react"

function Exercise25(){
    const [list, setList] = useState('')
    const listArray = list.split(' ')
    const [result, setResult] = useState('')
    console.log(list)
    console.log(listArray)

    const handle = () => {
        let sum = 0, maxSum = 0
        for(let i=0;i<listArray.length;i++){
            sum = Math.max(0, sum + parseFloat(listArray[i]));
            maxSum = Math.max(maxSum, sum)
        }
        return setResult(maxSum)
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 2-5: Write a program that takes a list of integers as input and returns the maximum sum of any contiguous subarray within the list.</h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào dãy số cách nhau bằng dấu khoảng trắng"
                value={list}
                onChange={e => setList(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handle}>Kết quả</button>
            <p className="ml-8 mt-8"> Tổng lớn nhất của mảng con: {result}</p>
        </div>
    )
}

export default Exercise25