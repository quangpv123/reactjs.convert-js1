import { useState } from "react"

function Sum () {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')
    const [result, setResult] = useState()
    const handleResult = () => {
        const sum = parseInt(value1) + parseInt(value2);
        setResult(sum);
    }
    return (
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 1-1: Write a program that takes two numbers as inputs and displays their sum. </h1>
            <input
            className = 'w-10/12 text-center ml-8 mt-8'
            placeholder="Số thứ nhất"
            value = {value1}
            onChange={e => setValue1(e.target.value)}
            ></input>
            <input
            className = 'w-10/12 text-center ml-8 mt-8'
            placeholder="Số thứ hai"
            value = {value2}
            onChange={e => setValue2(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handleResult}>Tính tổng</button> 
            <br/>
            <br/>
            <p className="ml-8 mt-8">Tổng hai    số: {result}</p>
        </div>
    )
  }
export default Sum