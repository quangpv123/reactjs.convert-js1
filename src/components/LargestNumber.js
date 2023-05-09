import { useState } from "react";

function LargestNumber(){
    const [num, setNum] = useState('')  
    let numArray = num.split(" ")
    const [largest, setLarget] = useState()
    const handleNum = () => {
       let max = Number(numArray[0])
       for(let i=1; i<numArray.length; i++){
        if(Number(numArray[i])>max){
            max = Number(numArray[i])
        }
       }
       console.log(max)
       return setLarget(max)
    }

    console.log(numArray)

    return(
        <div className='bg-img absolute h-1/2 w-9/12 bg-slate-300 ml-44 mt-8'>
            <h1 className = 'text-center mt-4 text-lg'>Level 1-4: Write a program that takes a list of numbers as input and displays the largest number in the list.</h1>
            <input
                className = 'w-10/12 text-center ml-8 mt-8'
                placeholder="Nhập vào dãy số cách nhau bằng dấu khoảng trắng"
                value={num}
                onChange={e => setNum(e.target.value)}
            ></input>
            <button className="ml-8 bg-orange-200 px-6 font-medium" onClick={handleNum}>Kết quả</button>
            <p className="ml-8 mt-8">Số lớn nhất trong dãy số trên là: {largest}</p>
        </div>
    )
}

export default LargestNumber