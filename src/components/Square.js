import { useState } from "react"

function Square(){
    const[square, setSquare] = useState('')
    const handleResult = (e) => {
        setSquare(e.target.value)
    }
    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 1-3: Write a program that takes a number as input and displays its square. </h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào một số"
                value = {square}
                onChange = {e => handleResult(e)}
            ></input>
            <br></br>
            <p className="ml-8 mt-8">Bình phương của {square || 'giá trị nhập vào'} là: {square*square || '...'}</p>
        </div>
    )
}

export default Square