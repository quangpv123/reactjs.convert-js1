import { useState } from "react"

function LengthString(){
    const [str, setStr] = useState('')
    const handleLength = (e) => {
        setStr(e.target.value)
    }
    return (
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 1-2:Write a program that takes a string as input and displays the length of the string.
            </h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào một chuỗi"
                value = {str}
                onChange = { e => handleLength(e) }
            ></input>
            <br></br>
            <p className="ml-8 mt-8">Độ dài chuỗi: {str.length}</p>
        </div>
    )   
}
export default LengthString